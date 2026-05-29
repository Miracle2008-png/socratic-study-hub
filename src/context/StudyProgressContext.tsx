import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

// ── Types ────────────────────────────────────────────────────────────────────
export interface TopicVisit {
  topicId: string;
  subject: string;
  topicLabel: string;
  visitedAt: string; // ISO string
  durationMs: number; // ms spent
}

export interface SubjectProgress {
  subject: string;
  visitedTopics: Set<string>;
  totalTopics: number;
}

export interface StudyProgressState {
  topicVisits: TopicVisit[];          // chronological list, most recent first
  studySessionStart: string | null;   // ISO — when the current session began
  weeklyMinutes: number;              // total minutes studied this calendar week
  weekStartDate: string;              // ISO date (Mon) of the current week
  topicsCompletedIds: string[];       // all topic IDs ever opened (unique)
}

interface StudyProgressContextType extends StudyProgressState {
  recordTopicOpen: (topicId: string, subject: string, label?: string) => void;
  recordTopicClose: () => void;
  getSubjectProgress: (subject: string, totalTopicsInSubject: number) => { pct: number; visited: number };
  recentActivity: TopicVisit[];
  hoursThisWeek: number;
  topicsMasteredCount: number;
}

// ── Defaults ─────────────────────────────────────────────────────────────────
const todayWeekStart = (): string => {
  const d = new Date();
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); // Monday
  return d.toISOString().split('T')[0];
};

const DEFAULT: StudyProgressState = {
  topicVisits: [],
  studySessionStart: null,
  weeklyMinutes: 0,
  weekStartDate: todayWeekStart(),
  topicsCompletedIds: [],
};

const STORAGE_KEY = 'study_progress_v1';

const StudyProgressContext = createContext<StudyProgressContextType | undefined>(undefined);

// ── Provider ─────────────────────────────────────────────────────────────────
export const StudyProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<StudyProgressState>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return DEFAULT;
      const parsed = JSON.parse(raw) as StudyProgressState;
      // Reset weekly minutes if we're in a new week
      const currentWeekStart = todayWeekStart();
      if (parsed.weekStartDate !== currentWeekStart) {
        return { ...parsed, weeklyMinutes: 0, weekStartDate: currentWeekStart, studySessionStart: null };
      }
      return { ...parsed, studySessionStart: null }; // always clear in-progress session on reload
    } catch {
      return DEFAULT;
    }
  });

  // Persist on every change
  useEffect(() => {
    const toSave = { ...state };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  }, [state]);

  // ── Record topic open ────────────────────────────────────────────────────
  const recordTopicOpen = useCallback((topicId: string, subject: string, label?: string) => {
    const now = new Date().toISOString();
    setState(prev => ({
      ...prev,
      studySessionStart: now,
      topicsCompletedIds: prev.topicsCompletedIds.includes(topicId)
        ? prev.topicsCompletedIds
        : [...prev.topicsCompletedIds, topicId],
      // Prepend a provisional visit (duration 0, will be updated on close)
      topicVisits: [
        {
          topicId,
          subject,
          topicLabel: label || topicId.replace(/_/g, ' '),
          visitedAt: now,
          durationMs: 0,
        },
        ...prev.topicVisits,
      ].slice(0, 50), // Keep last 50
    }));
  }, []);

  // ── Record topic close ───────────────────────────────────────────────────
  const recordTopicClose = useCallback(() => {
    setState(prev => {
      if (!prev.studySessionStart) return prev;
      const durationMs = Date.now() - new Date(prev.studySessionStart).getTime();
      const durationMin = durationMs / 60000;

      // Update the most recent visit's duration
      const visits = [...prev.topicVisits];
      if (visits.length > 0) {
        visits[0] = { ...visits[0], durationMs };
      }

      return {
        ...prev,
        studySessionStart: null,
        weeklyMinutes: prev.weeklyMinutes + durationMin,
        topicVisits: visits,
      };
    });
  }, []);

  // ── Derived data ─────────────────────────────────────────────────────────
  const getSubjectProgress = useCallback(
    (subject: string, totalTopicsInSubject: number) => {
      const visited = state.topicsCompletedIds.filter(id => {
        // We need subject-tagged IDs — use the visits list for lookup
        const visit = state.topicVisits.find(v => v.topicId === id);
        return visit?.subject === subject;
      }).length;
      const pct = totalTopicsInSubject > 0 ? Math.round((visited / totalTopicsInSubject) * 100) : 0;
      return { pct, visited };
    },
    [state.topicsCompletedIds, state.topicVisits]
  );

  const recentActivity = state.topicVisits.slice(0, 8);
  const hoursThisWeek = state.weeklyMinutes / 60;
  const topicsMasteredCount = state.topicsCompletedIds.length;

  return (
    <StudyProgressContext.Provider
      value={{
        ...state,
        recordTopicOpen,
        recordTopicClose,
        getSubjectProgress,
        recentActivity,
        hoursThisWeek,
        topicsMasteredCount,
      }}
    >
      {children}
    </StudyProgressContext.Provider>
  );
};

export const useStudyProgress = () => {
  const ctx = useContext(StudyProgressContext);
  if (!ctx) throw new Error('useStudyProgress must be used within StudyProgressProvider');
  return ctx;
};

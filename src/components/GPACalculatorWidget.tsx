import React, { useState, useEffect } from 'react';
import { Calculator, Plus, Trash2, GraduationCap, Target } from 'lucide-react';
import { supabase } from '../utils/supabase';
import { useAuth } from '../context/AuthContext';

interface Course {
  id: string;
  name: string;
  credits: number;
  grade: string;
}

const gradeScale: Record<string, number> = {
  'A+': 4.0, 'A': 4.0, 'A-': 3.7,
  'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7,
  'D+': 1.3, 'D': 1.0, 'F': 0.0
};

export const GPACalculatorWidget: React.FC = () => {
  const { currentUser } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [targetGPA, setTargetGPA] = useState<number | ''>('');
  
  useEffect(() => {
    if (!currentUser) return;
    const fetchData = async () => {
      const { data } = await supabase.from('gpa_data').select('*').eq('user_id', currentUser.id).single();
      if (data) {
        setCourses(data.courses && data.courses.length > 0 ? data.courses : [{ id: Date.now().toString(), name: 'Calculus 101', credits: 3, grade: 'A' }]);
        setTargetGPA(data.target_gpa || '');
      } else {
        setCourses([{ id: Date.now().toString(), name: 'Calculus 101', credits: 3, grade: 'A' }]);
      }
    };
    fetchData();
  }, [currentUser]);

  const saveCourses = async (newCourses: Course[]) => {
    setCourses(newCourses);
    if (currentUser) {
      await supabase.from('gpa_data').upsert({
        user_id: currentUser.id,
        courses: newCourses as any,
        target_gpa: targetGPA === '' ? null : targetGPA,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id' });
    }
  };

  const addCourse = () => {
    saveCourses([...courses, { id: Date.now().toString(), name: `Course ${courses.length + 1}`, credits: 3, grade: 'A' }]);
  };

  const removeCourse = (id: string) => {
    saveCourses(courses.filter(c => c.id !== id));
  };

  const updateCourse = (id: string, field: keyof Course, value: any) => {
    saveCourses(courses.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const handleTargetChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value === '' ? '' : parseFloat(e.target.value);
    setTargetGPA(val);
    if (currentUser) {
      await supabase.from('gpa_data').upsert({
        user_id: currentUser.id,
        courses: courses as any,
        target_gpa: val === '' ? null : val,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id' });
    }
  };

  const totalCredits = courses.reduce((sum, c) => sum + (c.credits || 0), 0);
  const totalPoints = courses.reduce((sum, c) => sum + ((gradeScale[c.grade] || 0) * (c.credits || 0)), 0);
  const currentGPA = totalCredits > 0 ? (totalPoints / totalCredits) : 0;
  
  const gpaColor = currentGPA >= 3.5 ? '#10b981' : currentGPA >= 3.0 ? '#0ea5e9' : currentGPA >= 2.0 ? '#f59e0b' : '#ef4444';

  return (
    <div className="dash-glass-panel gpa-widget anim-fade">
      <div className="panel-header">
        <div className="panel-title-row">
          <GraduationCap size={16} style={{ color: 'var(--color-accent)' }} />
          <h3 className="panel-title">GPA Forecaster</h3>
        </div>
        <div className="gpa-display" style={{ color: gpaColor }}>
          {currentGPA.toFixed(2)} <span className="gpa-label">GPA</span>
        </div>
      </div>
      
      <div className="gpa-content">
        <div className="course-list">
          <div className="course-header">
            <span>Course Name</span>
            <span>Credits</span>
            <span>Grade</span>
            <span></span>
          </div>
          {courses.map(c => (
            <div key={c.id} className="course-row fade-in">
              <input 
                type="text" 
                value={c.name} 
                onChange={(e) => updateCourse(c.id, 'name', e.target.value)}
                className="course-input name-input"
                placeholder="Course Name"
              />
              <input 
                type="number" 
                min="0"
                max="10"
                value={c.credits} 
                onChange={(e) => updateCourse(c.id, 'credits', parseInt(e.target.value) || 0)}
                className="course-input credits-input"
              />
              <select 
                value={c.grade} 
                onChange={(e) => updateCourse(c.id, 'grade', e.target.value)}
                className="course-input grade-input"
              >
                {Object.keys(gradeScale).map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
              <button className="remove-course-btn" onClick={() => removeCourse(c.id)}>
                <Trash2 size={14} />
              </button>
            </div>
          ))}
          <button className="add-course-btn" onClick={addCourse}>
            <Plus size={14} /> Add Course
          </button>
        </div>
        
        <div className="target-gpa-section">
          <div className="target-input-row">
            <Target size={14} style={{ color: 'var(--color-text-muted)' }} />
            <span>Target GPA:</span>
            <input 
              type="number" 
              step="0.01" 
              min="0" 
              max="4.0" 
              value={targetGPA} 
              onChange={handleTargetChange} 
              className="target-input"
              placeholder="e.g. 3.5"
            />
          </div>
          
          {typeof targetGPA === 'number' && targetGPA > 0 && targetGPA <= 4.0 && (
            <div className="target-analysis">
              {currentGPA >= targetGPA ? (
                <span className="on-track">You are currently hitting your target!</span>
              ) : (
                <span className="needs-work">
                  You need to improve by {(targetGPA - currentGPA).toFixed(2)} points. Focus on raising lower grades!
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .gpa-widget {
          display: flex;
          flex-direction: column;
        }
        .gpa-display {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 800;
          text-shadow: 0 0 20px currentColor;
          display: flex;
          align-items: baseline;
          gap: 4px;
        }
        .gpa-label {
          font-size: 11px;
          font-weight: 600;
          opacity: 0.8;
        }
        .course-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 16px;
        }
        .course-header {
          display: grid;
          grid-template-columns: 1fr 60px 60px 30px;
          gap: 8px;
          padding: 0 12px;
          font-size: 11px;
          color: var(--color-text-muted);
          font-weight: 600;
          font-family: var(--font-display);
        }
        .course-row {
          display: grid;
          grid-template-columns: 1fr 60px 60px 30px;
          gap: 8px;
          align-items: center;
        }
        .course-input {
          background: var(--color-base-alt);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          padding: 8px 12px;
          color: var(--color-text-primary);
          font-size: 13px;
          font-family: var(--font-primary);
          transition: border-color var(--transition-fast);
        }
        .course-input:focus {
          border-color: var(--color-accent);
          outline: none;
        }
        .credits-input, .grade-input {
          text-align: center;
          padding: 8px 4px;
        }
        .remove-course-btn {
          background: transparent;
          border: none;
          color: var(--color-text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          border-radius: 6px;
          transition: all var(--transition-fast);
        }
        .remove-course-btn:hover {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        .add-course-btn {
          background: transparent;
          border: 1px dashed var(--color-border-strong);
          color: var(--color-text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
          margin-top: 4px;
        }
        .add-course-btn:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
          background: rgba(212,175,55,0.05);
        }
        
        .target-gpa-section {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid var(--color-border);
        }
        .target-input-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--color-text-secondary);
        }
        .target-input {
          background: var(--color-base-alt);
          border: 1px solid var(--color-border);
          border-radius: 6px;
          padding: 6px 10px;
          color: var(--color-text-primary);
          width: 80px;
          font-family: var(--font-primary);
        }
        .target-input:focus {
          border-color: var(--color-accent);
          outline: none;
        }
        .target-analysis {
          margin-top: 12px;
          font-size: 12px;
          padding: 10px 14px;
          border-radius: 8px;
          background: var(--color-base-alt);
        }
        .on-track {
          color: #10b981;
          font-weight: 500;
        }
        .needs-work {
          color: #f59e0b;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

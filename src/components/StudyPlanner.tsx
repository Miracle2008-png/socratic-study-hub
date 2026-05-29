import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, CheckCircle, Circle, Plus, Target, Wand2, Loader2, BookOpen, FlaskConical, Calculator } from 'lucide-react';

const StudyPlanner: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete Calculus III Problem Set', subject: 'Math', time: '2:00 PM', completed: false },
    { id: 2, title: 'Review Thermodynamics Lecture Notes', subject: 'Physics', time: '4:30 PM', completed: true },
    { id: 3, title: 'Draft Organic Chemistry Lab Report', subject: 'Chemistry', time: '7:00 PM', completed: false },
  ]);

  const [isGenerating, setIsGenerating] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', subject: 'Math', time: '12:00 PM' });

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const addTask = () => {
    if (newTask.title.trim()) {
      setTasks([...tasks, { id: Date.now(), ...newTask, completed: false }]);
      setShowModal(false);
      setNewTask({ title: '', subject: 'Math', time: '12:00 PM' });
    }
  };

  const autoGeneratePlan = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setTasks([
        { id: 1, title: 'Quantum Mechanics: Chapter 1-2 Review', subject: 'Physics', time: '1:00 PM', completed: false },
        { id: 2, title: 'Practice 10 Eigenvector Problems', subject: 'Math', time: '3:30 PM', completed: false },
        { id: 3, title: 'Linear Algebra Flashcards', subject: 'Math', time: '6:00 PM', completed: false },
        { id: 4, title: 'Review Weak Topic: Thermodynamics', subject: 'Physics', time: '8:00 PM', completed: false },
      ]);
      setIsGenerating(false);
    }, 1500);
  };

  const completedTasksCount = tasks.filter(t => t.completed).length;
  const completionPercentage = tasks.length === 0 ? 0 : Math.round((completedTasksCount / tasks.length) * 100);

  const getSubjectIcon = (subject: string) => {
    if (subject.toLowerCase().includes('math')) return <Calculator size={12} />;
    if (subject.toLowerCase().includes('phys')) return <Target size={12} />;
    if (subject.toLowerCase().includes('chem')) return <FlaskConical size={12} />;
    return <BookOpen size={12} />;
  };

  return (
    <div className="study-planner">
      <div className="module-header premium-glass-card">
        <div className="header-glow"></div>
        <div className="title-row" style={{ position: 'relative', zIndex: 2 }}>
          <CalendarIcon size={28} className="text-gold-gradient" />
          <h3>Academic Itinerary</h3>
        </div>
        <p style={{ position: 'relative', zIndex: 2, color: 'var(--color-text-secondary)', fontSize: '15px' }}>
          Curate your focus sessions and track your academic milestones with precision.
        </p>
      </div>

      <div className="planner-layout">
        <div className="schedule-column premium-glass-card">
          <div className="column-header">
            <h4>Today's Agenda</h4>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                className="gold-btn glass-btn" 
                onClick={autoGeneratePlan}
                disabled={isGenerating}
              >
                {isGenerating ? <Loader2 size={16} className="spin" /> : <Wand2 size={16} />}
                {isGenerating ? 'Synthesizing...' : 'Auto-Generate'}
              </button>
              <button className="gold-btn icon-only glass-btn" onClick={() => setShowModal(true)}>
                <Plus size={18} />
              </button>
            </div>
          </div>
          
          <div className="task-list">
            {tasks.map((task, idx) => (
              <div 
                key={task.id} 
                className={`task-item ${task.completed ? 'completed' : ''}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="task-checkbox" onClick={() => toggleTask(task.id)}>
                  {task.completed ? <CheckCircle size={22} color="var(--color-accent)" /> : <Circle size={22} color="rgba(255,255,255,0.2)" />}
                </div>
                <div className="task-details" onClick={() => toggleTask(task.id)}>
                  <h5 className="task-title">{task.title}</h5>
                  <div className="task-meta">
                    <span className={`task-tag tag-${task.subject.toLowerCase()}`}>
                      {getSubjectIcon(task.subject)}
                      {task.subject}
                    </span>
                    <span className="task-time"><Clock size={12} /> {task.time}</span>
                  </div>
                </div>
                <button 
                  className="task-delete-btn" 
                  onClick={(e) => { e.stopPropagation(); deleteTask(task.id); }}
                  title="Delete Task"
                >
                  <Plus size={18} style={{ transform: 'rotate(45deg)' }} />
                </button>
              </div>
            ))}
            {tasks.length === 0 && (
              <div className="empty-tasks">
                <Target size={32} style={{ opacity: 0.3, marginBottom: '12px' }} />
                <p>Your agenda is clear.</p>
                <span>Add a task or auto-generate a schedule.</span>
              </div>
            )}
          </div>
        </div>

        <div className="progress-column">
          <div className="premium-glass-card stat-card">
            <div className="stat-bg-glow"></div>
            
            <div className="circular-progress-container">
              <svg viewBox="0 0 100 100" className="circular-progress">
                <circle className="progress-bg" cx="50" cy="50" r="45"></circle>
                <circle 
                  className="progress-value" 
                  cx="50" cy="50" r="45" 
                  style={{ strokeDashoffset: 283 - (283 * completionPercentage) / 100 }}
                ></circle>
              </svg>
              <div className="stat-value-inner">
                <span className="stat-number">{completionPercentage}</span>
                <span className="stat-percent">%</span>
              </div>
            </div>
            <div className="stat-label">Daily Task Completion</div>
          </div>

          <div className="premium-glass-card upcoming-card">
            <h4>Upcoming Exams</h4>
            <ul className="exam-list">
              <li>
                <div className="exam-date">
                  <span className="month">NOV</span>
                  <span className="day">12</span>
                </div>
                <div className="exam-info">
                  <h5>Quantum Mechanics Midterm</h5>
                  <p>Comprehensive coverage of chapters 1-4.</p>
                </div>
              </li>
              <li>
                <div className="exam-date">
                  <span className="month">NOV</span>
                  <span className="day">18</span>
                </div>
                <div className="exam-info">
                  <h5>Linear Algebra Final</h5>
                  <p>Focus on eigenvectors and spectral theorem.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content premium-glass-card" onClick={e => e.stopPropagation()}>
            <h4>Add New Task</h4>
            <div className="modal-form">
              <input 
                type="text" 
                placeholder="Task Title (e.g., Read Chapter 4)" 
                value={newTask.title} 
                onChange={e => setNewTask({...newTask, title: e.target.value})} 
                className="glass-input"
                autoFocus
              />
              <div className="modal-form-row">
                <input 
                  type="text" 
                  placeholder="Subject" 
                  value={newTask.subject} 
                  onChange={e => setNewTask({...newTask, subject: e.target.value})} 
                  className="glass-input"
                />
                <input 
                  type="text" 
                  placeholder="Time (e.g. 2:00 PM)" 
                  value={newTask.time} 
                  onChange={e => setNewTask({...newTask, time: e.target.value})} 
                  className="glass-input"
                />
              </div>
            </div>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="gold-btn glass-btn" onClick={addTask}>Add Task</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .study-planner {
          display: flex;
          flex-direction: column;
          gap: 24px;
          animation: fadeIn 0.4s ease-out;
        }

        /* Premium Glass Card Base */
        .premium-glass-card {
          background: linear-gradient(135deg, rgba(30, 28, 25, 0.8), rgba(20, 18, 16, 0.9));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
        }

        .module-header {
          padding: 40px 48px;
        }

        .header-glow {
          position: absolute;
          top: -50%;
          left: -10%;
          width: 50%;
          height: 200%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
          transform: rotate(-15deg);
          pointer-events: none;
        }

        .title-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }

        .title-row h3 {
          font-family: var(--font-primary);
          font-size: 28px;
          font-weight: 600;
          letter-spacing: -0.5px;
          background: linear-gradient(90deg, #fff, #e0d0b0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .planner-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }

        .schedule-column {
          padding: 32px;
          min-height: 500px;
          display: flex;
          flex-direction: column;
        }

        .column-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        }

        .column-header h4 {
          font-family: var(--font-serif);
          font-size: 22px;
          color: var(--color-text-primary);
          letter-spacing: 0.5px;
        }

        /* Glass Buttons */
        .glass-btn {
          padding: 10px 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.5px;
          border: 1px solid rgba(212, 175, 55, 0.3) !important;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.02)) !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        .glass-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05)) !important;
          border-color: rgba(212, 175, 55, 0.6) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(212, 175, 55, 0.15) !important;
        }

        .icon-only.glass-btn {
          padding: 10px;
          border-radius: 12px;
        }

        .spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin { 100% { transform: rotate(360deg); } }

        /* Task Items */
        .task-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .empty-tasks {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 200px;
          color: var(--color-text-secondary);
        }
        
        .empty-tasks p {
          font-size: 16px;
          font-weight: 500;
          color: var(--color-text-primary);
          margin-bottom: 4px;
        }
        
        .empty-tasks span {
          font-size: 13px;
        }

        .task-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px 24px;
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.03);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideInRight 0.5s cubic-bezier(0.4, 0, 0.2, 1) backwards;
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .task-item:hover {
          background: rgba(212, 175, 55, 0.03);
          border-color: rgba(212, 175, 55, 0.2);
          transform: translateX(4px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }

        .task-item.completed {
          opacity: 0.5;
          background: rgba(0, 0, 0, 0.1);
        }

        .task-item.completed:hover {
          opacity: 0.8;
          transform: none;
        }

        .task-item.completed .task-title {
          text-decoration: line-through;
          color: var(--color-text-secondary);
        }

        .task-checkbox {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
        }
        
        .task-item:hover .task-checkbox {
          transform: scale(1.1);
        }

        .task-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .task-title {
          font-size: 16px;
          font-weight: 500;
          color: var(--color-text-primary);
          transition: color 0.2s;
          letter-spacing: 0.3px;
        }

        .task-meta {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .task-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
        }
        
        .tag-math { color: #60a5fa; background: rgba(96, 165, 250, 0.1); border: 1px solid rgba(96, 165, 250, 0.2); }
        .tag-physics { color: #34d399; background: rgba(52, 211, 153, 0.1); border: 1px solid rgba(52, 211, 153, 0.2); }
        .tag-chemistry { color: #f472b6; background: rgba(244, 114, 182, 0.1); border: 1px solid rgba(244, 114, 182, 0.2); }

        .task-time {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 500;
          color: var(--color-text-secondary);
        }

        .task-delete-btn {
          background: transparent;
          border: none;
          color: var(--color-text-muted);
          cursor: pointer;
          opacity: 0;
          transition: all 0.2s;
          padding: 8px;
          border-radius: 50%;
        }

        .task-item:hover .task-delete-btn {
          opacity: 1;
        }

        .task-delete-btn:hover {
          color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
          transform: rotate(90deg);
        }

        /* Progress Column */
        .progress-column {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .stat-card {
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-bg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        /* Circular Progress SVG */
        .circular-progress-container {
          position: relative;
          width: 160px;
          height: 160px;
          margin: 20px 0;
          z-index: 2;
        }

        .circular-progress {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .progress-bg {
          fill: none;
          stroke: rgba(255, 255, 255, 0.05);
          stroke-width: 6;
        }

        .progress-value {
          fill: none;
          stroke: url(#gold-gradient); /* We will define a fallback color if defs missing */
          stroke: var(--color-accent);
          stroke-width: 6;
          stroke-linecap: round;
          stroke-dasharray: 283; /* 2 * pi * r (45) */
          transition: stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1);
          filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.4));
        }

        .stat-value-inner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: baseline;
        }

        .stat-number {
          font-family: var(--font-serif);
          font-size: 48px;
          font-weight: 400;
          color: #fff;
          text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
        }

        .stat-percent {
          font-size: 20px;
          color: var(--color-accent);
          margin-left: 2px;
        }

        .stat-label {
          font-size: 13px;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
          z-index: 2;
        }

        /* Upcoming Exams */
        .upcoming-card {
          padding: 32px;
          flex: 1;
        }

        .upcoming-card h4 {
          font-family: var(--font-serif);
          font-size: 20px;
          margin-bottom: 24px;
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
          padding-bottom: 16px;
        }

        .exam-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .exam-list li {
          display: flex;
          gap: 20px;
          padding: 16px;
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.15);
          border: 1px solid transparent;
          transition: all 0.3s ease;
        }
        
        .exam-list li:hover {
          background: rgba(212, 175, 55, 0.05);
          border-color: rgba(212, 175, 55, 0.2);
          transform: translateY(-2px);
        }

        .exam-date {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05));
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 10px;
          padding: 10px 14px;
          min-width: 65px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .exam-date .month {
          font-size: 11px;
          text-transform: uppercase;
          color: var(--color-accent);
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-bottom: 2px;
        }

        .exam-date .day {
          font-family: var(--font-serif);
          font-size: 26px;
          color: #fff;
          line-height: 1;
        }

        .exam-info h5 {
          font-size: 15px;
          font-weight: 500;
          margin-bottom: 6px;
          color: var(--color-text-primary);
        }

        .exam-info p {
          font-size: 13px;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          width: 100%;
          max-width: 500px;
          padding: 40px;
          animation: fadeSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .modal-content h4 {
          font-size: 24px;
          font-family: var(--font-serif);
          color: #fff;
          margin-bottom: 24px;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .glass-input {
          width: 100%;
          padding: 14px 18px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #fff;
          font-family: var(--font-primary);
          font-size: 15px;
          transition: all 0.3s;
        }

        .glass-input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .glass-input:focus {
          outline: none;
          border-color: var(--color-accent);
          background: rgba(0, 0, 0, 0.5);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);
        }

        .modal-form-row {
          display: flex;
          gap: 16px;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 16px;
          margin-top: 32px;
        }

        .cancel-btn {
          padding: 10px 24px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: var(--color-text-secondary);
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
        }

        .cancel-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default StudyPlanner;


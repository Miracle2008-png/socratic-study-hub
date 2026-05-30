import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';
import { Users, Activity, Database, ShieldAlert, TrendingUp, BarChart3, Clock, AlertTriangle } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeToday: 0,
    totalSessions: 0,
    systemStatus: 'Healthy'
  });
  
  const [usersList, setUsersList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application we would fetch these from Supabase
    // But since we are mocking some stats while building out the dashboard:
    const fetchAdminData = async () => {
      try {
        const { data, error, count } = await supabase
          .from('users')
          .select('*', { count: 'exact' });
          
        if (!error && data) {
          setStats(prev => ({
            ...prev,
            totalUsers: count || data.length,
            activeToday: Math.floor((count || data.length) * 0.4), // mock active metric
            totalSessions: (count || data.length) * 12
          }));
          setUsersList(data.slice(0, 10)); // Just showing recent 10 users
        }
      } catch (err) {
        console.error("Failed to load admin stats", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchAdminData();
  }, []);

  return (
    <div className="admin-dashboard fade-in">
      <div className="admin-header">
        <div className="admin-title">
          <ShieldAlert size={28} color="var(--color-accent)" />
          <div>
            <h2>Admin Control Center</h2>
            <p>Platform Overview & Management</p>
          </div>
        </div>
        <div className="status-badge">
          <span className="status-dot pulse"></span>
          System {stats.systemStatus}
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><Users size={20} /></div>
          <div className="stat-value">{loading ? '...' : stats.totalUsers}</div>
          <div className="stat-label">Total Registered Users</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Activity size={20} /></div>
          <div className="stat-value">{loading ? '...' : stats.activeToday}</div>
          <div className="stat-label">Active Today</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Database size={20} /></div>
          <div className="stat-value">{loading ? '...' : stats.totalSessions}</div>
          <div className="stat-label">Total Study Sessions</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><TrendingUp size={20} /></div>
          <div className="stat-value">+24%</div>
          <div className="stat-label">Growth this Week</div>
        </div>
      </div>

      <div className="admin-content-grid">
        <div className="admin-panel luxury-card">
          <h3><BarChart3 size={18} /> Recent Activity</h3>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon blue"><Clock size={14} /></div>
              <div className="activity-details">
                <span className="activity-text">Database backup completed</span>
                <span className="activity-time">10 mins ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon green"><Users size={14} /></div>
              <div className="activity-details">
                <span className="activity-text">New user registration spike detected</span>
                <span className="activity-time">1 hour ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon yellow"><AlertTriangle size={14} /></div>
              <div className="activity-details">
                <span className="activity-text">High latency warning on AI endpoint</span>
                <span className="activity-time">3 hours ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className="admin-panel luxury-card">
          <h3><Users size={18} /> Recent Users</h3>
          <div className="users-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Level</th>
                  <th>Streak</th>
                  <th>Last Active</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={4} style={{ textAlign: 'center' }}>Loading...</td></tr>
                ) : usersList.length > 0 ? (
                  usersList.map((user, idx) => (
                    <tr key={idx}>
                      <td className="user-id">...{user.id.substring(user.id.length - 6)}</td>
                      <td>Lvl {user.level || 1}</td>
                      <td>{user.streak || 0} 🔥</td>
                      <td>{user.lastActiveDate || 'Unknown'}</td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan={4} style={{ textAlign: 'center' }}>No data available</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style>{`
        .admin-dashboard {
          padding: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          background: var(--color-base);
          padding: 24px;
          border-radius: 16px;
          border: 1px solid var(--color-border);
        }
        
        .admin-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .admin-title h2 {
          font-family: var(--font-display);
          margin: 0 0 4px 0;
        }
        
        .admin-title p {
          margin: 0;
          color: var(--color-text-secondary);
          font-size: 14px;
        }
        
        .status-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 14px;
        }
        
        .status-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
        }
        
        .pulse {
          animation: pulse-animation 2s infinite;
        }
        
        @keyframes pulse-animation {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
          margin-bottom: 32px;
        }
        
        .stat-card {
          background: var(--color-base);
          border: 1px solid var(--color-border);
          padding: 24px;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
        }
        
        .stat-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(212, 175, 55, 0.1);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        
        .stat-value {
          font-size: 32px;
          font-family: var(--font-display);
          font-weight: 700;
          margin-bottom: 4px;
        }
        
        .stat-label {
          color: var(--color-text-secondary);
          font-size: 14px;
        }
        
        .admin-content-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 24px;
        }
        
        .admin-panel {
          padding: 24px;
        }
        
        .admin-panel h3 {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 20px 0;
          font-family: var(--font-display);
        }
        
        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .activity-item {
          display: flex;
          gap: 12px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--color-border);
        }
        
        .activity-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        
        .activity-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .activity-icon.blue { background: rgba(59, 130, 246, 0.1); color: #3b82f6; }
        .activity-icon.green { background: rgba(16, 185, 129, 0.1); color: #10b981; }
        .activity-icon.yellow { background: rgba(245, 158, 11, 0.1); color: #f59e0b; }
        
        .activity-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .activity-text {
          font-size: 14px;
          font-weight: 500;
        }
        
        .activity-time {
          font-size: 12px;
          color: var(--color-text-muted);
        }
        
        .users-table-container {
          overflow-x: auto;
        }
        
        .admin-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .admin-table th, .admin-table td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid var(--color-border);
        }
        
        .admin-table th {
          color: var(--color-text-secondary);
          font-weight: 600;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .admin-table td {
          font-size: 14px;
        }
        
        .user-id {
          font-family: monospace;
          color: var(--color-text-muted);
        }
        
        @media (max-width: 900px) {
          .admin-content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

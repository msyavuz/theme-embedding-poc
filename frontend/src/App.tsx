import { useEffect, useState } from "react";
import "./App.css"
import { embed, setAllDashboardsMode } from "./embed";

function App() {
  const [themeMode, setThemeMode] = useState<'default' | 'dark' | 'system'>('default');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    embed().then(() => {
      setIsLoading(false);
      console.log('All dashboards embedded successfully');
    }).catch((error) => {
      console.error('Error embedding dashboards:', error);
      setIsLoading(false);
    });
  }, [])

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMode = e.target.value as 'default' | 'dark' | 'system';
    setThemeMode(newMode);
    setAllDashboardsMode(newMode);
  };

  return (
    <div className="app-container">
      <nav className="superset-navbar">
        <div className="navbar-content">
          <div className="navbar-brand">
            <span className="brand-text">Superset Embedding POC</span>
          </div>

          <div className="navbar-actions">
            <div className="theme-selector">
              <label htmlFor="theme-select" className="theme-label">
                Theme Mode:
              </label>
              <select
                id="theme-select"
                value={themeMode}
                onChange={handleThemeChange}
                disabled={isLoading}
                className="theme-select"
              >
                <option value="default">Default</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
      <main className="dashboards-grid">
        <div id='embedded-1' className='dashboard-card'>
          <div className="dashboard-label">Gruvbox Theme</div>
        </div>
        <div id='embedded-2' className='dashboard-card'>
          <div className="dashboard-label">Kanagawa Theme</div>
        </div>
        <div id='embedded-3' className='dashboard-card'>
          <div className="dashboard-label">Tokyo Night Theme</div>
        </div>
        <div id='embedded-4' className='dashboard-card'>
          <div className="dashboard-label">One Dark Theme</div>
        </div>
        <div id='embedded-5' className='dashboard-card'>
          <div className="dashboard-label">Corporate Theme</div>
        </div>
      </main>
    </div>
  )
}

export default App

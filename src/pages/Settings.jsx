import { useState, useEffect } from 'react';

function Settings() {
  const [settings, setSettings] = useState({
    name: '',
    email: '',
    theme: 'Light',
  });

  useEffect(() => {
    const saved = localStorage.getItem('crmSettings');
    if (saved) setSettings(JSON.parse(saved));
  }, []);

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('crmSettings', JSON.stringify(settings));
    alert('Settings saved!');
  };

  return (
    <div>
      <h3 className="mb-3">Settings</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Admin Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={settings.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={settings.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Theme</label>
          <select
            className="form-select"
            name="theme"
            value={settings.theme}
            onChange={handleChange}
          >
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Save Settings</button>
      </form>
    </div>
  );
}

export default Settings;

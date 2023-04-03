import React, { useState } from 'react';
import Login from './components/login';
import ExcelImportTool from './components/excelReader';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [switchView, setSwitchView] = useState('login');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setSwitchView('excelImportTool');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSwitchView('login');
  };
  
  return (
    <div className="App">
      {switchView === 'login' && <Login onLogin={handleLogin} />}
      {switchView === 'excelImportTool' && isLoggedIn && (
      <ExcelImportTool onLogout={handleLogout} />
      )}
      
    </div>
  );
}

export default App;

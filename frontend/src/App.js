import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Votes from './pages/frontoffice/Votes'
import Login from './pages/backoffice/Login';
import Dashboard from './pages/backoffice/Dashboard';

function App() {

  const isBackOffice = window.location.pathname.startsWith('/login') ||
  window.location.pathname.startsWith('/dashboard') 

  const containerClass = isBackOffice ? 'backoffice' : 'frontoffice'

  return (
    <div className={`App ${containerClass}`}>
      <BrowserRouter>
      <Routes>
        {/* Backoffice */}
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        {/* Frontoffice */}
        <Route />
        <Route path='/votes' element={<Votes />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

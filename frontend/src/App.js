import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Votes from './pages/frontoffice/Votes'

function App() {

  const isBackOffice = window.location.pathname.startsWith('/login') ||
  window.location.pathname.startsWith('/dashboard') 

  const containerClass = isBackOffice ? 'backoffice' : 'frontoffice'

  return (
    <div className={`App ${containerClass}`}>
      <BrowserRouter>
      <Routes>
        {/* Backoffice */}
        <Route />
        <Route />
        {/* Frontoffice */}
        <Route />
        <Route path='/votes' element={<Votes />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

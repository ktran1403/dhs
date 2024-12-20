import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookUs from './pages/BookUs';
import NotFoundPage from './pages/NotFoundPage';
import OurTeam from './pages/OurTeam'; 
import Contacts from './pages/Contacts';
import Login from './pages/Login'
function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bookus" element={<BookUs/>} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
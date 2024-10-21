import './App.css';
import {Routes, Route} from 'react-router-dom';
import DefaultDashboard from './components/DefaultDashboard'; 
import DefaultFooter from './components/DefaultFooter'
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import NotFoundPage from './pages/NotFoundPage';
import AboutUs from './pages/AboutUs'; 
import Contacts from './pages/Contacts';
function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/dhs.png"
function DefaultDashboard() {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="hover:text-yellow-400">
                    <img src={Logo} alt="Logo" className="h-10 mr-4" />
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-yellow-400">Contacts</Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-yellow-400">Booking</Link>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </header>
  );
}

export default DefaultDashboard;


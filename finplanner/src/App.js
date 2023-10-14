import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import Transactions from './components/Transactions';
import AddTransaction from './components/AddTransaction';
import UserProfile from './components/UserProfile';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/add-transaction" element={<AddTransaction />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/" element={<Login />} /> {/* default route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

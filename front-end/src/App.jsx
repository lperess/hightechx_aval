import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import Login from './components/Login';
import UserManagement from './pages/UserManagement';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usermanagement" element={<UserManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

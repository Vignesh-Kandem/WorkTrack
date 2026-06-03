import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-dark bg-dark px-4">
          <span className="navbar-brand fw-bold">
            Employee Management System
          </span>
          <Link to="/" className="btn btn-outline-light btn-sm">
            Home
          </Link>
        </nav>

        {/* Page Content */}
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<EmployeeList />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/edit-employee/:id" element={<EditEmployee />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

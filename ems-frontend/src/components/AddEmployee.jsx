import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    salary: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    EmployeeService.createEmployee(employee)
      .then(() => navigate('/'))
      .catch(error => setError('Failed to add employee. Please try again.'));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">Add New Employee</h4>
          </div>
          <div className="card-body">
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" name="firstName" className="form-control"
                  value={employee.firstName} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" name="lastName" className="form-control"
                  value={employee.lastName} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control"
                  value={employee.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Department</label>
                <select name="department" className="form-select"
                  value={employee.department} onChange={handleChange} required>
                  <option value="">-- Select Department --</option>
                  <option>Engineering</option>
                  <option>Human Resources</option>
                  <option>Finance</option>
                  <option>Marketing</option>
                  <option>Operations</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Salary (₹)</label>
                <input type="number" name="salary" className="form-control"
                  value={employee.salary} onChange={handleChange} required />
              </div>
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-success">
                  Save Employee
                </button>
                <button type="button" className="btn btn-secondary"
                  onClick={() => navigate('/')}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;

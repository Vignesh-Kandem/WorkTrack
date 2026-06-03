import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/employees';

const getAllEmployees = () => axios.get(BASE_URL);
const getEmployeeById = (id) => axios.get(`${BASE_URL}/${id}`);
const createEmployee = (employee) => axios.post(BASE_URL, employee);
const updateEmployee = (id, employee) => axios.put(`${BASE_URL}/${id}`, employee);
const deleteEmployee = (id) => axios.delete(`${BASE_URL}/${id}`);

const EmployeeService = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
};

export default EmployeeService;

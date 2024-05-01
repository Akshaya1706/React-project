import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const LEAVE_THRESHOLD = 4;
const MINIMUM_SALARY = 10000;
const LEAVE_DEDUCTION_AMOUNT = 2000;

const Payroll = () => {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({});

  const addEmployee = () => {
    if (!newEmployee.name) {
      alert('Name is required.');
      return;
    }
    if (newEmployee.salary <= MINIMUM_SALARY) {
      alert('Salary is required.');
      return;
    }

    let salary = newEmployee.salary;
    if (newEmployee.leavesTaken > LEAVE_THRESHOLD) {
      salary -= LEAVE_DEDUCTION_AMOUNT;
    }

    const updatedEmployee = { id: employees.length + 1, name: newEmployee.name, salary, leavesTaken: newEmployee.leavesTaken };
    setEmployees([...employees, updatedEmployee]);
    setNewEmployee({});
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Payroll Management</Typography>

        <div>
          <Typography variant="h6">Add Employee</Typography>
          <TextField
            label="Name"
            type="text"
            value={newEmployee.name || ''}
            onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
          />
          <TextField
            label="Salary"
            type="number"
            value={newEmployee.salary || ''}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, salary: parseInt(e.target.value, 10) })
            }
          />
          <TextField
            label="Leaves Taken (in days)"
            type="number"
            value={newEmployee.leavesTaken || ''}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, leavesTaken: parseInt(e.target.value, 10) })
            }
          />
          <Button onClick={addEmployee} variant="contained">
            Add Employee
          </Button>
        </div>

        <div>
          <Typography variant="h6">Employee List</Typography>
          <ul>
            {employees.map((employee) => (
              <li key={employee.id}>
                {employee.name} - Salary: {employee.salary}, Leaves Taken: {employee.leavesTaken} days
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default Payroll;

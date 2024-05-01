import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router';
import axios from 'axios';

const EmployeeDetails = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = (localStorage.getItem('user') || '').length > 0;
    if (!isLogin) {
      navigate('/');
    }
  }, [navigate]);

  const [employeeData, setEmployeeData] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    position: '',
    department: '',
  });
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/employees')
      .then(response => {
        setEmployeeData(response.data);
      })
      .catch(error => {
        console.error('Error fetching employee data:', error);
      });
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setNewEmployee({
      name: '',
      position: '',
      department: '',
    });
    setSelectedEmployee(null);
  };

  const handleAddEmployee = () => {
    axios.post('http://localhost:8080/employees', newEmployee)
      .then(response => {
        setEmployeeData([...employeeData, response.data]);
        handleCloseModal();
      })
      .catch(error => {
        console.error('Error adding employee:', error);
      });
  };

  const handleEditEmployee = () => {
    axios.put(`http://localhost:8080/employees/${selectedEmployee.id}`, selectedEmployee)
      .then(response => {
        const updatedEmployeeData = employeeData.map(employee =>
          employee.id === selectedEmployee.id ? response.data : employee
        );
        setEmployeeData(updatedEmployeeData);
        handleCloseModal();
      })
      .catch(error => {
        console.error('Error editing employee:', error);
      });
  };

  const handleDeleteEmployee = (employeeId) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      axios.delete(`http://localhost:8080/employees/${employeeId}`)
        .then(() => {
          const updatedEmployeeData = employeeData.filter(employee => employee.id !== employeeId);
          setEmployeeData(updatedEmployeeData);
        })
        .catch(error => {
          console.error('Error deleting employee:', error);
        });
    }
  };
  

  const handleEditClick = (employee) => {
    setSelectedEmployee({ ...employee });
    setNewEmployee({ ...employee });
    handleOpenModal();
  };

  return (
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh', padding: 2 }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Employee List
        </Typography>

        <Button variant="outlined" onClick={handleOpenModal} sx={{ mb: 2 }}>
          Add Employee
        </Button>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Position</b></TableCell>
                <TableCell><b>Department</b></TableCell>
                <TableCell><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employeeData.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>
                    <Button variant="outlined" size="small" onClick={() => handleEditClick(employee)}>
                      Edit
                    </Button>
                    <Button variant="outlined" size="small" onClick={() => handleDeleteEmployee(employee.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              maxWidth: '400px',
              backgroundColor: 'white',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6" gutterBottom>
              {selectedEmployee ? 'Edit Employee' : 'Add Employee'}
            </Typography>
            <TextField
              label="Name"
              fullWidth
              value={newEmployee.name}
              onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Position"
              fullWidth
              value={newEmployee.position}
              onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Department"
              fullWidth
              value={newEmployee.department}
              onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={selectedEmployee ? handleEditEmployee : handleAddEmployee}
            >
              {selectedEmployee ? 'Edit' : 'Add'}
            </Button>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default EmployeeDetails;

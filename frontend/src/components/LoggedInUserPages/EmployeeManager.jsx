import React, {useEffect, useState} from "react";
import { Card, CardContent, CardHeader, Menu, MenuItem, IconButton, TextField, Box, List, ListItem, ListItemText } from "@mui/material";
import { MoreVert, Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import MyNumberField from "../Forms/MyNumberField.jsx";
import MySelectField from "../Forms/MySelectField.jsx";

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentEmployeeId, setCurrentEmployeeId] = useState(null);
  const [daysInNextMonth, setDaysInNextMonth] = useState([]);

  useEffect(() => {
    const getNextMonthDays = () => {
      const now = new Date();
      const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      const days = new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0).getDate();

      return Array.from({ length: days }, (_, i) => (i + 1).toString());
    };
    setDaysInNextMonth(getNextMonthDays());
  }, []);

  const handleDelete = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
    setAnchorEl(null);
    if (selectedEmployee && selectedEmployee.id === id) {
      setSelectedEmployee(null);
    }
  };

  const handleSelect = (employee) => {
    setSelectedEmployee(employee);
  };

  const handlePreferenceChange = (field, value) => {
    if (selectedEmployee) {
      const newPreferences = { ...selectedEmployee.preferences, [field]: value };
      setSelectedEmployee({ ...selectedEmployee, preferences: newPreferences });
      setEmployees(employees.map(emp => emp.id === selectedEmployee.id ? { ...emp, preferences: newPreferences } : emp));
    }
  };

  const handleSavePreferences = () => {

  };

  const handleAddEmployee = () => {
    const newEmployee = {
      id: Date.now(),
      name: "New Employee",
      editing: false,
      preferences: {
        hoursPerMonth: "",
        hoursPerDay: "",
        freeDays: "",
        shiftPreference: "",
        specialShiftPreferences: "",
        specialHoursPreferences: "",
      },
    };
    setEmployees([...employees, newEmployee]);
  };

  const handleMenuClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setCurrentEmployeeId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentEmployeeId(null);
  };

  const handleDoubleClick = (id) => {
    setEmployees(employees.map(emp => emp.id === id ? { ...emp, editing: true } : emp));
  };

  const handleBlur = (id) => {
    setEmployees(employees.map(emp => emp.id === id ? { ...emp, editing: false } : emp));
  };

  const handleNameChange = (id, e) => {
    setEmployees(employees.map(emp => emp.id === id ? { ...emp, name: e.target.value } : emp));
  };

  return (
    <Box display="flex" sx={{ minHeight: '100vh', background: 'linear-gradient(to right, #2196F3, #90CAF9)' }} p={3}>
      <Box width="25%">
        <Card>
          <CardHeader title="Employees" action={
            <Button onClick={handleAddEmployee} variant="contained" startIcon={<Add />}>Add Employee</Button>
          } />
          <CardContent>
            <List>
              {employees.map((emp) => (
                <ListItem key={emp.id}>
                  <Box
                    sx={{
                      width: '100%',
                      backgroundColor: selectedEmployee && selectedEmployee.id === emp.id ? 'rgba(0, 0, 0, 0.04)' : 'inherit',
                    }}
                    onClick={() => handleSelect(emp)}
                  >
                    {emp.editing ? (
                      <TextField
                        value={emp.name}
                        onChange={(e) => handleNameChange(emp.id, e)}
                        onBlur={() => handleBlur(emp.id)}
                        autoFocus
                      />
                    ) : (
                      <ListItemText primary={emp.name} onDoubleClick={() => handleDoubleClick(emp.id)} />
                    )}
                  </Box>
                  <IconButton onClick={(event) => handleMenuClick(event, emp.id)}>
                    <MoreVert />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
      <Box width="75%" pl={3}>
        <Card sx={{ mb: 2 }}>
          <CardContent>
            <Box color="text.secondary">
              Example usage: Select an employee to view and edit their preferences. You can add new employees by clicking the "Add Employee" button.
            </Box>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title={`Manage Employee Preferences - ${selectedEmployee ? selectedEmployee.name : ''}`} />
          <CardContent>
            {selectedEmployee ? (
              <Box>
                <MyNumberField
                  label="Number of hours per month"
                  width = '100%'
                  value={selectedEmployee.preferences.hoursPerMonth}
                  onChange={(e) => handlePreferenceChange('hoursPerMonth', e.target.value)}
                  margin="normal"
                />
                <MyNumberField
                  label="Number of hours per day"
                  width = '100%'
                  value={selectedEmployee.preferences.hoursPerDay}
                  onChange={(e) => handlePreferenceChange('hoursPerDay', e.target.value)}
                  margin="normal"
                />
                <TextField
                  label="Free days (e.g., 5,2,...,10)"
                  fullWidth
                  value={selectedEmployee.preferences.freeDays}
                  onChange={(e) => handlePreferenceChange('freeDays', e.target.value)}
                  margin="normal"
                />
                <MySelectField
                  label="Shift preference (morning, evening, night, none)"
                  width='100%'
                  options={['morning', 'evening', 'night', 'none']}
                  value={selectedEmployee.preferences.shiftPreference}
                  onChange={(e) => handlePreferenceChange('shiftPreference', e.target.value)}
                  margin="normal"
                />
                <TextField
                  label="Special shift preferences (e.g., 2 - morning)"
                  fullWidth
                  value={selectedEmployee.preferences.specialShiftPreferences}
                  onChange={(e) => handlePreferenceChange('specialShiftPreferences', e.target.value)}
                  margin="normal"
                />
                <TextField
                  label="Special hours preferences (e.g., 3 - 8 to 11)"
                  fullWidth
                  value={selectedEmployee.preferences.specialHoursPreferences}
                  onChange={(e) => handlePreferenceChange('specialHoursPreferences', e.target.value)}
                  margin="normal"
                />
                <Button variant="contained" color="primary" onClick={handleSavePreferences}>Save Changes</Button>
              </Box>
            ) : (
              <Box color="text.secondary">Select an employee to edit preferences</Box>
            )}
          </CardContent>
        </Card>
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="secondary">Save Employee List</Button>
        </Box>
      </Box>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={() => { handleDelete(currentEmployeeId); handleMenuClose(); }}>Delete</MenuItem>
      </Menu>
    </Box>
  );
};

export default EmployeeManagement;
import React, { useState } from 'react';
import { Box, Button, Grid, Typography, TextField, List, ListItem, ListItemButton, Paper } from '@mui/material';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(isoWeek);

const demoTeam = { id: 1, name: 'Team A' };

const generateCalendar = (currentDate) => {
  const startOfMonth = dayjs(currentDate).startOf('month');
  const endOfMonth = dayjs(currentDate).endOf('month');
  const startDay = startOfMonth.isoWeekday();
  const daysInMonth = endOfMonth.date();

  let days = [];
  let dayCounter = 1;
  for (let i = 0; i < 6; i++) {
    let week = [];
    for (let j = 1; j <= 7; j++) {
      if ((i === 0 && j < startDay) || dayCounter > daysInMonth) {
        week.push(null);
      } else {
        week.push(dayCounter);
        dayCounter++;
      }
    }
    days.push(week);
  }
  return days;
};

export default function ScheduleManager() {
  const [selectedTeam, setSelectedTeam] = useState(demoTeam);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [parameters, setParameters] = useState({
    workingHours: '',
    morningTeam: '',
    eveningTeam: '',
    nightTeam: '',
  });

  const calendar = generateCalendar(currentMonth);

  const handleDayClick = (day) => {
    setSelectedDate(day);
  };

  const handleParamChange = (e) => {
    setParameters({ ...parameters, [e.target.name]: e.target.value });
  };

  const changeMonth = (direction) => {
    setCurrentMonth(currentMonth.add(direction, 'month'));
    setSelectedDate(null);
  };

  return (
    <Grid container spacing={2} p={2}>
      {/* Left Panel - Teams */}
      <Grid item xs={2}>
        <Paper variant="outlined" sx={{ height: '100%', padding: 2 }}>
          <Typography variant="h6">Teams</Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton selected={selectedTeam.id === demoTeam.id} onClick={() => setSelectedTeam(demoTeam)}>
                {demoTeam.name}
              </ListItemButton>
            </ListItem>
          </List>
        </Paper>
      </Grid>

      {/* Middle Panel - Calendar */}
      <Grid item xs={7}>
        <Paper variant="outlined" sx={{ padding: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">{currentMonth.format('MMMM YYYY')}</Typography>
            <Box>
              <Button variant="outlined" onClick={() => changeMonth(-1)} sx={{ mr: 1 }}>Prev</Button>
              <Button variant="outlined" onClick={() => changeMonth(1)}>Next</Button>
            </Box>
          </Box>
          <Grid container spacing={1}>
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
              <Grid item xs={1.71} key={index}>
                <Typography align="center">{day}</Typography>
              </Grid>
            ))}
          </Grid>
          {calendar.map((week, wi) => (
            <Grid container spacing={1} key={wi}>
              {week.map((day, di) => (
                <Grid item xs={1.71} key={di}>
                  {day && (
                    <Button
                      fullWidth
                      variant={selectedDate === day ? 'contained' : 'outlined'}
                      onClick={() => handleDayClick(day)}
                      sx={{ aspectRatio: '1 / 1', minWidth: 0 }}
                    >
                      {day}
                    </Button>
                  )}
                </Grid>
              ))}
            </Grid>
          ))}
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button variant="contained">Save Changes</Button>
          </Box>
        </Paper>
      </Grid>

      {/* Right Panel - Parameters */}
      <Grid item xs={3}>
        <Paper variant="outlined" sx={{ padding: 2 }}>
          <Typography variant="h6">Selected Day - {selectedDate || '-'}</Typography>
          <Box display="flex" flexDirection="column" gap={2} mt={2}>
            <TextField label="Edit Working Hours" name="workingHours" value={parameters.workingHours} onChange={handleParamChange} />
            <TextField label="Edit Morning Team Number" name="morningTeam" value={parameters.morningTeam} onChange={handleParamChange} />
            <TextField label="Edit Evening Team Number" name="eveningTeam" value={parameters.eveningTeam} onChange={handleParamChange} />
            <TextField label="Edit Night Team Number" name="nightTeam" value={parameters.nightTeam} onChange={handleParamChange} />
            <Button variant="contained">Save Changes</Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
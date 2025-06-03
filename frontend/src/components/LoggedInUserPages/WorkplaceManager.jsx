import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper, Grid, Stack, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const TeamManagementPage = () => {
  const [teamEditing, setTeamEditing] = useState(false);
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teamName, setTeamName] = useState("");

  const handleSaveTeam = () => {
    if (teamName.trim() === "") return;
    const newTeam = { name: teamName };
    setTeams([...teams, newTeam]);
    setSelectedTeam(newTeam);
    setTeamEditing(false);
    setTeamName("");
  };

  const handleSelectTeam = (team) => {
    setSelectedTeam(team);
    setTeamName(team.name);
    setTeamEditing(true);
  };

  return (
    <Box p={2} height="100vh">
      <Grid container spacing={2} height="90%">
        {/* Teams List */}
        <Grid item xs={2}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
            <Typography variant="h6">Teams</Typography>
            <Button variant="outlined" size="small" onClick={() => {
              setSelectedTeam(null);
              setTeamName("");
              setTeamEditing(true);
            }}>
              new team
            </Button>
          </Stack>
          <Paper variant="outlined" sx={{ height: "100%", p: 2, overflow: 'auto' }}>
            <List>
              {teams.map((team, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={() => handleSelectTeam(team)}>
                    <ListItemText primary={team.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Middle Section */}
        <Grid item xs={7}>
          <Typography variant="h6" mb={1}>Team work settings</Typography>
          <Paper variant="outlined" sx={{ height: "100%", p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {!teamEditing ? (
              <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <Typography variant="body1" fontWeight="bold">
                  select team or add a new team to edit preferences
                </Typography>
              </Box>
            ) : (
              <Box display="flex" flexDirection="row" justifyContent="space-between" height="100%">
                {/* Entry Fields */}
                <Box width="48%" display="flex" flexDirection="column" justifyContent="space-between">
                  <Box>
                    <Box mb={2}>
                      <TextField label="team name" size="small" fullWidth value={teamName} onChange={(e) => setTeamName(e.target.value)} />
                    </Box>
                    <Grid container spacing={1}>
                      {[
                        "team working hours",
                        "min shifts hours",
                        "max shifts hours",
                        "min month hours",
                        "max month hours",
                        "min morning",
                        "max morning",
                        "min evening",
                        "max evening",
                        "min night",
                        "max night",
                      ].map((label) => (
                        <Grid item xs={12} key={label}>
                          <TextField label={label} size="small" fullWidth />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>

                {/* Employees in Team */}
                <Box width="48%" display="flex" flexDirection="column" justifyContent="space-between">
                  <Paper variant="outlined" sx={{ p: 2, flexGrow: 1 }}>
                    <Typography variant="body1" fontWeight="bold">
                      here will be list of employees that are added to this team
                    </Typography>
                  </Paper>
                  <Box mt={2} display="flex" justifyContent="flex-end">
                    <Button variant="contained" color="primary" onClick={handleSaveTeam}>Save Changes</Button>
                  </Box>
                </Box>
              </Box>
            )}
          </Paper>
        </Grid>

        {/* Employees List */}
        <Grid item xs={3}>
          <Typography variant="h6" mb={1}>employees</Typography>
          <Paper variant="outlined" sx={{ height: "100%", p: 2 }}>
            <Typography variant="body1" fontWeight="bold">
              put list of employees here
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TeamManagementPage;
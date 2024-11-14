// src/components/Sidebar.js
import React from 'react';
import { Box, Drawer, Typography, TextField, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = ({ searchTerm, setSearchTerm, filteredApps, onSelectApp }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{ width: 240, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' } }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">Infra App</Typography>
        <TextField
          label="Search Applications"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mt: 2, mb: 2 }}
        />
        <List>
          {filteredApps.map((app, index) => (
            <ListItem button key={index} onClick={() => onSelectApp(app)}>
              <ListItemText primary={app.appName} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;

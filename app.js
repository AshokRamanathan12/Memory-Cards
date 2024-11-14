// src/components/EnvironmentCard.js
import React, { useState } from 'react';
import { Box, ListItem, ListItemText, Collapse, Grid, Card, CardContent, Typography } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const EnvironmentCard = ({ env }) => {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <ListItem button onClick={handleToggle}>
        <ListItemText primary={env.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Grid container spacing={2} sx={{ p: 2 }}>
          {env.servers.map((server, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                <img src={server.image} alt={server.type} style={{ width: '60px', height: '60px' }} />
                <CardContent>
                  <Typography variant="h6">{server.type}</Typography>
                  <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                    {server.count}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Collapse>
    </Box>
  );
};

export default EnvironmentCard;

// src/App.js
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import EnvironmentCard from './components/EnvironmentCard';

const data = [
  {
    appName: 'Application 1',
    environments: [
      {
        name: 'Development',
        servers: [
          { type: 'Database Server', count: 3, image: '/db_image_url' },
          { type: 'Web Server', count: 4, image: '/web_image_url' },
        ]
      },
      {
        name: 'Production',
        servers: [
          { type: 'Database Server', count: 5, image: '/db_image_url' },
          { type: 'Web Server', count: 7, image: '/web_image_url' },
        ]
      },
    ]
  },
  // Additional application data...
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApp, setSelectedApp] = useState(null);

  const filteredApps = data.filter(app =>
    app.appName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filteredApps={filteredApps}
        onSelectApp={setSelectedApp}
      />

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {selectedApp && selectedApp.environments.map((env, index) => (
          <EnvironmentCard key={index} env={env} />
        ))}
      </Box>
    </Box>
  );
};

export default App;

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Switch, 
  Paper,
  Stack
} from '@mui/material';

export default function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    email: true,
    telegram: true,
    web: false
  });

  const handleToggle = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <Paper 
      elevation={3}
      sx={{ 
        maxWidth: 500,
        p: 4,
        bgcolor: '#1a1a1a',
        color: '#fff',
        borderRadius: 2
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Notifications
      </Typography>
      
      <Typography variant="body2" color="#999" sx={{ mb: 3 }}>
        Get notified via
      </Typography>

      <Stack  direction={"row"} gap={20}>
        {/* Email */}
        <Box >
          <Typography variant="body1">Email</Typography>
          <Switch 
            checked={notifications.email}
            onChange={() => handleToggle('email')}
              sx={{
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: '#fff',
              },
              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: '#ff6b35',
                borderRadius: '12px',
              },
              '& .MuiSwitch-track': {
                borderRadius: '12px',
              },
              '& .MuiSwitch-thumb': {
                borderRadius: '8px',
              },
            }}
          />
        </Box>

        {/* Telegram */}
        <Box >
          <Typography variant="body1">Telegram</Typography>
          <Switch 
            checked={notifications.telegram}
            onChange={() => handleToggle('telegram')}
            sx={{
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: '#fff',
              },
              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: '#FF6421',
              },
            }}
          />
        </Box>

        {/* Web */}
        <Box >
          <Typography variant="body1">Web</Typography>
          <Switch 
            checked={notifications.web}
            onChange={() => handleToggle('web')}
            sx={{
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: '#fff',
              },
              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: '#FF6421',
              },
            }}
          />
        </Box>
      </Stack>
    </Paper>
  );
}
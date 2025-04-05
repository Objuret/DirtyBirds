// src/views/Events.tsx
import { useEvents } from '../hooks/useEvents';
import { Box, Typography, CircularProgress, Alert } from '@mui/material';

export default function Events() {
  const { events, loading, error } = useEvents();

  if (loading) return <CircularProgress />;
  
  if (error) return <Alert severity="error">{error.message}</Alert>;

  return (
    <Box>
      <Typography variant="h1">Events</Typography>
      <Box component="ul" sx={{ padding: 2 }}>
        {events.map((event) => (
          <Box component="li" key={event.id} sx={{ marginBottom: 2 }}>
            <Typography variant="h3">{event.title}</Typography>
            <Typography variant="body1">Date: {event.date}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
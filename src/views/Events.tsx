// src/views/Events.tsx
import { useEvents } from '../hooks/useEvents';
import { Box, Typography, CircularProgress, Alert, Grid } from '@mui/material';
import EventCard from '../components/common/EventCard';
import { useNavigate } from 'react-router-dom';

export default function Events() {
  const { events, loading, error } = useEvents();
  const navigate = useNavigate();

  const handleViewDetails = (id: number) => {
    // Navigation to event details page
    navigate(`/events/${id}`);
  };

  if (loading) return <CircularProgress sx={{ display: 'block', margin: '40px auto' }} />;
  
  if (error) return <Alert severity="error">{error.message}</Alert>;

  return (
    <Box>
      <Typography variant="h1" gutterBottom>Events</Typography>
      
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <EventCard event={event} onViewDetails={handleViewDetails} />
          </Grid>
        ))}
      </Grid>
      
      {events.length === 0 && (
        <Typography variant="body1" sx={{ mt: 4, textAlign: 'center' }}>
          No events currently scheduled. Check back soon!
        </Typography>
      )}
    </Box>
  );
}
// src/components/common/EventCard.tsx
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { Event } from '../../types';

interface EventCardProps {
  event: Event;
  onViewDetails?: (id: number) => void;
}

export default function EventCard({ event, onViewDetails }: EventCardProps) {
  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(event.id);
    }
  };

  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
    }}>
      {event.imageUrl && (
        <CardMedia
          component="img"
          height="160"
          image={event.imageUrl}
          alt={event.title}
        />
      )}
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {event.title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {event.date}
        </Typography>
        
        {event.location && (
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {event.location}
          </Typography>
        )}
        
        {event.description && (
          <Typography 
            variant="body2" 
            sx={{ 
              mb: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {event.description}
          </Typography>
        )}
        
        <Box sx={{ mt: 'auto' }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="small"
            onClick={handleViewDetails}
          >
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
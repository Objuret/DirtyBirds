import { useState, useEffect } from 'react';
import { Event } from '../types';
import eventsData from '../data/events.json';

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulate API fetch
    try {
      // Type assertion since we know the structure matches
      setEvents(eventsData as Event[]);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setLoading(false);
    }
  }, []);

  return { events, loading, error };
}
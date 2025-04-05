export interface Team {
    id: number;
    name: string;
    coach: string;
    race: string;
    logo?: string;
  }
  
  export interface Match {
    id: number;
    homeTeam: Team;
    awayTeam: Team;
    homeScore?: number;
    awayScore?: number;
    completed: boolean;
    round: number;
  }
  
  export interface Tournament {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    location: string;
    description?: string;
    teams: Team[];
    matches: Match[];
    status: 'upcoming' | 'in-progress' | 'completed';
  }
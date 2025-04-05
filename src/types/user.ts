export interface User {
    id: string;
    username: string;
    email: string;
    name?: string;
    avatarUrl?: string;
    role: 'user' | 'admin';
  }
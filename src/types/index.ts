// Export all types from a central location
export * from './event';
export * from './tournament';
export * from './user';

// Theme related types
export interface ThemeSpacing {
  (value: number): string;
  (topBottom: number, rightLeft: number): string;
  (top: number, rightLeft: number, bottom: number): string;
  (top: number, right: number, bottom: number, left: number): string;
}
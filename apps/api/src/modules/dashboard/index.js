/**
 * Dashboard Module
 * Responsibilities: Aggregated summary of upcoming events, guest RSVP tallies, and pending tasks.
 * Privacy rule: Excludes all financial and expense totals (kept exclusively in Expenses module).
 */
export const dashboardModuleInfo = {
  name: 'dashboard',
  aggregatedEntities: ['events', 'rsvps', 'tasks'],
};

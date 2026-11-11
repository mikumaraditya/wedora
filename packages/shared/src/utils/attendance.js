/**
 * Approved Attendance Estimation Rule:
 * Potential attendance = total invited families * 3
 * RSVP attendance estimate = families responding YES * 3
 */
export const ATTENDANCE_MULTIPLIER = 3;

export function calculatePotentialAttendance(invitedFamiliesCount) {
  return (invitedFamiliesCount || 0) * ATTENDANCE_MULTIPLIER;
}

export function calculateRsvpAttendance(yesFamiliesCount) {
  return (yesFamiliesCount || 0) * ATTENDANCE_MULTIPLIER;
}

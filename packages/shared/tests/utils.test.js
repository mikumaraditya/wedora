import { describe, it, expect } from 'vitest';
import {
  formatPaiseToRupees,
  rupeesToPaise,
  calculatePotentialAttendance,
  calculateRsvpAttendance,
  ROLES,
  WEDDING_LIFECYCLE,
} from '../src/index.js';

describe('Shared Constants & Utilities', () => {
  it('defines correct system roles', () => {
    expect(ROLES.ADMIN).toBe('ADMIN');
    expect(ROLES.MANAGER).toBe('MANAGER');
  });

  it('defines correct wedding lifecycle states', () => {
    expect(WEDDING_LIFECYCLE.ACTIVE).toBe('ACTIVE');
    expect(WEDDING_LIFECYCLE.COMPLETED).toBe('COMPLETED');
    expect(WEDDING_LIFECYCLE.ARCHIVED).toBe('ARCHIVED');
  });

  it('correctly converts and formats paise to rupees', () => {
    expect(formatPaiseToRupees(8000000)).toMatch(/₹\s*80,000/);
    expect(formatPaiseToRupees(25050)).toMatch(/₹\s*250\.5/);
    expect(rupeesToPaise(80000)).toBe(8000000);
  });

  it('calculates attendance estimates using the approved x3 rule', () => {
    expect(calculatePotentialAttendance(100)).toBe(300);
    expect(calculateRsvpAttendance(60)).toBe(180);
  });
});

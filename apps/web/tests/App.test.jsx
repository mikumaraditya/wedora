import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '../src/components/ui/button';

describe('Web App Core Primitives', () => {
  it('renders Wedora button with correct design tokens and label', () => {
    render(<Button>Celebrate</Button>);
    const button = screen.getByRole('button', { name: /celebrate/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('rounded-md');
  });

  it('renders button with outline variant', () => {
    render(<Button variant="outline">Guest Details</Button>);
    const button = screen.getByRole('button', { name: /guest details/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('border');
  });
});

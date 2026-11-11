import { createBrowserRouter, Navigate } from 'react-router';
import { AppLayout } from '../layouts/AppLayout';
import { AuthLayout } from '../layouts/AuthLayout';
import { PublicLayout } from '../layouts/PublicLayout';
import { ProtectedRoute } from './ProtectedRoute';
import { GuestTokenRoute } from './GuestTokenRoute';
import { LoginPage } from '../features/auth/components/LoginPage';
import { DashboardPage } from '../features/dashboard/components/DashboardPage';
import { ExpensesPage } from '../features/expenses/components/ExpensesPage';
import { PublicWeddingPage } from '../features/public-wedding/components/PublicWeddingPage';
import { GuestInvitationPage } from '../features/public-guest/components/GuestInvitationPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: '/dashboard',
            element: <DashboardPage />,
          },
          {
            path: '/weddings/:weddingId/expenses',
            element: <ExpensesPage />,
          },
        ],
      },
    ],
  },
  {
    element: <PublicLayout />,
    children: [
      {
        path: '/wedding/:token',
        element: <PublicWeddingPage />,
      },
      {
        element: <GuestTokenRoute />,
        children: [
          {
            path: '/guest/:token',
            element: <GuestInvitationPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: (
      <div className="flex h-screen items-center justify-center">
        <p className="text-base text-[#34302B]">Page not found.</p>
      </div>
    ),
  },
]);

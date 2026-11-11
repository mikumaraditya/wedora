import { useParams, Outlet, Navigate } from 'react-router';

/**
 * GuestTokenRoute Guard
 * Ensures a valid bearer token is present in the route parameter.
 * Guests do not authenticate, have no user accounts, and never receive JWT sessions.
 */
export function GuestTokenRoute() {
  const { token, viewToken, uploadToken } = useParams();
  const bearerToken = token || viewToken || uploadToken;

  if (!bearerToken || bearerToken.trim() === '') {
    return <Navigate to="/invalid-invitation" replace />;
  }

  return <Outlet context={{ bearerToken }} />;
}

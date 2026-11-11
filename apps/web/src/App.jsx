import { RouterProvider } from 'react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { AuthProvider } from './context/AuthContext';
import { WeddingProvider } from './context/WeddingContext';
import { router } from './routes';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <WeddingProvider>
          <RouterProvider router={router} />
        </WeddingProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

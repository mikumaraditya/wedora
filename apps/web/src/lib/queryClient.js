import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2, // 2 minutes
      retry: (failureCount, error) => {
        // Do not retry 4xx errors
        if (error?.response?.status && error.response.status < 500) {
          return false;
        }
        return failureCount < 2;
      },
    },
  },
});

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import { Router } from '@/router';

import { AuthProvider } from '@/app/context/AuthContext';
import { queryClient } from '@/app/constants/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
      </AuthProvider>
      <Toaster />
      <ReactQueryDevtools position="left" buttonPosition="top-left" />
    </QueryClientProvider>
  );
}

export default App;

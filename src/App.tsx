import { QueryClientProvider } from '@tanstack/react-query';

import { Router } from '@/router';

import { queryClient } from '@/app/constants/queryClient';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

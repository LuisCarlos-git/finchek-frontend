import { QueryClientProvider } from '@tanstack/react-query';

import { Router } from '@/router';

import { queryClient } from '@/app/constants/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;

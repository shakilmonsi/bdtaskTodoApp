import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <QueryClientProvider client={queryClient}>
      {/* Your entire application components go here */}
      {/* For example: <AppComponents /> */}
    </QueryClientProvider>
    </div>
  );
}

export default App;

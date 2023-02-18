import './App.css';
import { RouterProvider } from 'react-router';
import { router } from './Routes/routes';
import { useEffect } from 'react';
import Aos from 'aos';

function App() {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

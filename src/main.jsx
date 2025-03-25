import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './auth/SignUp';
import Home from './AllComponents/Home';
import Dashbord from './AllComponents/Dashbord';
import { ClerkProvider } from '@clerk/clerk-react'
import Edit from './AllComponents/resume/[resumeId]/edit/edit';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter([
 
  {
    path: '/',
    element: <App />, 
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path:'/dashboard',
        element:<Dashbord/> 
      },
      {
        path:'/resume/:resumeId/edit',
        element:<Edit/>
      }
    ],
  },
  {
    path: '/signup', 
    element: <SignUp />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
     <RouterProvider router={router} />
     </ClerkProvider>
  </StrictMode>
);

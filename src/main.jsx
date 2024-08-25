import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'
// import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
// import Navbar from './component/Navbar.jsx';
// import SignUp from './pages/SignUp.jsx';
// import LogIn from './pages/LogIn.jsx';

// const Layout = () => {
//   return (
//     <div>
//      {/* Layout */}
//       <Outlet />
//     </div>
//   );
// };
{/*routes */}
// const router = createBrowserRouter([
  
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <App />,
//       },
//       {
//         path: "/SignUp",
//         element: <SignUp />,
//       },
//       {
//         path: "/LogIn",
//         element: <LogIn />,
//       },
//     ],
//   },
// ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='376676262244-j4bhgdtojpb9g13ffehan2gs2qdf6mag.apps.googleusercontent.com'>  
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </GoogleOAuthProvider>
 
)

import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../screens/Home/home.tsx";
import Login from "../screens/Login/login.tsx";
import ResetPassword from "../screens/Reset-password/reset-password.tsx";

function AppRoutes() {
    const isAuthenticated = !!localStorage.getItem('username'); 
  
    return (
      <Routes>
        <Route  path="/" element={<Login />} />
        {isAuthenticated ? (
        <Route path="/home" element={<Home />} />
      ) : (
        <Route
          path="/home"
          element={
            <Navigate to="/" replace={true} />
          }
        />
      )}
        <Route path="/reset-password" element={<ResetPassword />}/>
      </Routes>
    );
  }
  
  export default AppRoutes;
import { Route, Routes } from "react-router-dom";

import Home from "../screens/Home/home.tsx";
import Login from "../screens/Login/login.tsx";
import ResetPassword from "../screens/Reset-password/reset-password.tsx";

function AppRoutes() {
    const isAuthenticated = !!localStorage.getItem('username'); 
  
    return (
      <Routes>
        <Route  path="/" element={<Login />} />
        <Route path="/home" element={<Home />} isAuthenticated={isAuthenticated} />
        <Route path="/reset-password" element={<ResetPassword />}/>
      </Routes>
    );
  }
  
  export default AppRoutes;
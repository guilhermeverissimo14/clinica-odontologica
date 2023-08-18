import { Route, Routes } from "react-router-dom";

import Home from "../screens/Home/home.tsx";
import Login from "../screens/Login/login.tsx";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/"  element={<Login />} />
            <Route path="/home"  element={<Home />} />
        </Routes>
    )
}
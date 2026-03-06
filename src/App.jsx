import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import NavbarComponent from "./components/NavbarComponent";

function App(){

const token = localStorage.getItem("token");

return(

<Router>

<NavbarComponent/>

<Routes>

<Route path="/" element={<Navigate to="/register" />} />

<Route path="/login" element={<Login/>} />

<Route path="/register" element={<Register/>} />

<Route
path="/dashboard"
element={token ? <Dashboard/> : <Navigate to="/login"/>}
/>

<Route
path="/customers"
element={token ? <Customers/> : <Navigate to="/login"/>}
/>

</Routes>

</Router>

)

}

export default App;
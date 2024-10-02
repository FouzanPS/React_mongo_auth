import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />{" "}
        {/* "Navigate" is very important if you want the routing to work. Remember to import it. */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

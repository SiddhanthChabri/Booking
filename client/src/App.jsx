import { useContext } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";  // Import AuthContext

import "./App.css";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/login";

function App() {
  const { user } = useContext(AuthContext);  // Access user from AuthContext

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/hotels" 
          element={user ? <List /> : <Navigate to="/login" />}  // Redirect to login if not authenticated
        />
        <Route 
          path="/hotels/:id" 
          element={user ? <Hotel /> : <Navigate to="/login" />} // Redirect to login if not authenticated
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

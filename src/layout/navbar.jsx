import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <> 
      <nav>
        <Link to="/home">My App</Link>
        {!isLoggedIn ? (
          <>
            <Link to="/login" className="px-3">
              Login
            </Link>
            <Link to="/register" className="px-3">
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="px-3">
              Dashboard
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
        <div></div>
      </nav>
    </>
  );
}
export default Navbar;

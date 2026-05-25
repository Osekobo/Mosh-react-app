import "../styles/Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
// Imports tools from React Router.Link => Used for navigation without page refresh
// NavLink => Like Link, but smarter.It automatically detects:Which route is currently active
// useNavigate => A React Router hook used for programmatic navigation. Redirects user to login page.
import { useState } from "react";
// Imports React state hook.Used to store changing values.
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // later you'll use global auth state
  const isLoggedIn = false;
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    setMenuOpen(false);
    navigate("/login");
  };
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          FinanceTracker
        </Link>

        <button onClick={() => setMenuOpen(!menuOpen)} className="menu-btn">
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          {!isLoggedIn ? (
            <>
              <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </NavLink>
              <NavLink to="/register" onClick={() => setMenuOpen(false)}>
                Register
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>
                Dashboard
              </NavLink>
              <NavLink to="/transactions" onClick={() => setMenuOpen(false)}>
                Transactions
              </NavLink>
              <NavLink to="/profile" onClick={() => setMenuOpen(false)}>
                Profile
              </NavLink>

              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

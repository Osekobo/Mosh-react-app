import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav>
        <Link to="/home">My App</Link>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;

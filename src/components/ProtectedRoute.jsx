import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // children means:“Whatever component is wrapped inside this component.”
  const isLoggedIn = localStorage.getItem("token");
  //   Checks if a token exists in browser local storage.
  // localStorage is browser storage that keeps data even after refresh.
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
    // Without replace:user can press Back button, and return to protected page.
    // With replace:login page replaces current history entry,protected page disappears from history
  }
  return children;
}
export default ProtectedRoute;

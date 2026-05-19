import { useState } from "react";
import { loginUser } from "../services/api";
import Input from "../components/Input";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const result = await loginUser({ email, password });
      setSuccess("Login successful");
      console.log("success", result);
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div>
        <h1>Login</h1>
        <p>Login to continue to home page</p>
        {error && <div>{error}</div>}
        {success && <div>{success}</div>}
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p>
          Doesn`t have an account<a href="/register">Sign up</a>
        </p>
      </div>
    </div>
  );
}
export default LoginPage;

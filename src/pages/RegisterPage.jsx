import { useState } from "react";
import Input from "../components/Input";
import { registerUser } from "../services/api";
// import { useNavigate } from "react-router-dom";

function RegisterPage() {
  // State for the form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // const navigate = useNavigate();
  //   handel form submission
  const handleSubmit = async (e) => {
    // async → allows use of await, (e) → event object from form submission
    e.preventDefault();
    // Stops the form from refreshing the page, Without this:React app would reload, All state would reset
    setLoading(true);
    // Tells React:“Request is in progress”, Used to:disable button, show “Loading...” text
    setError("");
    setSuccess("");
    // Removes old messages before new request starts
    try {
      const result = await registerUser({ name, phone, email, password });
      //   Sends user data to backend via API function, Waits for response (await), Stores response in result
      setSuccess("Registration successful!");
      console.log("success:", result);
      //   Clear form fields
      setName("");
      setPhone("");
      setEmail("");
      setPassword("");
      if (result) {
        // navigate("/dashboard");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      //   Runs no matter what (success or error). Stops loading state. This ensures:button re-enabled, “Loading...” disappears
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        <h1 style={styles.title}>Create Account</h1>
        <p style={styles.subtitle}>Sign up to get started</p>
        {error && <div style={styles.errorMessage}>{error}</div>}
        {success && <div style={styles.successMessage}>{success}</div>}
        <form onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <Input
            label="Phone Number"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
          />
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
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Creating account..." : "Sign Up"}
            {/* {loading ? <span className="spinner"></span> : "Sign Up"} */}
          </button>
        </form>
        <p style={styles.loginText}>
          Already have an account?
          <a href="/login" style={styles.link}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
  },
  formCard: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    textAlign: "center",
    marginBottom: "10px",
    color: "#333",
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "30px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  errorMessage: {
    backgroundColor: "#f8d7da",
    color: "#721c24",
    padding: "10px",
    borderRadius: "4px",
    marginBottom: "20px",
    textAlign: "center",
  },
  successMessage: {
    backgroundColor: "#d4edda",
    color: "#155724",
    padding: "10px",
    borderRadius: "4px",
    marginBottom: "20px",
    textAlign: "center",
  },
  loginText: {
    textAlign: "center",
    marginTop: "20px",
    color: "#666",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};
export default RegisterPage;

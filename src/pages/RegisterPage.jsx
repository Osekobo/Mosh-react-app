import { useState } from "react";
import Input from "../components/Input";
import { registerUser } from "../services/api";

function RegisterPage() {
  // State for the form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  //   handel form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // when request starts
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const result = await registerUser({ name, phone, email, password });
      setSuccess("Registration successful!");
      console.log("success:", result);
      //   Clear form
      setName("");
      setPhone("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    } finally {
        // when request ends
      setLoading(false);
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        <h1>Create Account</h1>
        <p>Sign up to get started</p>
        {/* {error && (<div style={styles.errorMessage}>{error}</div>)} */}
        {error && <div style={styles.errorMessage}>{error}</div>}
        {/* {success && (<div style={styles.successMessage}>{success}</div>)}; */}
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
          </button>
        </form>
        <p>
          Already have an account?<a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
const styles = {};
export default RegisterPage;

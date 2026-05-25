// const API_URL = "http://localhost:5000/api";
const API_URL = "http://127.0.0.1:5000";

export const registerUser = async (userData) => {
  // export → makes this function usable in other files
  // const registerUser → stores a function in a constant variable
  // async → allows you to use await inside the function
  // (userData) → input to the function (usually { name, email, password })
  // So this is an async API helper function for user registration
  try {
    // Starts a "safe zone"
    // If anything inside fails (network error, JSON error, etc.), execution jumps to catch
    // Used to prevent app crashes
    const response = await fetch(`${API_URL}/register`, {
      // fetch() → sends HTTP request to backend
      // ${API_URL}/register → builds full URL like:
      // await → waits until server responds
      // response → holds HTTP response object (status, headers, body)
      // At this point, request has been sent to Flask API
      method: "POST",
      //   tells backend: “I am sending data to create something”
      headers: {
        "Content-Type": "application/json",
      },
      // tells backend: “I am sending JSON data”
      // Without this, Flask may not parse body correctly
      body: JSON.stringify(userData),
      //   converts JS object into JSON string since HTTP can only send strings, not JS objects
    });

    const data = await response.json();
    // converts response body back into JS object and waits for parsing to complete
    if (!response.ok) {
      // Checking if request failed
      throw new Error(data.message || "Registration failed");
      //   manually creates an error, sends it to catch, uses backend message if available
    }
    return data;
    // sends successful response back to React which goes to const result = await registerUser(...)
  } catch (error) {
    // runs ONLY if: network fails, JSON parsing fails, error is thrown above
    console.error("Register error:", error);
    // throw new Error('Something went wrong')
    throw error;
    // sends error back to React, without this → React thinks everything worked
  }
};

// Step-by-step:
// Send request to backend
// Wait for response
// Convert response to JSON
// Check if request failed
// If failed → throw error → go to catch
// If success → return data to React
// Catch logs + rethrows error to frontend

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }
    return data;
  } catch (err) {
    console.log("Login error!:", err);
    throw err;
  }
};

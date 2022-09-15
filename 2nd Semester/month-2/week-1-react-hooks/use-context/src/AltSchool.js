import React from "react";
import './App.css';


// Create a context for our App
const AuthContext = createContext({
  isAuthenticated: false,
  user: {
    userName: "Tobi",
    name: "Aderibigbe Tobi",
    email: "aderibigbetobi1@gmail.com"
  }
})

// Define Context Provider
function AuthProvider(props) {
  return 
}

// A user profile component
function UserProfile() {
  return (
    <div>
      <h1>User Profile</h1>
      <h4>Username: @Tobi</h4>
      <h4>Full name: Tobi Aderibigbe</h4>
      <h4>Email: adetibigbetobi1@gmail.com</h4>
    </div>
  )
}

// Root component
export default function AltSchool() {
  return (
    <div className="App">
      <UserProfile />
    </div>
  );
}

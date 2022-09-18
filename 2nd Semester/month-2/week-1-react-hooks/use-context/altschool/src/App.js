import React, { useContext, createContext, useState } from "react";
import "./App.css";

// Create a context for our App
const AuthContext = createContext({
  // user: {
  //   userName: "Tobi",
  //   name: "Aderibigbe Tobi",
  //   email: "aderibigbetobi1@gmail.com",
  // },
  // verified: false,
});

const UpdateAuthContext = createContext();

// Define Context Provider
function AuthProvider({ children }) {
  const [verified, setVerified] = useState(false);

  function toggleVerified() {
    setVerified(prev => !prev);
  };

  return (
    <AuthContext.Provider
      value={{
        user: {
          userName: "Matthew",
          name: "Aderibigbe Tobi",
          email: "aderibigbetobi1@gmail.com",
        },
        verified: { verified },
      }}
    >
      <UpdateAuthContext.Provider value={toggleVerified}>
        {children}
      </UpdateAuthContext.Provider>
    </AuthContext.Provider>
  );
}

// A user profile component
function UserProfile() {
  const { user, verified } = useContext(AuthContext);
  const { toggle } = useContext(UpdateAuthContext);
  
  console.log(toggle);
  return (
    <div>
      <h1>User Profile</h1>
      <h4>Username: {user.userName}</h4>
      <h4>Full name: {user.name}</h4>
      <h4>Email: {user.email}</h4>
      <h4>Verified: {verified ? "Yes" : "No"}</h4>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

// Root component
export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <UserProfile />
      </AuthProvider>
    </div>
  );
}

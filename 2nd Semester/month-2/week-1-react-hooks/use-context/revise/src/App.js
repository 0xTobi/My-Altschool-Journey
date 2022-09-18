import React, { useState, useContext, createContext } from "react";
import "./App.css";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({
    userName: "Matthew",
    name: "Aderibigbe Tobi",
    email: "aderibigbetobi1@gmail.com",
    bio: "I'm a Software Engineer, and UI/UX designer",
  });

  return (
    <AuthContext.Provider
      value={{
        user: user,
        setUser: setUser,
        verified: true,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function UserProfile() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>User Profile</h1>
      <p>User: {user.userName}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

function UserBio() {
  const { user, setUser } = useContext(AuthContext);

  function changeBio() {
    setUser((prev) => {
      return {
        ...prev,
        bio: "I'm no longer a Software Engineer",
      };
    });
  }

  return (
    <div>
      <h1>User Bio</h1>
      <p>{user.bio}</p>
      <button onClick={changeBio}> Change bio </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <UserProfile />
        <UserBio />
      </AuthProvider>
    </div>
  );
}

export default App;

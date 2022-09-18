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

// const UpdateAuthContext = createContext();

function useAuthContext() {
  return useContext(AuthContext);
}

// A custom hook that returns our ThemeUpdateContext.
// function useAuthUpdate() {
//   return useContext(UpdateAuthContext);
// }

// Define Context Provider
function AuthProvider({ children }) {
  // const [verified, setVerified] = useState(false);

  const [user, setUser] = useState({
    userName: "Matthew",
    name: "Aderibigbe Tobi",
    email: "aderibigbetobi1@gmail.com",
    bio: "I'm a Software Engineer, and UI/UX designer, who currently works as the lead designer at DotCircle Solutions. I'm passionate about getting and sharing knowledge, documentation, web engineering, Jamstack, and others. I build useful open-source projects, and I also create aesthetically user interfaces Behance",
  });

  // function toggleVerified() {
  //   setVerified((prev) => !prev);
  // }

  return (
    <AuthContext.Provider
      value={{
        user: user,
        verified: true,
        setUser: setUser,
        // toggle: toggleVerified,
      }}
    >
      {/* <UpdateAuthContext.Provider value={toggleVerified}> */}
        {children}
      {/* </UpdateAuthContext.Provider> */}
    </AuthContext.Provider>
  );
}

function UserBio() {
  // To access the bio property of the user object in the AuthContext.
  // const { user, toggle } = useAuthContext();
  const { user, setUser } = useAuthContext();
  const handleBioUpdate = (event) => {
    event.preventDefault();
    setUser((prev) => {
      return {
        ...prev,
        bio: "no bio"
      }
    })
  }

  return (
    <div>
      <h1>User Bio</h1>
      <p>{user.bio}</p>
      <button onClick={handleBioUpdate}> click me </button>
    </div>
  );
}

// A user profile component
function UserProfile() {
  const { user } = useAuthContext();
  // const toggle = useAuthUpdate();


  return (
    <div>
      <h1>User Profile</h1>
      <h4>Username: {user.userName}</h4>
      <h4>Full name: {user.name}</h4>
      <h4>Email: {user.email}</h4>
      {/* <h4>Verified: {verified ? "Yes" : "No"}</h4> */}
      {/* <button onClick={toggle}>Toggle</button> */}
      <UserBio />
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

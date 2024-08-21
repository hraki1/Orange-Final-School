import { useState } from "react";
import { Home } from "./components/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dasboard";
import Ask from "./components/Ask";
import { Profile } from "./components/Profile";
import LoginRegistration from "./components/LoginRegestrtion";
import { Navbar } from "./components/Navbar";
import { DescPosts } from "./components//DescPosts";
import { Admins } from "./components//Admins";
import { Students } from "./components//Students";
import { Answers } from "./components//Answers";
import { Questions } from "./components//Questions";
import PostItem from "./components/PostItem";
import AddComments from "./components/Ask/Components/Addcomments";
import { AuthContext } from "./components/shared/context/auth-context";
import { UpdateProfile } from "./components/UpdateProfile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [exsistingUserId, setExsistingUserId] = useState();

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };
  const isAdminHandler = (value) => {
    setIsAdmin(value);
  };

  const isMemberHandler = (value) => {
    setIsMember(value);
  };

  const exsistingUserHandler = (value) => {
    setExsistingUserId(value);
  };

  return (
    <div>
      {console.log(isLoggedIn)}
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          isAdmin: isAdmin,
          isMember: isMember,
          exsistingUserId: exsistingUserId,

          login: login,
          logout: logout,
          isAdminHandler: isAdminHandler,
          isMemberHandler: isMemberHandler,
          exsistingUserHandler: exsistingUserHandler,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Ask" element={<Ask />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Register" element={<LoginRegistration />} />
          <Route path="//DescPosts" element={<DescPosts />} />
          <Route path="/Admins" element={<Admins />} />
          <Route path="/Students" element={<Students />} />
          <Route path="/Answers" element={<Answers />} />
          <Route path="/Questions" element={<Questions />} />
          <Route path="/Dashboard/students" element={<Students />} />
          <Route path="/Dashboard/Answers" element={<Answers />} />
          <Route path="/Dashboard/Questions" element={<Questions />} />
          <Route path="/Dashboard/Admins" element={<Admins />} />
          <Route path="/PostItem" element={<PostItem />} />
          <Route path="/AddComments/:qid" element={<AddComments />} />
          <Route path="Profile/UpdateProfile" element={<UpdateProfile />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;

// import './styles/login.css'
// import  {Home}  from './components/Home';
// import LoginRegistration from './components/LoginRegestrtion'

//  import './App.css';

// function App() {
//   return(
//   <div>
// <LoginRegistration />

//   {/* <Home /> */}

//    </div>
//   )
// }

// export default App;

// import {Profile} from './components/Profile'
// function App() {
//   return(
//   <div>

//   <Profile />

//    </div>
//   )
// }

// export default App;

// import {Dashboard} from './components/Dasboard'
// function App() {
//   return(
//   <div>

//   <Dashboard />

//    </div>
//   )
// }

// export default App;

// import Ask from './components/Ask'
// function App() {
//   return(
//   <div>

//   <Ask />

//    </div>
//   )
// }

// export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "/Users/kashuawee/Desktop/clone/SDGP-CS38/you-anime/src/components/Home/Home.js";
import Login from "/Users/kashuawee/Desktop/clone/SDGP-CS38/you-anime/src/components/Login/Login.js";
import Signup from "/Users/kashuawee/Desktop/clone/SDGP-CS38/you-anime/src/SignUp/SignUp.js";

import { auth } from "/Users/kashuawee/Desktop/clone/SDGP-CS38/you-anime/src/firebase/firebase.js";

// import "/Users/kashuawee/Desktop/clone/SDGP-CS38/you-anime/src/App.css";

function Dash() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        
      } else setUserName("");
    });
  }, []);

  return (
    
    <Link to="/dash" style={{textDecoration:"none"}}>
    <div className="Dash">
      {/* <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home name={userName} />} />
        </Routes>
      </Router> */}
      <Home/>
    </div>
    </Link>
  );
}

export default Dash;

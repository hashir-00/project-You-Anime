import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../../components/Home/Home.js";
import { auth } from "../../firebase/firebase.js";



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
    
    <Link to="/Dash" style={{textDecoration:"none"}}>
    <div className="Dash">

      <Home/>
    </div>
    </Link>
  );
}

export default Dash;

import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "react-router";
import { Route } from "react-router-dom";
import Login from "/Users/kashuawee/Desktop/clone/SDGP-CS38/you-anime/src/components/Login/Login.js";
import Signup from "/Users/kashuawee/Desktop/clone/SDGP-CS38/you-anime/src/SignUp/SignUp.js";

function Home(props) {
  return (
    <Link to='/home' style={{textDecoration:"none"}}>
        <div>
      <div>
        <h1>
          <Link to="/login" element={<Login/>}>Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup" element={<Signup/>}>Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      {/* <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
    </div>
    {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    </Routes> */}
    </Link>
    
  );
}

export default Home;

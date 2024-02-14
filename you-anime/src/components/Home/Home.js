import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../../SignUp/SignUp";

function Home(props) {
  return (
    <>    <Login />
    <Signup />    
    </>

  );
}

export default Home;

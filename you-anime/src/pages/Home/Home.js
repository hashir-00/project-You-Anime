import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../SignUp/SignUp";
import { Helmet } from "react-helmet";
import HomePage from "./HomePage";


const Home = () => {
  return(
<HomePage/>
  );
};
export default Home;

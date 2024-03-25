import React from "react";
import HomePage from "./HomePage";
import { Helmet } from "react-helmet";



const Home = () => {
  return(
    <div> 
      <Helmet>
    <title>YouAnime-Home</title>
    <meta name="description" content="Home" />
     </Helmet>
    <HomePage/>
   </div>
   
  );
};
export default Home;

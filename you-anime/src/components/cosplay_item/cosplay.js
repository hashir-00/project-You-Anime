
import React from 'react';
import "./cosplay.css"
import { Link } from 'react-router-dom';

const Cosplay = () => {
 
  return (
    <Link to="/CosplayPage" style={{textDecoration:"none"}}>
    <div className="dashboard-item"  id="cosplay" >
   cosplay
    </div>
    </Link>
  );
};

export default Cosplay;

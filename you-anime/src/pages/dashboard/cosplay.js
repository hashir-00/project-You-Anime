
import React from 'react';
import "./cosplay.css"

const Cosplay = ({ history }) => {
  const handleClick = () => {
    // Redirect to relevant page (replace '/page2' with the actual URL)
    history.push('/page2');
  };

  return (
    <div className="dashboard-item"  id="cosplay" onClick={handleClick}>
    cosplay
    </div>
  );
};

export default Cosplay;

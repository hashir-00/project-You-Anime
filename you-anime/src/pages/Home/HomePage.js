import { Helmet } from "react-helmet";
import Login from "../Login/Login";
import { Link } from "react-router-dom";

const HomePage = () => {
   
    return (
        <div className="chatbot-page">
            <Helmet>
          <title>YouAnime-Home</title>
          <meta name="description" content="Chatbot" />
        </Helmet>
          <div>
            <h1>Welcome to YouAnime</h1>
            <h2>Sign Up</h2>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
            <h2>Log In</h2>
            <Link to="/login">
              <button>Log In</button>
            </Link>
          </div>
         
        </div>
      );
   
  };
  
  export default HomePage;
  
import { Helmet } from "react-helmet";
import "./HomePage.css";
import NavBarHome from "../../components/navBarHome/navBarHome";

const HomePage = () => {
   
    return (
        <div className="contain-HomePage">
            <Helmet>
          <title>YouAnime-Home</title>
          <meta name="description" content="Chatbot" />

        </Helmet>
          <div>
            <NavBarHome/>
            <h1>Welcome to YouAnime</h1>
          </div>
         
        </div>
      );
   
  };
  
  export default HomePage;
  
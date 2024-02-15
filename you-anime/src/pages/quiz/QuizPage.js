import { Helmet } from "react-helmet";
import QuizApp from "./QuizApp";
import NavBar from "../../components/navbar/navbar";

const QuizPage = () => {
    return (
      <div className="Quiz-page">
        <Helmet>
          <title>YouAnime-Quiz</title>
          <meta name="description" content="Chatbot" />
        </Helmet>      <NavBar/>
    <QuizApp/>    
      </div>
    );
  };
  
  export default QuizPage;
  
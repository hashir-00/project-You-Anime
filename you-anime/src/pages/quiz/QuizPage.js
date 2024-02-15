import { Helmet } from "react-helmet";
import QuizApp from "./QuizApp";

const QuizPage = () => {
    return (
      <div className="Quiz-page">
        <Helmet>
          <title>YouAnime-Quiz</title>
          <meta name="description" content="Chatbot" />
        </Helmet>
    <QuizApp/>    
      </div>
    );
  };
  
  export default QuizPage;
  
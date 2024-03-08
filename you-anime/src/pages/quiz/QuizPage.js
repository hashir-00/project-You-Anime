import { Helmet } from "react-helmet";
import QuizApp from "./QuizApp";
import NavBar from "../../components/navbar/navbar";
import QuizDescription from "./QuizDescription";

const QuizPage = () => {
    return (
      <div className="Quiz-page">
        <Helmet>
          <title>YouAnime-Quiz</title>
          <meta name="description" content="Quiz" />
        </Helmet>      <NavBar/>
    <QuizDescription/>    
      </div>
    );
  };
  
  export default QuizPage;
  
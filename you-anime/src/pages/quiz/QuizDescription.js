import styles from './QuizDescription.module.css';
import { useNavigate } from 'react-router-dom';
const QuizDescription = () => {
  const navigate = useNavigate();

    const TakeQuiz= () => {
        navigate('/QuizPage');
    }

 return (
    <>
    <div className={styles.messageBox}>
        <p className={styles.message}>Hi take the quiz to get ypur anime Recommendations</p>
      </div>
    <button className={styles.strtBtn} onClick={TakeQuiz}>
        Start Quiz
      </button>
    </>
 )   
}
export default QuizDescription;
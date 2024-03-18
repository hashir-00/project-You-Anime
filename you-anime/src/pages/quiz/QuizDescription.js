import styles from './QuizDescription.module.css';
import { useNavigate } from 'react-router-dom';

const QuizDescription = () => {
  const navigate = useNavigate();

    const TakeQuiz= () => {
        navigate('/QuizApp');
    }
    const back= () => {
      navigate('/Dashboard');
  }

 return (
    <>
    <button className={styles.backBtn} onClick={back}>
       Back
      </button>
    <div className={styles.messageBox}>
        <div className={styles.message}>
          <div className={styles.title}>TEST YOUR ANIME LEVEL</div>
          <div className={styles.head}>
          check your anime level based on
           this perfectly designed quiz based<br/>
            on popularity and great storyline<br/>
            .Start your dive into the world of 
            anime through this quiz 
          </div>
          <div className={styles.HowItWorks}>
          <p>How it works</p>
          <p>0-5 :Beginner</p>
          <p>6-10: Intermediate </p>
          <p>11-15:Expert</p>
         
          </div>
          <p id={styles.p}> 
           So take a breath and get your anime world building <br/>by clicking on Start Quiz button.<br/>
            <p className={styles.goodluck}>Good luck weeb!!!!</p>
          </p>  
          
   
</div>
      </div>
    <button className={styles.strtBtn} onClick={TakeQuiz}>
        Start Quiz
      </button>
    </>
 )   
}
export default QuizDescription;
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
    <div className={styles.container}> <div className={styles.messageBox}>
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
      <div className={styles.buttons}>
        
      <div className={styles.buttonContainer}><button  onClick={TakeQuiz}>
        Start Quiz
      </button></div> <div><button  onClick={back}>
       Back
      </button></div>
      </div>
    </div>
   
    </>
 )   
}
export default QuizDescription;
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import styles from './Quiz.module.css';
import { useNavigate } from 'react-router-dom';
const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  var [totalMarks, setTotalMarks] = useState(0);
  const [categoryTotals, setCategoryTotals] = useState({
    beginner: 0,
    intermediary: 0,
    expert: 0,
  });
  const [usedQuestionIndices, setUsedQuestionIndices] = useState([]);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [questionsCompleted, setQuestionsCompleted] = useState(false);
  const [level, setLevel] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [choices,setChoice]=useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Determine the level based on totalMarks
    const determineLevel = () => {
      if (totalMarks <= 5) {
        setLevel('Beginner');
      } else if (totalMarks <= 10) {
        setLevel('Intermediate');
      } else {
        setLevel('Expert');
      }
    };

    determineLevel();
  }, [totalMarks]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonFiles = [
          { url: './Questionsjsonfile/begin.json', category: 'beginner' },
          { url: './Questionsjsonfile/inter.json', category: 'intermediary' },
          { url: './Questionsjsonfile/exp.json', category: 'expert' }
        ];

        const data = await Promise.all(jsonFiles.map(file => fetch(file.url).then(response => response.json())));

        const combinedQuestions = data.reduce((acc, curr, index) => {
          return acc.concat(curr.map((question) => ({
            question: question.question,
            choices: question.options,
            correctAnswer: question.correct_answer,
            category: jsonFiles[index].category
          })));
        }, []);

        // Shuffle the questions
        const shuffledQuestions = shuffleArray(combinedQuestions).slice(0, 15);

        setQuestions(shuffledQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    // Function to shuffle an array
    const shuffleArray = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };

    fetchData();
  }, []);

  const updateProgressBar = useCallback(() => {
    const newProgressPercentage = (currentQuestionIndex / (questions.length - 1)) * 100;
    setProgressPercentage(newProgressPercentage);
  }, [currentQuestionIndex, questions.length]);

  useEffect(() => {
    updateProgressBar();
  }, [updateProgressBar]);

  const handleChoiceChange = (event) => {
    const selectedChoice = event.target.value;
    console.log('Selected Choice:', selectedChoice);
  };

  const generateQuestionnaire = (question) => {
    if (!question) {
      return null;
    }

    return (
      <div className={styles.questions}>
        <p>{currentQuestionIndex + 1}. {question.question}</p>
        {question.choices.map((choice, choiceIndex) => (
          <React.Fragment key={choiceIndex}>
            <label>
              <input type="radio" name={`question${currentQuestionIndex}`}  value={choice}  onChange={handleChoiceChange} />
              {choice}
              
            </label><br />
          </React.Fragment>
        ))}
      </div>
    );
  };

  const showNextQuestion = () => {
    setUsedQuestionIndices([...usedQuestionIndices, currentQuestionIndex]);

    if (currentQuestionIndex < questions.length - 1 && usedQuestionIndices.length < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      updateProgressBar();
      setChoice(false);
    } else {
      setQuestionsCompleted(true);
      showResults();
    }
  };

  const showResults = () => {

  return (<>
  <div className={styles.messageBox}>
  <div className={styles.message}><p>
  <h4>Results</h4>
  <p>Level: {level}</p>
  <p>Total Marks: {totalMarks}</p>
</p>


</div>
  <div  className={styles.backbutton}>
  <button onClick={RetrunToHome}>
        To Dashboard
      </button>
      <button onClick={ToRecommendations}>
     Recommendations
      </button>
      </div></div>  


</>
      );
  };

  const submitAnswers = () => {
    const selectedChoice = document.querySelector(`[name="question${currentQuestionIndex}"]:checked`);

    if (selectedChoice) {
      const selectedValue = selectedChoice.value;
      const correctAnswer = questions[currentQuestionIndex].correctAnswer;
      
      if (selectedValue === correctAnswer) {
        const category = questions[currentQuestionIndex].category;
        setTotalMarks(totalMarks  + 1  );

       
        setCategoryTotals({
          ...categoryTotals,
          [category]: categoryTotals[category] + getCategoryMarks(category),
        });
      }
    }
    const radioInputs = document.querySelectorAll(`[name="question${currentQuestionIndex}"]`);
    radioInputs.forEach(input => {
      input.checked = false;
    })

    if (usedQuestionIndices.length >= questions.length) {
      setQuestionsCompleted(true);
      
    } else {
      showNextQuestion();
    }
  };


  const getCategoryMarks = (category) => {
    return {
      beginner: 1,
      intermediary: 2,
      expert: 3,
    }[category];
  };

  const RetrunToDescription = () => {
    navigate('/QuizPage');
  }

  const ToRecommendations = () => {
    localStorage.setItem('level', level);
    navigate('/Recommendations');
  };
  const RetrunToHome = () => {
    navigate('/Dashboard');
  }


  return (
    <>
    {!questionsCompleted && ( 
      <>
       <p className={styles.progressLabel}>Progress</p>
      <div className={styles.progressBar}>
        <div style={{ '--progressPercentage': `${progressPercentage}%` }} className={styles.progressIndicator}></div>
      </div>

      <div className={styles.questionnaireContainer}>
        {generateQuestionnaire(questions[currentQuestionIndex])}
     
      </div>
      <div className={styles.btn}>  <button className={styles.submtBtn} onClick={submitAnswers} disabled={questionsCompleted}>
        Submit
      </button>
       <button className={styles.canclBtn} onClick={RetrunToDescription}>
        Cancel
      </button></div>
    
    
      </>
      )}
    {questionsCompleted && showResults()}
    </>
  );
};

export default QuizApp;

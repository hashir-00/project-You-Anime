import React, { useState, useEffect, useRef } from 'react';
import styles from './chat.module.css'; // Import CSS file

import MusicRecommender from '../musicRecommender/musicRecommender';


function ChatBot() {
  const [message, setMessage] = useState('');
  const [emotionState,setEmotionState] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [output, setOutput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const chatContainerRef = useRef(null); // Ref for chat container
  const [loading, setLoading] = useState(false);
  const[recommendMusic,setRecommendMusic] = useState(false);
  const [dots, setDots] = useState('');
  
  function SideBar({ setEmotionState }) {
    return (
        <div className={styles.sidebarItems}>
            <ul>
                <li>
                    <button onClick={() => setEmotionState('negative')}>
                        Negative
                    </button>
                </li>
                <li>
                    <button onClick={() => setEmotionState('positive')}>
                        Positive
                    </button>
                </li>
                <li>
                    <button onClick={() => setEmotionState('neutral')}>
                        Neutral
                    </button>
                </li>
                <li>
                    <button onClick={() => setEmotionState('exneg')}>
                        Extreme Negative
                    </button>
                </li>
            </ul>
        </div>
    );
}









  useEffect(() => {
    const interval = setInterval(() => {
      // Add a dot to the loading animation
      setDots(prevDots => prevDots === '...' ? '' : prevDots + '.');
    }, 500); // Change the duration of each dot here (in milliseconds)

    return () => clearInterval(interval);
  }, []); // Run effect only once on component mount

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Scroll to the bottom of the chat container
      scrollToBottom();
      setDots(''); // Clear the dots when the message is received
    }, 2000); // Adjust the time delay as needed

    return () => clearTimeout(timeout);
  }, []);

  const scrollToBottom = () => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }
  const clearChatHistory = () => {
    setChatHistory([]);
  }

  const sendMessage = async() => {
    if (!message.trim() || message === "Please enter a valid message") {
        // If the message is empty or contains only whitespace, do not send
       return setMessage("Please enter a valid message");
      }
      else{ 
        setLoading(true);
       
        const requestData = {
        message: message,
        history: chatHistory, // Pass chat history with the request
        //try changing these values
        system_prompt: "determine the users emotion and respond positively.your first word should be one of these emotions.positive,negative,extreame negative as exneg and neutral",
        temperature: 0.9,
        max_new_tokens: 256, // Max number of tokens to generate from the bot
        top_p: 0.95,
        repetition_penalty: 1.0
      };
      // eslint-disable-next-line no-unused-vars
      //https://hashir00.pythonanywhere.com/chat
      // eslint-disable-next-line no-unused-vars
      const response = await fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      })
      .then(response => response.json())
      .then(data => {
        setOutput(data.output);
        setEmotionState(data.output.split(".")[0]);
        console.log(data.output.split(".")[0]);
        setChatHistory(prevHistory => [...prevHistory, { userMessage: message, botMessage: data.output.split(".").slice(1).join(".") }]);
        setMessage(''); // Clear the input field
        scrollToBottom(); // Scroll to the bottom of the chat container
      })
      .catch(error => {
        console.error('Error:', error);
      }).finally(() => {
        setLoading(false);
      });
    
    }  
  }

// const sendEmotion = async() => {
//   const requestData = {
//     message:message,
//   }
//   const response = await fetch(' http://127.0.0.1:5000/sentiment', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(requestData)
//   }).then(response => response.json())
//   .then(data => {
//     setEmotion(data.emotion);
//     console.log(data.emotion);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   })

    

// }


  return (
    <>

    {!recommendMusic && ( <div className={styles.container}>
  
      <div ref={chatContainerRef} className={styles.chatContainer}>
     
        {chatHistory.map((item, index) => (
          <React.Fragment key={index}>
            <div className={styles.userMessage}>{item.userMessage}</div>
            <div className={styles.botMessage} >{item.botMessage}</div>
          </React.Fragment>
        ))}

      {loading && 
        <>
        <div className={styles.userMessage}>{message}</div>
        <div className={styles.botMessage}>typing{dots}</div>
        </>
        }
        
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onClick={(e) => setMessage('')}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
        <button onClick={clearChatHistory}>Clear Chat</button>
        <div id={styles.emotion}>
        <button onClick={()=>setRecommendMusic(true)}>Recommend Music</button>
      </div>
 </div>
    

    </div>)}
        
       {recommendMusic && (<>
        <SideBar setEmotionState={setEmotionState} />
       {emotionState ?  <div className={styles.music}>
          
        <div><MusicRecommender emotion={emotionState}/> </div>
        <div id={styles.backTochatbot}><button onClick={()=>{setRecommendMusic(false);setEmotionState(null);}} >
                       Go back to chatbot
                    </button></div>
        </div>:  <div id={styles.backTochatbot}> <p>no emotion deteced</p><button onClick={()=>setRecommendMusic(false)} >
                       Go back to chatbot
                    </button></div>}
       
       </>
       
       )} 
    
   
   

    
   
    </>
  );
}

export default ChatBot;


// function Chatbot() {
//   const [message, setMessage] = useState('');
//   const [output, setOutput] = useState('');

//   useEffect(() => {
//     // Send the first prompt when the component mounts
//     // sendFirstPrompt();
    
//   }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

//   // const sendFirstPrompt = async () => {
//   //   const firstPrompt = "Act like you are an emotional supporter"; // Your first prompt
//   //   const requestData = {
//   //     message: firstPrompt,
//   //     history: [],
//   //     system_prompt: "", // No system prompt for the first prompt
//   //     temperature: 0.9,
//   //     max_new_tokens: 256,
//   //     top_p: 0.95,
//   //     repetition_penalty: .0
//   //   };

//   //   // eslint-disable-next-line no-unused-vars
//   //   const response = await fetch('http://127.0.0.1:5000/chat', {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json'
//   //     },
//   //     body: JSON.stringify(requestData)
//   //   })
//   //   .then(response => response.json())
//   //   .then(data => {
//   //     setOutput(data.output);
//   //   })
//   //   .catch(error => {
//   //     console.error('Error:', error);
//   //   });
    
//   // }


//   const sendMessage = () => {
//     const requestData = {
//       "message": message,
//       "history": [],
//       "system_prompt": "EMOTIONAL SUPPORTER: Hi, how are you?\nUSER",
//       "temperature": 0.9,
//       "max_new_tokens": 256,
//       "top_p": 0.95,
//       "repetition_penalty": 1.0
//     };

//     fetch('http://127.0.0.1:5000/chat', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(requestData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       setOutput(data.output);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
//   };

//   return (
//     <div>
//       <h1>Chatbot</h1>
//       <textarea
//         id="message"
//         rows="4"
//         cols="50"
//         placeholder="Enter your message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       ></textarea><br />
//       <button onClick={sendMessage}>Send</button>
//       <div id="output">{output}</div>
//     </div>
//   );
// }

// export default Chatbot;

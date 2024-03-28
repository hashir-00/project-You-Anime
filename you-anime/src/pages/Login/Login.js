import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import InputControl, { InputControlPassword } from "../../components/InputControl/InputControl";
import { auth } from "../../firebase/firebase";
import styles from "./Login.module.css";

let loggedIn = false;

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
   const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        loggedIn = true;
        navigate("/dashboard");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  const googleSignIn =()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      loggedIn = true;
      navigate("/Dashboard");
      
    }).catch((error) => {
      // Handle Errors here.
      setErrorMsg(error.message);
    });
  }
  return (
    <div className={styles.container}>
      
      <div className={styles.innerBoxWrapper}>
      <div className={styles.innerBoxOne}>
        <h3 className={styles.heading}>Login</h3>

        <InputControl 
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder=" email address"
        />
        <InputControlPassword        
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Password"
        type={showPassword ? "text" : "password"}
        />
        <div className={styles.showPassword}>
        <input
          type="checkbox"
          id="showPassword"
          onChange={() => setShowPassword((prev) => !prev)}
        />
        <label htmlFor="showPassword">Show Password</label>
      </div>
        
       

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>

            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google logo" onClick={googleSignIn}/>
      
          <p>
           Dont have an account?{<br/>}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
        <div className={styles.Homebutton}>     
        <Link to="/Home">
         Back to Home
      </Link></div>
   
      </div>
      <div className={styles.innerBoxTwo}></div>
      </div>
    </div>
  );
}

export default Login;
export { loggedIn };
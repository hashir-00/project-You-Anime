import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
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
  return (
    <div className={styles.container}>
      <Link to="/Home">
      <button className={styles.Homebutton}>Back to Home</button>
      </Link>
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
          <p>
           Dont have an account?{<br/>}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
      <div className={styles.innerBoxTwo}></div>
      </div>
    </div>
  );
}

export default Login;
export { loggedIn };
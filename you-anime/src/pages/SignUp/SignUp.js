import { Helmet } from "react-helmet";
import SignupPage from "./SignUpPage";

const SignUp = () => {
  return (
    <div>
        <Helmet>
          <title>YouAnime-Sign Up </title>
          <meta name="description" content="Sign up" />
        </Helmet>
      <SignupPage />
    </div>
  );
}
export default SignUp;

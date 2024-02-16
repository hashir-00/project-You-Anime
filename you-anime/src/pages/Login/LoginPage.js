import { Helmet } from "react-helmet";
import Login from "./Login";

const LoginPage = () => {
    return (
        <div>
          <Helmet>
          <title>YouAnime-Login </title>
          <meta name="description" content="Login" />

        </Helmet>
          <Login />
        </div>
    );
}
export default LoginPage;
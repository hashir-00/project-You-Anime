import { Helmet } from "react-helmet";
import CosplayApp from "./CosplayApp";
import NavBar from "../../components/navbar/navbar";

const CosplayPage = () => {
    return (
      <div className="Cosplay-page">
        <Helmet>
          <title>YouAnime-Cosplay</title>
          <meta name="description" content="cosplay" />
        </Helmet>      <NavBar/>
        <CosplayApp/>
      </div>
    );
  };
  
  export default CosplayPage;
  
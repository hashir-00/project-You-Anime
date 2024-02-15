import { Helmet } from "react-helmet";
import CosplayApp from "./CosplayApp";

const CosplayPage = () => {
    return (
      <div className="Cosplay-page">
        <Helmet>
          <title>YouAnime-Cosplay</title>
          <meta name="description" content="cosplay" />
        </Helmet>
        <CosplayApp/>
      </div>
    );
  };
  
  export default CosplayPage;
  
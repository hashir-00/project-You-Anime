import { Helmet } from "react-helmet";
import AboutUsApp from "./aboutUsApp";

export default function AboutUsPage(){
    return(
        <div>
             <Helmet>
          <title>YouAnime-About Us</title>
          <meta name="description" content="About Us" />
        </Helmet>
        <AboutUsApp/>
        
        </div>
    )
}
import { Helmet } from "react-helmet";
import ContactUsApp from "./contactUsApp";

export default function ContactUsPage(){
    return(
        <div>
             <Helmet>
          <title>YouAnime-Contact Us</title>
          <meta name="description" content="Contact Us" />
        </Helmet>
        <ContactUsApp/>
        
        </div>
    )
}
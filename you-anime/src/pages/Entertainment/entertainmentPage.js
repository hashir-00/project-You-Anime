import { Helmet } from "react-helmet";
import EntertainmentApp from "./entertainmentApp";

export default function EntertainmentPage() {
    return (
        <div>
            <Helmet>
                <title>YouAnime-Entertainment</title>
                <meta name="description" content="Entertainment Page" />
            </Helmet>
            <EntertainmentApp />
        </div>
    );
}
import { Helmet } from "react-helmet";
import EntertainmentApp from "./entertainmentApp";

export default function EntertainmentPage() {
    return (
        <div>
            <Helmet>
                <title>YouAnime-Meme-gallery</title>
                <meta name="description" content="Meme gallery Page" />
            </Helmet>
            <EntertainmentApp />
        </div>
    );
}
import { useSelector } from 'react-redux';
import videHomePage from '../../assets/video-homepage.mp4';
const HomePage = (props) => {
    const isAuthenticated = useSelector(state => state.uer.isAuthenticated);
    const account = useSelector(state => state.uer.account);

    return (
        <div className="homepage-container">
            <video autoPlay muted loop >
                <source src={videHomePage} type="video/mp4" />
            </video>

            <div className="homepage-content">
                <div className="title-1">There's a better way to ask</div>
                <div className="title-2">You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy.</div>
                <div className="title-3">
                    <button type="button">Get started - it's free</button>
                </div>

            </div>
        </div>
    );
};

export default HomePage;
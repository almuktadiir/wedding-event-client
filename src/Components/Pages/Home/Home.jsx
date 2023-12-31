import Banner from "../Banner/Banner";
import Invitations from "../Invitations/Invitations";
import Services from "../Services/Services";
import Team from "../Team/Team";
import WedCakes from "../WedCake/WedCakes";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
                <Services></Services>
                <Team></Team>
                <Invitations></Invitations>
                <WedCakes></WedCakes>
            </div>
        </div>
    );
};

export default Home;
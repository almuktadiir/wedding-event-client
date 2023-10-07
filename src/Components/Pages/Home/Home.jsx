import Banner from "../Banner/Banner";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;
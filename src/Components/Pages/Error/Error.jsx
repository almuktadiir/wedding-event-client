import { Link } from 'react-router-dom';
import error from '../../../assets/error.jpg'

const Error = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${error})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-5xl">
                    <h1 className="mb-5 text-6xl font-bold text-white">Ooops</h1>
                    <h1 className="mb-5 text-6xl font-bold text-white">Page Not Found</h1>
                    <Link to={'/'}>
                    <button className="btn bg-[#ee62a8ff] border-0 text-white w-full font-bold">Go to Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
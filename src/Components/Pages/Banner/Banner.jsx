import bg from '../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-3xl">
                    <h1 className="mb-5 text-6xl font-bold text-white">Dream Wedding Destiny</h1>
                    <p className="mb-5 text-white text-2xl">Experience the magic of love and commitment as we celebrate the union. Join us on for a day filled with love, laughter, and cherished memories.</p>
                    <button className="btn bg-[#ee62a8] border-0 text-white hover:text-black font-bold">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
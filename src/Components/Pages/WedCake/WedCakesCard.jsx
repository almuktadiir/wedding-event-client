import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';


const WedCakesCard = ({ cakesData }) => {
    const { id, cake_image, cake_title } = cakesData;

    return (
        <div className="relative grid h-[25rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div style={{ background: `url(${cake_image})` }} className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative p-6 py-14 px-6 md:px-12">
                <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                    {cake_title}
                </h2>
                <Link to={`/wedcake/${id}`} className="mb-4 font-sans text-xl font-semibold leading-snug tracking-normal text-pink-400 antialiased flex justify-end">
                    <button className="btn border-pink-500 text-pink-500 btn-outline">About More 
                    <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>
                    </button> 
                </Link>
            </div>
        </div>
    );
};

export default WedCakesCard;

WedCakesCard.propTypes = {
    cakesData: PropTypes.object
}
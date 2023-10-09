import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const ServiceCard = ({ service }) => {

    const { id, title, short_description, image_url, price } = service;

    return (
        <div data-aos="fade-up" data-aos-duration="2000" className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-pink-100 bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                    src={image_url}
                    alt="image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-6">
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                </h4>
                <p className="mb-4 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased text-justify">
                    {short_description}
                </p>
                <h6 className="mb-4 block text-base font-semibold leading-relaxed tracking-normal text-pink-400 antialiased">
                    Rate: $ {price}
                </h6>
                <Link to={`/service/${id}`} className="text-right" href="#" service={service}>
                    <button
                        className="flex justify-end select-none items-end gap-2 rounded-lg align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        See More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            ></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.object
}
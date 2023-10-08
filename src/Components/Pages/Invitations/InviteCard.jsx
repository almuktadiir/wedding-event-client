import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


const InviteCard = ({ inviteCard }) => {
    const { id, invite_title, invitations_image_url } = inviteCard;

    return (
        <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md my-14">
            <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <img src={invitations_image_url} alt="profile-picture" />
            </div>
            <div className="p-6 text-center">
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {invite_title}
                </h4>
                <Link to={`/invite/${id}`} className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                    See Details
                </Link>
            </div>
        </div>
    );
};

export default InviteCard;

InviteCard.propTypes = {
    inviteCard: PropTypes.object
}
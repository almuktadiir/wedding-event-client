import { useLoaderData, useParams } from "react-router-dom";


const InviteCardDetails = () => {
    const inviteCardInfo = useLoaderData();
    const {id} = useParams();
    console.log(inviteCardInfo, id);

    const findInviteInfo = inviteCardInfo?.find(singleInfo => singleInfo.id === id);
    console.log(findInviteInfo, id);

    const {invite_title, price, invitations_detail_url} = findInviteInfo;

    return (
        <div className="max-w-7xl mx-auto mt-5">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="col-span-3">
                        <img className="w-full h-[30rem] rounded-lg" src={invitations_detail_url} alt="" />
                        <div className="my-3 px-6 rounded-lg pb-10 bg-pink-100">
                            <h2 className="text-3xl py-5 font-semibold">{invite_title}</h2>
                            <h2 className="pb-3 text-xl font-medium">Design cost: ${price}</h2>
                            {/* <h2 className="text-lg ">{full_description}</h2> */}
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
    );
};

export default InviteCardDetails;
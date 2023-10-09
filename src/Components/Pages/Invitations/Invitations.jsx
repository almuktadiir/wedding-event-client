
import InviteCard from "./InviteCard";
import { useEffect, useState } from "react";


const Invitations = () => {
    
    const [inviteInfo, setInviteInfo] = useState([])
    

    useEffect(()=> {
        fetch('/cakeInvite.json')
        .then(res => res.json())
        .then(data => setInviteInfo(data))
    }, [])

    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="font-wedding text-center text-5xl font-semibold mt-20 text-[#ee62a8ff]">Invitations Design</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    inviteInfo?.map(inviteCard => <InviteCard
                    key={inviteCard.id}
                    inviteCard={inviteCard}
                    ></InviteCard>)
                }
            </div>
        </div>
    );
};

export default Invitations;
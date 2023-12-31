import { useEffect, useState } from "react";
import WedCakesCard from "./WedCakesCard";


const WedCakes = () => {
    const [wedcakes, setWedCakes] = useState([]);

    useEffect(()=> {
        fetch('/wedcake.json')
        .then(res => res.json())
        .then(data => setWedCakes(data))
    },[])



    return (
        <div className="mt-24 mb-20 max-w-7xl mx-auto" data-aos="zoom-out-left" data-aos-duration="2000">
            <h2 className="font-wedding text-center text-5xl font-semibold mb-10 text-[#ee62a8ff]">Wedding cakes </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    wedcakes.map(cakesData => <WedCakesCard
                    key={cakesData.id}
                    cakesData={cakesData}
                    ></WedCakesCard>)
                }
            </div>
        </div>
    );
};

export default WedCakes;
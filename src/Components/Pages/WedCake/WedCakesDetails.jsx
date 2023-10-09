import { useLoaderData, useParams } from "react-router-dom";


const WedCakesDetails = () => {
    const cakeDetail = useLoaderData();
    const {id} = useParams();

    const findCake = cakeDetail.find(singleCake => singleCake.id === id);
    const {price, cake_title, cake_image, cake_details} = findCake;


    return (
        <div className="max-w-7xl mx-auto mt-5">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="col-span-3">
                        <img className="w-full h-[30rem] rounded-lg" src={cake_image} alt="" />
                        <div className="my-3 px-6 rounded-lg pb-10 bg-pink-100">
                            <h2 className="text-3xl py-5 font-semibold">{cake_title}</h2>
                            <h2 className="pb-3 text-xl font-medium">Making cost: ${price}</h2>
                            <h2 className="text-lg ">{cake_details}</h2>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
    );
};

export default WedCakesDetails;
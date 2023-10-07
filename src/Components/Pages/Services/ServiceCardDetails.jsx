import { useLoaderData, useParams } from "react-router-dom";



const ServiceCardDetails = () => {
    const services = useLoaderData();
    const { id } = useParams();
    console.log(id);

    const findDetail = services?.find(singleService => singleService.id === +id);
    console.log(findDetail);

    const { title, price, full_description, full_image_url } = findDetail;

    return (
        <>
            <div className="max-w-7xl mx-auto mt-5">
                <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-3">
                        <img className="w-full h-[30rem] rounded-lg" src={full_image_url} alt="" />
                        <div className="my-3 px-6 rounded-lg pb-10 bg-pink-100">
                            <h2 className="text-3xl py-5 font-semibold">{title}</h2>
                            <h2 className="pb-3 text-xl font-medium">Expense cost: $ {price}</h2>
                            <h2 className="text-lg ">{full_description}</h2>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
};

export default ServiceCardDetails;
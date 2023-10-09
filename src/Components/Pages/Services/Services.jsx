import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=> {
        fetch('/wedService.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="mt-28 mb-20" data-aos="fade-in" data-aos-duration="2000">
            <h2 className="font-wedding text-center text-5xl font-semibold mb-10 text-[#ee62a8ff]">Wedding Event Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    services?.map(service => <ServiceCard
                    key={service.id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
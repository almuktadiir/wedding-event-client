

const Team = () => {
    return (
        <>
            <h2 className="font-wedding text-center text-5xl font-semibold mb-10 text-[#ee62a8ff]">Our Team</h2>
            <div className="py-40 bg-pink-100 rounded-xl shadow-lg">
                <div className="flex flex-col mx-auto md:flex-row items-center -space-x-4 justify-center">
                    <img
                        alt="user 1"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        className="relative inline-block h-44 w-44 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />
                    <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-44 w-44 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />
                    <img
                        alt="user 3"
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1288&amp;q=80"
                        className="relative inline-block h-44 w-44 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />
                    <img
                        alt="user 4"
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1287&amp;q=80"
                        className="relative inline-block h-44 w-44 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />
                    <img
                        alt="user 5"
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1760&amp;q=80"
                        className="relative inline-block h-44 w-44 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />
                </div>
                <div className="flex justify-center mt-4 font-semibold text-xl">
                    <div className="hidden lg:flex">
                    <p className="px-14">Roy</p>
                    <p className="px-14">Melisa</p>
                    <p className="px-14">Tessa</p>
                    <p className="px-14">kevin</p>
                    <p className="px-14">John</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;
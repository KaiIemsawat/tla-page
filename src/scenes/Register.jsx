const Register = () => {
    return (
        <div
            className="w-full h-screen overflow-hidden relative px-8"
            name="register"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/3 translate-y-2/4 z-[-1]">
                    <div className="bg-c-blue w-[5000px] h-[1080px] rounded-[220px] rotate-[-8deg] "></div>
                </div>
                <div className="md:max-w-[860px] lg:max-w-[1020px] w-full ">
                    <div className="text-start">
                        <h2 className="text-4xl sm:text-6xl font-semibold text-c-blue underline decoration-c-orange py-2">
                            Join an Info Session
                        </h2>
                    </div>
                    <form className="flex flex-col" action="">
                        <div className="flex flex-col gap-3">
                            <label className=" mt-2 font-semibold text-c-blue text-xl max-w-[64px]">
                                Name&nbsp;
                                <span className="font-bold text-c-orange">
                                    :
                                </span>
                            </label>
                            <input
                                className="border border-c-orange rounded-md p-3 text-c-orange bg-c-white-2 bg-opacity-30 mb-4"
                                type="text"
                                name="name"
                                id=""
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className=" mt-2 font-semibold text-c-blue text-xl max-w-[64px]">
                                Email&nbsp;
                                <span className="font-bold text-c-orange">
                                    :
                                </span>
                            </label>
                            <input
                                className="border border-c-orange rounded-md p-3 text-c-orange bg-c-white-2 bg-opacity-30 mb-4"
                                type="email"
                                name="email"
                                id=""
                            />
                        </div>
                        <button className="my-6 p-3 bg-c-orange rounded-md duration-500  text-c-white hover:text-c-blue hover:opacity-80">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Register;

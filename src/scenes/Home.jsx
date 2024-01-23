const Home = () => {
    return (
        <div className="w-full h-screen overflow-x-hidden" name="home">
            <div className="relative">
                <div className="bg-c-blue w-[5000px] h-[1400px] rounded-[220px] rotate-[-8deg] z-[-1] absolute -top-[920px] md:-left-16 -left-32"></div>
                <div className="md:max-w-[860px] lg:max-w-[1020px] px-8 mx-auto flex flex-col pt-[180px] h-full text-c-white z-1">
                    <p className="text-4xl sm:text-6xl font-bold py-2">
                        Improve Your Skills.
                    </p>
                    <p className="text-4xl sm:text-6xl font-bold py-2">
                        Transform Your Career.
                    </p>
                    <p className="text-4xl sm:text-6xl font-bold py-2">
                        Become a{" "}
                        <span className="underline decoration-c-orange">
                            Programer.
                        </span>
                    </p>
                    <p className="text-md font-semibold py-6 text-c-white-2">
                        At the end of our programs, you will be a strong
                        Software Engineer and ready to make your career in IT
                    </p>
                    <div>
                        <button
                            href="#"
                            className="px-3 py-2 border-2 border-c-orange min-w-[246px]"
                        >
                            Register for Info Session
                        </button>
                        <button
                            href="#"
                            className="px-3 py-2 border-2 border-c-orange bg-c-orange min-w-[246px]"
                        >
                            Find Your Program
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;

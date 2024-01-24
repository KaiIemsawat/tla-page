const About = () => {
    return (
        <div className="w-full h-screen text-c-blue px-8 my-16" name="about">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="md:max-w-[860px] lg:max-w-[1020px] w-full md:grid md:grid-cols-2 gap-4">
                    <div className="sm:text-end">
                        <h2 className="text-4xl sm:text-6xl font-semibold text-c-blue underline decoration-c-orange py-4 md:py-0">
                            About Us
                        </h2>
                    </div>
                    <div></div>
                    <div className="bg-c-blue w-full h-[128px] sm:h-[240px] md:h-full flex items-center justify-center rounded-md">
                        <p className="text-c-white">image here</p>
                    </div>

                    <div className=" text-lg text-c-blue py-4 md:py-0">
                        <p className="pb-6">
                            We are a coding school based on VA. Our goal is to
                            give a chance to start a career in IT and to open
                            new opportunities for people with no IT or coding
                            background.
                        </p>
                        <p>We have two courses:</p>
                        <p>1. Test Autoamtion Engineer/SDET course</p>
                        <p>2. Full-Stack Developer course</p>
                        <button className="my-6 px-6 py-2 bg-c-orange rounded-md hover:text-c-blue hover:opacity-80 duration-500 text-c-white">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;

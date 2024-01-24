const Programs = () => {
    return (
        <div className="w-full h-screen text-c-blue px-8 my-16" name="programs">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="md:max-w-[860px] lg:max-w-[1020px] w-full md:grid md:grid-cols-2 gap-4">
                    <div></div>
                    <div className="text-end md:text-start">
                        <h2 className="text-4xl sm:text-6xl font-semibold text-c-blue underline decoration-c-orange md:py-0">
                            Our Programs
                        </h2>
                    </div>

                    <div className=" text-lg text-c-blue py-4 md:py-0 text-end">
                        <h3 className="text-3xl font-semibold pb-6">
                            Test Automation Engineer | SDET
                        </h3>
                        <ul className="grid grid-cols-2">
                            <li className=" border-r-4 border-c-orange pr-2 my-1">
                                Java
                            </li>
                            <li className=" border-r-4 border-c-orange pr-2 my-1">
                                Part-time
                            </li>
                            <li className=" border-r-4 border-c-orange pr-2 my-1">
                                Selenium
                            </li>
                            <li className=" border-r-4 border-c-orange pr-2 my-1">
                                Api
                            </li>
                            <li className=" border-r-4 border-c-orange pr-2 my-1">
                                SQL
                            </li>
                            <li className=" border-r-4 border-c-orange pr-2 my-1">
                                JMeter
                            </li>
                            <li className=" border-r-4 border-c-orange pr-2 my-1">
                                No experience required
                            </li>
                            <li className=" border-r-4 border-c-orange pr-2 my-1">
                                7 Months
                            </li>
                        </ul>
                        <div className="text-end">
                            <button className="mt-2 px-6 py-2 bg-c-orange rounded-md hover:text-c-blue hover:opacity-80 duration-500 text-c-white">
                                Course Details
                            </button>
                        </div>
                    </div>
                    <div className="bg-c-blue w-full h-[128px] sm:h-[240px] md:h-full flex items-center justify-center rounded-md">
                        <p className="text-c-white">image here</p>
                    </div>
                    <div></div>
                    <div className="text-center md:text-start pt-3 md:pt-0">
                        <p className="font-light">
                            " When today is over, it will never come back "
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Programs;

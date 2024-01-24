const Curriculum = () => {
    return (
        <div className="w-full h-screen text-c-blue px-8 my-16" name="about">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="md:max-w-[860px] lg:max-w-[1020px] w-full lg:grid lg:grid-cols-2 gap-4">
                    <div className="sm:text-end flex flex-col justify-end">
                        <h2 className="text-4xl sm:text-6xl font-semibold text-c-blue underline decoration-c-orange py-4">
                            Our Curriculum
                        </h2>
                    </div>
                    <div></div>
                    <div className="bg-c-blue w-full h-[128px] sm:h-[240px] md:h-full flex items-center justify-center rounded-md sm:mb-4">
                        <p className="text-c-white">image here</p>
                    </div>

                    <div className=" text-lg text-c-blue py-4 md:py-0">
                        <p className="pb-6">
                            Our curriculum is heavily based on practices and
                            projects.
                        </p>
                        <p className="text-sm">
                            All our instructors are working professionals in the
                            field of programming and IT. We regularly update our
                            curriculum to ensure it reflects the most up-to-date
                            and industry relevant material available. Students
                            will work with the latest, most in-demand tools and
                            technologies in order to gain practical industry
                            knowledge they can use in the field the moment they
                            graduate. As one of the most rapidly expanding
                            industries today, IT programming skills are in high
                            demand – opening up students to a wealth of new and
                            exciting career opportunities.
                        </p>

                        <button className="mt-6 px-6 py-2 bg-c-orange rounded-md shadow-sm shadow-c-orange hover:shadow-lg hover:shadow-c-orange duration-500 text-c-white">
                            Join Now
                        </button>
                    </div>
                </div>
                <div className="md:max-w-[860px] lg:max-w-[1020px] w-full mt-4">
                    <div className="flex justify-between">
                        <div className="md:w-[240px] lg:w-[320px] md:h-[150px]  bg-c-white-2 rounded-md"></div>
                        <div className="md:w-[240px] lg:w-[320px] md:h-[150px]  bg-c-white-2 rounded-md"></div>
                        <div className="md:w-[240px] lg:w-[320px] md:h-[150px]  bg-c-white-2 rounded-md"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Curriculum;

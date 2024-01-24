import Comments from "../components/Comments";

const Testimonials = () => {
    return (
        <div className="w-full h-screen text-c-blue px-8 my-16" name="programs">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="md:max-w-[860px] lg:max-w-[1020px] w-full text-end">
                    <h2 className="text-4xl sm:text-6xl font-semibold text-c-blue underline decoration-c-orange py-2">
                        Testimonials
                    </h2>
                    <Comments />
                </div>
            </div>
        </div>
    );
};
export default Testimonials;

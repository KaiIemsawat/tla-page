import { useEffect, useState } from "react";
import Comments from "../components/LgScreenComment";
import LgScreenComment from "../components/LgScreenComment";
import MobileComment from "../components/MobileComment";

const Testimonials = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isScreenLg, setIsScreenLg] = useState(false);
    // console.log(isScreenLg);

    // console.log(screenWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);

            if (window.innerWidth > 1024) {
                setIsScreenLg(true);
            } else {
                setIsScreenLg(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="w-full h-3/5 text-c-blue px-8 my-16" name="programs">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="md:max-w-[860px] lg:max-w-[1020px] w-full text-end">
                    <h2 className="text-4xl sm:text-6xl font-semibold text-c-blue underline decoration-c-orange py-2">
                        Testimonials
                    </h2>
                    {isScreenLg ? <LgScreenComment /> : <MobileComment />}
                </div>
            </div>
        </div>
    );
};
export default Testimonials;

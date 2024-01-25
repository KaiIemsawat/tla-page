import { useEffect, useState } from "react";
import MobileRgister from "../components/MobileRgister";
import LgScreenRegister from "../components/LgScreenRegister";

const Register = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isScreenLg, setIsScreenLg] = useState(false);
    console.log(isScreenLg);

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
        <div
            className="w-full h-screen overflow-hidden relative px-8"
            name="register"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/3 translate-y-2/4 z-[-1]">
                    <div className="bg-c-blue w-[5000px] h-[1080px] rounded-[220px] rotate-[-8deg] "></div>
                </div>

                {isScreenLg ? <LgScreenRegister /> : <MobileRgister />}
                {/*  */}
            </div>
        </div>
    );
};
export default Register;

import { useEffect, useState } from "react";
import MobileRgister from "../components/MobileRgister";
import LgScreenRegister from "../components/LgScreenRegister";

const Register = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isScreenLg, setIsScreenLg] = useState(false);
    const [isScreenShort, setIsScreenShort] = useState(false);
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

    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [isScreenTall, setIsScreenTall] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setScreenHeight(window.innerHeight);

            if (window.innerHeight > 900) {
                setIsScreenTall(true);
            } else {
                setIsScreenTall(false);
            }

            if (window.innerHeight < 650) {
                setIsScreenShort(true);
            } else {
                setIsScreenShort(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            className={`${
                isScreenShort ? "pb-96" : ""
            } w-full h-screen overflow-hidden relative px-8`}
            name="register"
        >
            <div
                className={`${
                    isScreenTall ? "h-[900px]" : "h-full"
                } flex flex-col justify-center items-center w-full `}
            >
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

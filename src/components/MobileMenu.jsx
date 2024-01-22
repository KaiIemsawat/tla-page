import Hamburger from "../assets/icons/Hamburger";
import X from "../assets/icons/X";
import { useState } from "react";

const MobileMenu = () => {
    const [isBurger, setIsBurger] = useState(false);

    const handleBurger = () => {
        setIsBurger(!isBurger);
    };
    return (
        <>
            {" "}
            {/* Mobile Menu */}
            {/* Hamburger */}
            <div
                className="md:hidden z-10 text-c-orange"
                onClick={handleBurger}
            >
                {!isBurger ? <Hamburger /> : <X />}
            </div>
            {/* Menu */}
            <ul
                className={
                    isBurger
                        ? "absolute top-0 left-0 w-full h-screen bg-c-blue flex flex-col justify-center items-center text-2xl font-semibold text-c-white bg-opacity-90"
                        : "hidden"
                }
            >
                <li className="py-4">Home</li>
                <li className="py-4">Our Program</li>
                <li className="py-4">Contact Us</li>
                <li className="py-4">Careers</li>
                <li className="py-4">Blog</li>
                <li className="py-4">Referral Program</li>
                <li className="py-4">About Us</li>
            </ul>
        </>
    );
};
export default MobileMenu;

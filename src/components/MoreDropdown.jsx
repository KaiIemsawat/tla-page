import { useState } from "react";
import ArrowDown from "../assets/icons/ArrowDown";
import ArrowUp from "../assets/icons/ArrowUp";

const MoreDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = ["Careers", "Blog", "Referral&nbsp;Program", "About Us"];
    return (
        <div className="flex items-center relative flex-col">
            <button
                className="flex items-center px-3"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                More&nbsp;
                {!isOpen ? <ArrowDown /> : <ArrowUp />}
            </button>
            {isOpen && (
                <div
                    className="bg-c-white absolute top-10 rounded-md pb-2"
                    onMouseLeave={() => setIsOpen(false)}
                >
                    {menuItems.map((item, index) => (
                        <div
                            className="py-1 px-4 text-center hover:bg-[#ffffff] duration-500"
                            key={index}
                        >
                            <p dangerouslySetInnerHTML={{ __html: item }} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default MoreDropdown;

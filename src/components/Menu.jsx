import MoreDropdown from "./MoreDropdown";

import MobileMenu from "./MobileMenu";

const Menu = () => {
    return (
        <div className="fixed w-full h-[64px] flex justify-between items-center bg-c-white px-4">
            {/* Top Menu */}
            <img
                src="https://d9hhrg4mnvzow.cloudfront.net/www.techleadacademy.io/23561fc5-tech-lead-logo.svg"
                alt="main-logo"
            />
            <div>
                <ul className="hidden md:flex md:items-center">
                    <li className="px-3 py-5 hover:bg-[#ffffff] duration-500">
                        Home
                    </li>
                    <li className="px-3 py-5 hover:bg-[#ffffff] duration-500">
                        Our Programs
                    </li>
                    <li className="px-3 py-5 hover:bg-[#ffffff] duration-500">
                        Contact Us
                    </li>
                    <li className="py-5 hover:bg-[#ffffff] duration-500">
                        <MoreDropdown />
                    </li>
                    <li className="px-3 py-5 ">
                        <button className="bg-c-orange px-3 py-2 rounded-lg shadow-sm shadow-c-orange hover:shadow-c-orange hover:shadow-lg text-[#ffffff] duration-500">
                            Apply Now
                        </button>
                    </li>
                </ul>
            </div>

            {/* Mobile */}
            <MobileMenu />
        </div>
    );
};
export default Menu;

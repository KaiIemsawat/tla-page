import MoreDropdown from "./MoreDropdown";
import { Link as Scroll } from "react-scroll";

const Navbar = () => {
    return (
        <>
            <img
                src="https://d9hhrg4mnvzow.cloudfront.net/www.techleadacademy.io/23561fc5-tech-lead-logo.svg"
                alt="main-logo"
            />
            <div>
                <ul className="hidden md:flex md:items-center">
                    <li className="cursor-pointer px-3 py-5 font-semibold hover:bg-[#ffffff] duration-500">
                        <Scroll to="home" smooth duration={500}>
                            Home
                        </Scroll>
                    </li>
                    <li className="cursor-pointer px-3 py-5 font-semibold hover:bg-[#ffffff] duration-500">
                        <Scroll to="programs" smooth duration={500}>
                            Our Programs
                        </Scroll>
                    </li>
                    <li className="cursor-pointer px-3 py-5 font-semibold hover:bg-[#ffffff] duration-500">
                        Contact Us
                    </li>
                    <li className="cursor-pointer py-5 font-semibold hover:bg-[#ffffff] duration-500">
                        <MoreDropdown />
                    </li>
                    <li className="px-3 py-5 ">
                        <button className="bg-c-orange px-3 py-2 font-semibold rounded-lg  text-[#ffffff] duration-500">
                            Apply Now
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default Navbar;

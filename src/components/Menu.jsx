import MoreDropdown from "./MoreDropdown";

import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

const Menu = () => {
    return (
        <div className="fixed w-full h-[64px] flex justify-between items-center bg-c-white px-4">
            {/* Top Menu */}
            <Navbar />

            {/* Mobile */}
            <MobileMenu />
        </div>
    );
};
export default Menu;

import Banner from "./Banner";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <>
            <div className="bg-[#0A1019]">
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
        </>
    );
};

export default Header;
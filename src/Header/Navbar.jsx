import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="xl:mx-36 mx-2 relative z-30 bg-[#101721] flex items-center justify-between">
            <div className="flex items-center">
                <img className="w-12" src="https://i.ibb.co/NNR2kK3/Logo.png" alt="" />
                <span className="pl-3 text-xl">Meherab</span>
            </div>
            <div className="xl:ml-0 ml-5">
                <ul>
                    <li className="inline mr-7 text-xs"><NavLink className='hover:text-[#6CEAA7]' to='/'>HOME</NavLink></li>
                    <li className="inline mr-7 text-xs"><NavLink className='hover:text-[#6CEAA7]'>ABOUT</NavLink></li>
                    <li className="inline mr-7 text-xs"><NavLink className='hover:text-[#6CEAA7]'>SERVICES</NavLink></li>
                    <li className="inline mr-7 text-xs"><NavLink  className='hover:text-[#6CEAA7]'>PROJECTS</NavLink></li>
                    <li className="inline mr-7 text-xs"><NavLink className='hover:text-[#6CEAA7]'>BLOG</NavLink></li>
                    <li className="inline mr-7 text-xs"><NavLink className='hover:text-[#6CEAA7]'>CONTACTS</NavLink></li>
                </ul>
            </div>
            <div className="flex items-center">
                <button>
                <FaBars className="text-5xl bg-[#6CEAA7] text-black p-3" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
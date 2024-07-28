import { FiPhone } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
    return (
        <div className="py-24 mx-4 xl:mx-36 grid sm:grid-cols-2 xl:flex xl:justify-between">
            <div className="flex items-center">
                <IoLocationOutline className="text-8xl text-black p-4 rounded-full bg-[#6CEAA7]" />
                <div className="ml-4">
                    <h5 className="text-lg mb-2">Address</h5>
                    <p className="text-sm text-[#a2a2a2]">2118 Thornridge Cir. Syracuse, <br />
                        Connecticut 35624</p>
                </div>
            </div>
            <div className="flex items-center">
                <FiPhone className="text-8xl text-black px-0 p-5 rounded-full bg-[#6CEAA7]" />
                <div className="ml-4">
                    <h5 className="text-lg mb-2">Lets talk us</h5>
                    <p className="text-sm text-[#a2a2a2]">(603) 555-0123 <br />
                        (603) 555-0123</p>
                </div>
            </div>
            <div className="flex items-center xl:mt-0 mt-7 xl:col-span-1 col-span-2 xl:mx-0 mx-auto">
                <HiOutlineMailOpen className="text-8xl px-0 text-black p-5 rounded-full bg-[#6CEAA7]" />
                <div className="ml-4">
                    <h5 className="text-lg mb-2">Send us email</h5>
                    <p className="text-sm text-[#a2a2a2]">deanna.curtis@example.com <br />
                        curtis@example.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
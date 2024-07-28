import { FaStar } from "react-icons/fa6";

const Testimonial = () => {
    return (
        <div className="py-12 mx-4 xl:mx-36">
            <div className="text-center">
                <p className="text-[#6CEAA7]">CLIENT REVIEW</p>
                <h3 className="text-3xl font-semibold">My testomonial</h3>
            </div>
            <div className="mt-24 grid grid-cols-2 gap-12">
                <div className="border-2 border-[#353F4C] relative">
                    <img className="rounded-full w-20 absolute -top-10 right-9" src="https://i.ibb.co/RN0DGM2/face1.png" alt="" />
                    <div className="p-7">
                        <div className="flex -mt-2 mb-4">
                            <FaStar className="text-[#F9B737] pr-2 text-2xl" />
                            <FaStar className="text-[#F9B737] pr-2 text-2xl" />
                            <FaStar className="text-[#F9B737] pr-2 text-2xl" />
                            <FaStar className="text-[#F9B737] pr-2 text-2xl" />
                            <FaStar className="text-[#F9B737] pr-2 text-2xl" />
                        </div>
                        <h4>Alexander Walker</h4>
                        <p className="text-[#a2a2a2] pt-1 pb-3 text-sm">GRAPHIC DESIGNER</p>
                        <p className="text-[#a2a2a2] text-xs">Beautiful minimalist design and great, fast response with <br /> support. Highly recommend. Thanks Marketify!</p>
                        
                    </div>
                </div>
                <div className="border-2 border-[#353F4C] relative">
                    <img className="rounded-full w-20 absolute -top-10 right-9" src="https://i.ibb.co/DbNs7Sy/face.png" alt="" />
                    <div className="p-7">
                        <div className="flex -mt-2 mb-4">
                            <FaStar className="text-[#F9B737] pr-2 text-2xl" />
                            <FaStar className="text-[#F9B737] pr-2 text-2xl" />
                            <FaStar className="text-[#F9B737] pr-2 text-2xl" />
                            <FaStar className="text-[#F9B737] pr-2 text-2xl" />
                            <FaStar className="text-[#F9B737] pr-2 text-2xl" />
                        </div>
                        <h4>Alexander Walker</h4>
                        <p className="text-[#a2a2a2] pt-1 pb-3 text-sm">GRAPHIC DESIGNER</p>
                        <p className="text-[#a2a2a2] text-xs">Beautiful minimalist design and great, fast response with <br /> support. Highly recommend. Thanks Marketify!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
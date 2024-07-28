import { FaPlay } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";

const Banner = () => {
    return (
        <div className="xl:px-36 px-2 py-[106px] flex overflow-hidden items-center">

            <div className="w-1/2 z-40">
                <h2 className="text-3xl font-bold">Hay, It's Meherab Hossean! <br />WEB <span className="text-[#6CEAA7]">DEVELOPER</span></h2>
                <p className="text-sm text-[#A2A2A2] my-5 leading-5">I'm a passionate UI/UX designer with a mission to create delightful and <br />intuitive digital experiences. With a strong foundation in design principles <br /> and a keen eye for detail, I specialize in translating complex ideas into user- <br />friendly interfaces that captivate and engage.</p>
                <div className="mt-9 flex items-center">
                    <button className="btn bg-[#6CEAA7] text-sm mr-3 border-none rounded-none px-7">Download CV <HiDownload className="text-black" /></button>
                    <div className="z-40 relative">
                        <span className="pl-3 text-sm flex items-center z-30 relative"><button className="p-[12px] rounded-full bg-[#6CEAA7] mr-2 z-30"><FaPlay className="text-2xl text-center pl-1 text-black" /></button> Watch The Video</span>
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-full xl:ml-0 ml-12 -mt-12">
                <img className="absolute rotate-[2deg] xl:rotate-[14deg] -top-36 h-[1000px] xl:h-[850px] w-[480px] right-6 xl:right-24 z-20" src="https://i.ibb.co/k62VgxZ/Bg.png" alt="" />
                <div className="flex justify-end z-30 relative mr-16">
                    <div className="relative">
                        <img className="w-80" src="https://i.ibb.co/r3FWLcp/Line-image.png" alt="" />
                        <img className="absolute xl:top-5 top-[14px] xl:left-6 left-[18px] w-[230px] xl:w-[275px]" src="https://i.ibb.co/sRFs4Zz/Image.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import { HiDownload } from "react-icons/hi";
const About = () => {
    return (
        <div className="xl:mx-36 mx-4 pt-16 flex">
            <div className="xl:w-[600px] w-[400px]">
                <p className="text-[#6CEAA7]">ABOUT ME</p>
                <h3 className="text-3xl font-bold text-right pb-5 xl:pb-20">Transforming visions into <br />exceptional portfolios</h3>
                <div className="flex ">
                    <div className="w-[85px] mt-2 h-[1px] bg-white"></div>
                    <p className="text-sm ml-6 text-[#a2a2a2]">Nemo design enim ipsam voluptatem quim voluptas sit <br /> aspernatur aut odit auting fugit sed thisnquia <br /> consequuntur magni dolores eos designer heresm qui <br /> ratione</p>
                </div>
                <div className="mt-12 ml-[104px]">
                    <button className="btn bg-[#6CEAA7] text-sm mr-3 border-none rounded-none px-7">Download CV <HiDownload className="text-black" /></button>
                </div>
            </div>
            <div className=" ml-auto mt-2 relative">
                <div className="w-[200px] absolute right-0 h-[250px]  bg-[#6CEAA7] ml-auto"></div>
                <img className="mt-3 relative mr-3 w-64" src="https://i.ibb.co/sRcHR8r/Image1.png" alt="" />
                <div className="bg-[#232323] w-52 left-6 flex items-center p-3 absolute -bottom-3">
                    <img className="w-12" src="https://i.ibb.co/bvxgPJy/Group-8.png" alt="" />
                    <div className="ml-3">
                        <h6 className="text-sm">Daily Activity</h6>
                        <p className="text-xs text-[#a2a2a2]">Loream is ispam</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
import { CgProfile } from "react-icons/cg";
import { FaComments, FaPlus } from "react-icons/fa6";

const Blog = () => {
    return (
        <div className="py-6 mx-4 xl:mx-36">
            <div className="flex justify-between items-end">
                <div>
                    <p className="text-[#6CEAA7]">MY BLOG</p>
                    <h3 className="text-3xl font-semibold">Unlocking the potential of your <br /> personal brand</h3>
                </div>
                <button className="btn bg-[#6CEAA7] border-none rounded-none px-7">More Blogs <FaPlus /></button>
            </div>
            <div className="flex justify-between gap-x-3 xl:gap-x-10 mt-12">
                <div className="">
                    <img className="w-96" src="https://i.ibb.co/vHyMb7P/blog.png" alt="" />
                    <div className="relative w-[90%] mx-auto p-1 xl:px-5 -top-12 bg-[#0A1019]">
                        <p className="bg-[#6CEAA7] absolute -top-5 left-[10px] xl:left-[68px] py-3 px-4 text-black font-medium">October 18, 2023</p>
                        <div className="flex xl:flex-row flex-col justify-between items-center mx-4 text-xs pt-12">
                            <p className="text-sm text-[#a2a2a2]"><CgProfile className="text-[#6CEAA7] mr-1 -mt-1 inline text-lg" />By Omi</p>
                            <p className="text-sm text-[#a2a2a2]"><FaComments className="text-[#6CEAA7] mr-1 -mt-1 inline text-lg" />Comment (0)</p>
                        </div>
                        <p className="text-lg text-center py-6">The standard personal My portfolio</p>
                    </div>
                </div>
                <div className="">
                    <img className="w-96" src="https://i.ibb.co/HF5Vfd6/blog1.png" alt="" />
                    <div className="relative w-[90%] mx-auto p-1 xl:px-5 -top-12 bg-[#0A1019]">
                        <p className="bg-[#6CEAA7] absolute -top-5 left-[10px] xl:left-[68px] py-3 px-4 text-black font-medium">October 18, 2023</p>
                        <div className="flex xl:flex-row flex-col justify-between items-center mx-4 text-xs pt-12">
                            <p className="text-sm text-[#a2a2a2]"><CgProfile className="text-[#6CEAA7] mr-1 -mt-1 inline text-lg" />By Omi</p>
                            <p className="text-sm text-[#a2a2a2]"><FaComments className="text-[#6CEAA7] mr-1 -mt-1 inline text-lg" />Comment (0)</p>
                        </div>
                        <p className="text-lg text-center py-6">The standard personal My portfolio</p>
                    </div>
                </div>
                <div className="">
                    <img className="w-96" src="https://i.ibb.co/DfH4nrT/blog2.png" alt="" />
                    <div className="relative w-[90%] mx-auto p-1 xl:px-5 -top-12 bg-[#0A1019]">
                        <p className="bg-[#6CEAA7] absolute -top-5 left-[10px] xl:left-[68px] py-3 px-4 text-black font-medium">October 18, 2023</p>
                        <div className="flex xl:flex-row flex-col justify-between items-center mx-4 text-xs pt-12">
                            <p className="text-sm text-[#a2a2a2]"><CgProfile className="text-[#6CEAA7] mr-1 -mt-1 inline text-lg" />By Omi</p>
                            <p className="text-sm text-[#a2a2a2]"><FaComments className="text-[#6CEAA7] mr-1 -mt-1 inline text-lg" />Comment (0)</p>
                        </div>
                        <p className="text-lg text-center py-6">The standard personal My portfolio</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
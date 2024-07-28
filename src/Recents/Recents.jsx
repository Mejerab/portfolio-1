import './Recent.css'
const Recents = () => {
    return (
        <div className="pt-20 py-12 mx-4 xl:mx-36">
            <p className="text-[#6CEAA7]">MY RECENT PORTFOLIO</p>
            <h3 className="text-3xl mt-3 font-semibold">Elevate your brand to new <br />
                heights with our portfolio expertise</h3>
            <div className="mt-7">
                <div className="flex gap-x-7">
                    <button className='fir w-[70%] h-[300px] xl:h-[440px] relative transition-transform'>
                        <img className="h-[300px] xl:h-[440px] w-full" src="https://i.ibb.co/4VxnSPJ/1.png" alt="" />
                        <div className="first absolute left-0 pl-8 bottom-8 bg-[#00000099] w-full hidden">
                            <h4 className='text-left'>Sheet Metal Bending</h4>
                            <p className="flex items-center"><div className="h-[2px] w-[30px] bg-[#6CEAA7] mr-1"></div>Youtube</p>
                        </div>
                    </button>
                    <button className='sec relative w-[30%] h-[300px] xl:h-[440px]'>
                        <img className="w-full h-[300px] xl:h-[440px]" src="https://i.ibb.co/xXYFYBQ/image-1.png" alt="" />
                        <div className="second absolute left-0 pl-3 xl:pl-8 bottom-8 bg-[#00000099] w-full hidden">
                            <h4 className='text-left'>Sheet Metal Bending</h4>
                            <p className="flex items-center"><div className="h-[2px] w-[30px] bg-[#6CEAA7] mr-1"></div>Youtube</p>
                        </div>
                    </button>
                </div>
                <div className="flex -ml-1 gap-x-7 mt-7">
                    <button className='thir w-[49%] h-[300px] xl:h-[450px] relative'>
                        <img className="w-full h-[300px] xl:h-[450px]" src="https://i.ibb.co/gM12qLb/image-4.png" alt="" />
                        <div className="third absolute left-0 pl-8 bottom-8 bg-[#00000099] w-full hidden">
                            <h4 className='text-left'>Sheet Metal Bending</h4>
                            <p className="flex items-center"><div className="h-[2px] w-[30px] bg-[#6CEAA7] mr-1"></div>Youtube</p>
                        </div>
                    </button>
                    <button className='four w-[49%] h-[300px] xl:h-[450px] relative'>
                        <img className="w-full h-[300px] xl:h-[450px]" src="https://i.ibb.co/vYMyRHn/image-5.png" alt="" />
                        <div className="fourth absolute left-0 pl-8 bottom-8 bg-[#00000099] w-full hidden">
                            <h4 className='text-left'>Sheet Metal Bending</h4>
                            <p className="flex items-center"><div className="h-[2px] w-[30px] bg-[#6CEAA7] mr-1"></div>Youtube</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Recents;
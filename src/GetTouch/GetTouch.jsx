
const GetTouch = () => {
    return (
        <div className="xl:mx-36 mx-4 py-32 grid grid-cols-2 gap-x-4 items-center">
            <div className="pt-0 xl:pt-12 ">
                <h3 className="text-5xl leading-[60px] font-semibold"><span className="text-8xl">Design</span> and <br />
                    Innovation</h3>
                <p className="text-[#a2a2a2] text-sm py-6">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit auting <br /> fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione voluptatem sequi nesciuNeque porro quisquam est, oursqui ipsum quia dolor sit amet consectetur, adipisci velit, sed quia non numquam</p>
                <div className="flex">
                    <div className="bg-[#0A1019] text-center py-7 px-8 xl:px-12 w-fit mr-2 xl:mr-6">
                        <img className="mx-auto " src="https://i.ibb.co/BtcYsMM/Clip-path-group.png" alt="" />
                        <h3 className="text-4xl font-bold mt-5">10K+</h3>
                        <p className="text-[#a2a2a2] text-sm">Complete Project</p>
                    </div>
                    <div className="bg-[#0A1019] text-center py-7 px-8 xl:px-[62px] w-fit ml-2 xl:ml-6">
                        <img className="mx-auto w-14" src="https://i.ibb.co/jrY11zv/Clip-path-group-1.png" alt="" />
                        <h3 className="text-4xl font-bold mt-5">800+</h3>
                        <p className="text-[#a2a2a2] text-sm">Client review</p>
                    </div>
                </div>
            </div>
            <div className=" bg-[#0A1019] p-[46px] xl:p-10">
                <h3 className="text-3xl font-medium">GET TOUCH ME?</h3>
                <p className="text-sm text-[#a2a2a2] py-3">For your car we will do everything advice design in us repairs <br /> and maintenance We are the some preferred.</p>
                <form className="my-2">
                    <input type="text" name="name" className="p-3 w-full bg-transparent border-[#6CEAA7] border text-sm py-4 mb-4" placeholder="Your name"/>
                    <input type="email" name="email" className="p-3 w-full bg-transparent border-[#6CEAA7] border text-sm py-4 mb-4" placeholder="Your email"/>
                    <input type="text" name="name" className="p-3 w-full bg-transparent border-[#6CEAA7] border text-sm py-4" placeholder="Phone number"/>
                    <textarea name="message" rows={4} className="w-full bg-transparent border-[#6CEAA7] border text-sm mt-4 p-3" placeholder="Message"></textarea>
                    <button className="bg-[#6CEAA7] btn px-7 mt-5 border-none rounded-none py-3">Submit now</button>
                </form>
            </div>
        </div>
    );
};

export default GetTouch;
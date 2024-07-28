
const Newsletter = () => {
    return (
        <div className="bg-[url(https://i.ibb.co/XbW2z7f/Bg1.png)] bg-cover py-24 px-4 xl:px-36 text-center">
            <h4 className="text-2xl font-semibold pb-8">SUBSCRIBE MY NEWSLETTER</h4>
            <form className="relative">
                <input type="email" className="bg-transparent w-[60%] xl:w-1/2 border border-[#6CEAA7] p-3 py-5 text-sm" placeholder="Enter your email" />
                <button className="btn border-none bg-[#6CEAA7] rounded-none absolute right-[145px] xl:right-[273px] top-[7px] px-7">Notify now</button>
            </form>
        </div>
    );
};

export default Newsletter;
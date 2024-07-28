import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import GetTouch from "../GetTouch/GetTouch";
import Header from "../Header/Header";
import Newsletter from "../Newsletter/Newsletter";
import Recents from "../Recents/Recents";
import Skill from "../Skill/Skill";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <>
            <Header></Header>
            <div className="bg-black">
                <div className="z-40 bg-black relative xl:px-36 px-4">
                    <div className="text-center pt-16 pb-12">
                        <p className="text-[#6CEAA7]">MY SERVICE</p>
                        <h3 className="text-3xl font-bold">Crafting stories through <br /> Development and innovation</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-x-7 mt-16">
                        <div className="border-[#191919] text-center border-2">
                            <img className="mx-auto relative -top-12" src="https://i.ibb.co/93fRQpm/Vector.png" alt="" />
                            <h4 className="">WEBSITE DESIGN</h4>
                            <p className="text-sm p-7 text-[#A2A2A2]">Nemo design enim ipsam voluptatem <br /> quim voluptas sit aspernaturaut odit <br /> auting fugit sed thisnquia consequuntur <br /> magni doloreseos designer heresm qui</p>
                        </div>
                        <div className="border-[#191919] text-center border-2">
                            <img className="mx-auto relative -top-6" src="https://i.ibb.co/kG8Qy5J/Vector-1.png" alt="" />
                            <h4 className="mt-6 ">WEBSITE FRONTEND</h4>
                            <p className="text-sm p-7 text-[#A2A2A2]">Nemo design enim ipsam voluptatem <br /> quim voluptas sit aspernaturaut odit <br /> auting fugit sed thisnquia consequuntur <br /> magni doloreseos designer heresm qui</p>
                        </div>
                        <div className="border-[#191919] text-center border-2">
                            <img className="mx-auto relative -top-9" src="https://i.ibb.co/42NNvZ9/Vector-2.png" alt="" />
                            <h4 className="mt-5 ">WEBSITE BACKEND</h4>
                            <p className="text-sm p-7 text-[#A2A2A2]">Nemo design enim ipsam voluptatem <br /> quim voluptas sit aspernaturaut odit <br /> auting fugit sed thisnquia consequuntur <br /> magni doloreseos designer heresm qui</p>
                        </div>
                    </div>
                </div>
                <About></About>
                <GetTouch></GetTouch>
                <Skill></Skill>
                <Recents></Recents>
                <Testimonial></Testimonial>
                <Blog></Blog>
                <Newsletter></Newsletter>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Home;
import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
function Dashboard () {
    return (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <div className="flex justify-center items-center pt-[100px]">
                <input className="border-2 py-[5px] px-[30px] w-[30%] outline-none rounded-md bg-transparent text-white text-[18px] text-center" type="text" placeholder="Search" />
            </div>
            <section>
                <div className="flex justify-center items-center pt-[100px] flex-col">
                    <div className="flex justify-center items-center">
                        <img className="w-[3%] absolute left-[45%] cursor-pointer" src="/Images/Play (1).png" alt="" />
                        <img className="w-[30%] mr-[40px]" src="/Images/music1.png" alt="" />
                        <img className="w-[3%] h-[10%] cursor-pointer" src="/Images/Love.png" alt="" />
                    </div>
                    <div className="flex justify-left items-center mt-[25px]">
                        <img className="w-[15%]" src="/Images/icon1.png" alt="" />
                        <p className="text-white text-[25px] ml-[30px]">Dira: let me be</p>
                    </div>
                </div>
                <div className="flex justify-center items-center pt-[100px] flex-col">
                    <div className="flex justify-center items-center">
                        <img className="w-[3%] absolute left-[45%] cursor-pointer" src="/Images/Play (1).png" alt="" />
                        <img className="w-[30%] mr-[40px]" src="/Images/music2.png" alt="" />
                        <img className="w-[3%] h-[10%] cursor-pointer" src="/Images/Love.png" alt="" />
                    </div>
                    <div className="flex justify-left items-center mt-[25px]">
                        <img className="w-[10%]" src="/Images/Ellipse 7.png" alt="" />
                        <p className="text-white text-[25px] ml-[30px]">the real man in me: Jax man</p>
                    </div>
                </div>
                <div className="flex justify-center items-center pt-[100px] flex-col">
                    <div className="flex justify-center items-center">
                        <img className="w-[3%] absolute left-[45%] cursor-pointer" src="/Images/Play (1).png" alt="" />
                        <img className="w-[30%] mr-[40px]" src="/Images/music2.png" alt="" />
                        <img className="w-[3%] h-[10%] cursor-pointer" src="/Images/Love.png" alt="" />
                    </div>
                    <div className="flex justify-left items-center mt-[25px]">
                        <img className="w-[10%]" src="/Images/Ellipse 7.png" alt="" />
                        <p className="text-white text-[25px] ml-[30px]">the real man in me: Jax man</p>
                    </div>
                </div>
                <div className="flex justify-center items-center pt-[100px] flex-col">
                    <div className="flex justify-center items-center">
                        <img className="w-[3%] absolute left-[45%] cursor-pointer" src="/Images/Play (1).png" alt="" />
                        <img className="w-[30%] mr-[40px]" src="/Images/music2.png" alt="" />
                        <img className="w-[3%] h-[10%] cursor-pointer" src="/Images/Love.png" alt="" />
                    </div>
                    <div className="flex justify-left items-center mt-[25px]">
                        <img className="w-[10%]" src="/Images/Ellipse 7.png" alt="" />
                        <p className="text-white text-[25px] ml-[30px]">the real man in me: Jax man</p>
                    </div>
                </div>
                <div className="flex justify-center items-center pt-[100px] flex-col">
                    <div className="flex justify-center items-center">
                        <img className="w-[3%] absolute left-[45%] cursor-pointer" src="/Images/Play (1).png" alt="" />
                        <img className="w-[30%] mr-[40px]" src="/Images/music2.png" alt="" />
                        <img className="w-[3%] h-[10%] cursor-pointer" src="/Images/Love.png" alt="" />
                    </div>
                    <div className="flex justify-left items-center mt-[25px]">
                        <img className="w-[10%]" src="/Images/Ellipse 7.png" alt="" />
                        <p className="text-white text-[25px] ml-[30px]">the real man in me: Jax man</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Dashboard
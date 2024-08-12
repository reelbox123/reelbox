import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
function TopChart () {
    return (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <div className="flex justify-center items-center pt-[100px]">
                <input className="border-2 py-[5px] px-[30px] w-[30%] outline-none rounded-md bg-transparent text-white text-[18px] text-center" type="text" placeholder="Search" />
            </div>
            <section className="pl-[300px] pt-[20px] mt-[10px]">
                <div className="pools px-[50px] pt-[10px] pb-[23px]">
                    <div className="flex justify-left items-center">
                        <button className="text-white py-[15px] px-[30px] mr-[90px] text-[20px] bg-transparent border-2 w-[27%] outline-none">TOP 1 HIT</button>
                        <div>
                            <div className="text-white bg-[#D9D9D9] mr-[20px] ml-[80px] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px]">
                                <p>Daily reward</p>
                                <p>0.9231MUS</p>
                                <p>$2.05</p>
                            </div>
                            <div className="text-white bg-[#D9D9D9] ml-[80px] mr-[70px] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px] w-[60%]">
                                <p>Daily reward</p>
                                <p>0.9231MUS</p>
                                <p>$2.05</p>
                            </div>
                        </div>
                        <div className="text-white bg-[#D9D9D9] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px] w-[15%]">
                            <p>Active  listener</p>
                            <p>100K</p>
                        </div>
                    </div>
                    <div className="flex justify-left items-center ml-[20px] mt-[70px]">
                        <img className="w-[2.5%] mr-[20px]" src="/Images/Play (1).png" alt="" />
                        <p className="text-white text-[20px]">The heart is Me</p>
                    </div>
                </div>
            </section>
            <section className="pl-[300px] pt-[20px] mt-[10px] text-white">
                <h2 className="text-white text-[22px] tracking-widest">TOP CHART</h2>
                {/* <div className="grid grid-cols-3 gap-4">
                    <h1>Token  price</h1>
                    <h1>Market caos</h1>
                    <h1>Monthly Listeners</h1>
                </div> */}
                <div className="grid grid-cols-5 gap-4 place-items-center text-[18px] mt-[30px] self-center">
                    <div className="flex justify-center items-center text-white w-[60%]">
                        <h1 className="text-[25px] mr-[10px] font-bold">1</h1>
                        <img src="/Images/Chevron Up.png" alt="" />
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center">
                            <img className="p1 w-[45%] mr-[10px] px-[30px] py-[15px]" src="/Images/Play (1).png" alt="" srcset="" />
                            <h2 className="text-[16px]">All love is blind</h2>
                        </div>
                    </div>
                    <h2>0.32410 btb</h2>
                    <h2>$1.5M</h2>
                    <h2>230k</h2>
                </div>
                <div className="grid grid-cols-5 gap-4 place-items-center text-[18px] mt-[30px] self-center">
                    <div className="flex justify-center items-center text-white w-[60%]">
                        <h1 className="text-[25px] mr-[10px] font-bold">2</h1>
                        <img src="/Images/Chevron Up.png" alt="" />
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center">
                            <img className="p2 w-[45%] mr-[10px] px-[30px] py-[15px]" src="/Images/Play (1).png" alt="" srcset="" />
                            <h2 className="text-[16px]">The demon is strong</h2>
                        </div>
                    </div>
                    <h2>0.92410 btb</h2>
                    <h2>$2.1M</h2>
                    <h2>225k</h2>
                </div>
                <div className="grid grid-cols-5 gap-4 place-items-center text-[18px] mt-[30px] self-center">
                    <div className="flex justify-center items-center text-white w-[60%]">
                        <h1 className="text-[25px] mr-[10px] font-bold">3</h1>
                        <img src="/Images/Chevron Up.png" alt="" />
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center">
                            <img className="p3 w-[45%] mr-[10px] px-[30px] py-[15px]" src="/Images/Play (1).png" alt="" srcset="" />
                            <h2 className="text-[16px]">Always for you</h2>
                        </div>
                    </div>
                    <h2>0.82410 btb</h2>
                    <h2>$1.9M</h2>
                    <h2>220k</h2>
                </div>
                <div className="grid grid-cols-5 gap-4 place-items-center text-[18px] mt-[30px] self-center">
                    <div className="flex justify-center items-center text-white w-[60%]">
                        <h1 className="text-[25px] mr-[10px] font-bold">4</h1>
                        <img src="/Images/Chevron Up.png" alt="" />
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center">
                            <img className="p4 w-[45%] mr-[10px] px-[30px] py-[15px]" src="/Images/Play (1).png" alt="" srcset="" />
                            <h2 className="text-[16px]">Why always me</h2>
                        </div>
                    </div>
                    <h2>0.92410 btb</h2>
                    <h2>$1.3M</h2>
                    <h2>195k</h2>
                </div>
            </section>

        </>
    )

}
export default TopChart
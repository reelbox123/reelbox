import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
function Chart () {
    return (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <section className="pl-[300px] pt-[20px]">
                <div className="flex justify-left items-center mt-[120px]">
                    <img className="w-[5%] mr-[10px]" src="/Images/Live Video On.png" alt="" />
                    <h2 className="text-white text-[20px]">Go live</h2>
                </div>
                <div className="flex justify-end items-center mr-[50px]">
                    <p className="mr-[20px] text-white border-2 border-neutral-800 px-[20px] py-[10px] bg-[#434242] rounded-md">Hi, i am jane i would like collaborate</p>
                    <img className="w-[3%]" src="/Images/Ellipse 12.png" alt="" />
                </div>
                <div className="flex justify-start items-center mr-[50px] mt-[90px]">
                    <img className="w-[3%]" src="/Images/Ellipse 13.png" alt="" />
                    <p className="ml-[20px] text-white border-2 border-neutral-800 px-[20px] py-[10px] bg-[#434242] rounded-md">Hi that great, i would like to collaborate also </p>
                </div>
                <div className="flex justify-center items-center mt-[120px]">
                    <img className="w-[5%] mr-[10px]" src="/Images/Smiling Face With Hearts.png" alt="" />
                    <input className=" w-[50%] px-[20px]  py-[10px] border-2 border-gray-500 rounded-md bg-[#434242] mr-[30px] outline-none text-white" type="text" />
                    <a href="/"><button className='text-white bg-[#DE0808] py-[5px] px-[30px] rounded-md text-[20px]' type='button'>Send</button></a>
                </div>
            </section>
        </>
    )
}
export default Chart
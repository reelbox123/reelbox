import { useState } from "react";

function NavBar () {
    const [nav, setNav] = useState(false);
    const showNav = ()  => {
       setNav(!nav)
    }
    return (
        <>
            <div className="fixed w-full z-[1000] p-[5px] bg-white py-2 shadow-md">
                <nav className="flex justify-between items-center my-[10px] mx-4 h-10 pb-13">
                    <div className="flex justify-between items-center w-[20%] sm:w-[100%] md:w-[100%] lg:w-[20%]">
                        <div className="">
                            <a href="/"><img src="Images/XTREMPAY.png" className="w-[60%] sm:w-[30%] md:w-[20%] lg:w-[60%]" alt=""/></a>
                        </div>
                        <div className="w-0 sm:w-10 md:w-8 lg:w-0" onClick={showNav}>
                           {!nav ? <img className="cursor-pointer" src="/Images/menu.png" alt=""/> : <img className="cursor-pointer" src="/Images/close.png" alt=""/>}
                        </div>
                    </div>
                    <ul className="flex justify-center items-center sm:hidden md:hidden lg:flex">
                        <li className="text-center text-lg"><a className='hover:[#FE9226]  font-medium pr-3' href="/home">Home</a></li>
                        <li className="text-center text-lg"><a className='hover:[#FE9226] font-medium pr-3' href="/moola">Moola</a></li>
                        <li className="text-center text-lg"><a className='hover:[#FE9226] font-medium pr-3' href="/passabi">Passabi</a></li>
                        <li className="text-center text-lg"><a className='hover:[#FE9226] font-medium pr-3' href="/about">About Us</a></li>
                        <li className="text-center text-lg"><a className='hover:[#FE9226] font-medium pr-3' href="/faq">FAQ</a></li>
                    </ul>
                    <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[40%] text-black mt-[76px] h-full bg-white shadow-md ease-in-out duration-500 sm:w-[80%] md:w-[40%] lg:hidden'}>
                        <ul className="uppercase w-full p-12 space-y-6">
                            <li className="text-lg"><a className='hover:[#FE9226]  font-medium' href="/home">Home</a></li>
                            <li className="text-lg"><a className='hover:[#FE9226] font-medium' href="/moola">Moola</a></li>
                            <li className="text-lg"><a className='hover:[#FE9226] font-medium' href="/passabi">Passabi</a></li>
                            <li className="text-lg"><a className='hover:[#FE9226] font-medium' href="/about">About Us</a></li>
                            <li className=""><a className='hover:[#FE9226] font-medium' href="/faq">FAQ</a></li>
                        </ul>
                        <div className="flex p-[10px] ml-12 w-[40%] mr-4 rounded-md text-[13px] border border-yellow-600 border-solid sm:w-[50%]">
                            <button type="button">DOWNLOAD APP</button>
                        </div>
                    </div>
                    <div className="flex p-[10px] rounded-md text-[13px] border border-yellow-600 border-solid sm:hidden md:hidden lg:flex">
                        <button type="button">DOWNLOAD APP</button>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default NavBar
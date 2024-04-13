import { useState } from "react";

function NavBar () {
    const [nav, setNav] = useState(false);
    const showNav = ()  => {
       setNav(!nav)
    }
    return (
        <>
            <div className="fixed w-full z-[1000] p-[5px] py-2 bg-[#E4E4E4] shadow-md">
                <nav className="flex justify-between items-center  my-[10px] mx-20 h-10 pb-13 sm:mx-5 lg:mx-20">
                    <div className="flex justify-between items-center w-[100%] sm:w-[100%] md:w-[100%] lg:w-[20%]">
                        <div className="">
                            <a className="text-[30px] text-black font-medium" href="/">Techie.</a>
                        </div>
                        <div className="w-0 sm:w-7 md:w-8 lg:w-0" onClick={showNav}>
                           {!nav ? <img className="cursor-pointer" src="/Images/menu.png" alt=""/> : <img className="cursor-pointer" src="/Images/close.png" alt=""/>}
                        </div>
                    </div>
                    <ul className="flex justify-center items-center text-[16px] text-uppercase space-x-5 text-black sm:hidden md:hidden lg:flex">
                        <li className="text-center text-md"><a className='hover:text-[#ff014f] pr-3' href="/">Home</a></li>
                        <li className="text-center text-md"><a className='hover:text-[#ff014f]  pr-3' href="#features">Features</a></li>
                        <li className="text-center text-md"><a className='hover:text-[#ff014f] pr-3' href="#skills">Skills</a></li>
                        <li className="text-center text-md"><a className='hover:text-[#ff014f] pr-3' href="#portfolio">Projects</a></li>
                        <li className="text-center text-md"><a className='hover:text-[#ff014f] pr-3' href="#contact">Contact</a></li>
                        <button  className="flex p-[10px] rounded-md text-[13px] font-medium shadow-md text-white hover:bg-[#ff014f] hover:text-white bg-[#878e99] sm:hidden md:hidden lg:flex" type="button">Download Resume</button>
                    </ul>
                    <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[40%] text-black mt-[76px] h-full bg-[#E4E4E4] shadow-md ease-in-out duration-500 sm:w-[80%] md:w-[40%] lg:hidden'}>
                        <ul className="uppercase w-full p-12 space-y-6">
                            <li className="text-md"><a className='hover:text-[#ff014f] font-medium' onClick={showNav} href="/">Home</a></li>
                            <li className="text-md"><a className='hover:text-[#ff014f] font-medium' onClick={showNav} href="#features">Features</a></li>
                            <li className="text-md"><a className='hover:text-[#ff014f] font-medium' onClick={showNav} href="#skills">Skills</a></li>
                            <li className="text-md"><a className='hover:text-[#ff014f] font-medium' onClick={showNav} href="#portfolio">Projects</a></li>
                            <li className=""><a className='hover:text-[#ff014f] font-medium' onClick={showNav}  href="#contact">Contact</a></li>
                        </ul>
                        <div className="flex p-[10px] ml-12 w-[40%] mr-4 rounded-md text-[13px] hover:bg-[#ff014f] hover:text-white bg-[#878e99] sm:w-[50%]">
                            <button type="button">Download Resume</button>
                        </div>
                    </div>
                   
                </nav>
            </div>
        </>
    )
}
export default NavBar
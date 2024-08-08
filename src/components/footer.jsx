function Footer() {
    return (
        <>
            <div className="flex justify-start pl-10 pb-6 items-center self-center">
                <div className="flex justify-start items-center">
                    <img className="w-[25%]" src="/Images/logo.png" alt="" />
                    <a className="text-[25px] text-white font-medium" href="/">BEATBIT</a>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col justify-center text-white mr-[90px]">
                        <a className="text-[20px] pb-[10px]" href="">About</a>
                        <a className="text-[20px] pb-[10px]"  href="">Media</a>
                        <a className="text-[20px] pb-[10px]" href="">Company</a>
                    </div>
                    <div className=" flex flex-col justify-center text-white mr-[90px]">
                        <a className="text-[20px] pb-[10px]" href="">Artist</a>
                        <a className="text-[20px] pb-[10px]" href="">Webplayer</a>
                        <a className="text-[20px] pb-[10px]" href="">Whitepaper</a>
                    </div>
                    <div className="flex flex-col justify-center text-white">
                        <a className="text-[20px] pb-[10px]" href="">Discord</a>
                        <a className="text-[20px] pb-[10px]" href="">Instagram</a>
                        <a className="text-[20px] pb-[10px]" href="">Twitter</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
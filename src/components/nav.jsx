function NavBar () {
    return (
        <>
            <div className="nav bg-white py-2 shadow-black">
                <nav className="mx-4 h-12 pb-13">
                    <div className="nav-logo">
                        <div className="navLogo">
                            <a href="/"><img src="Images/XTREMPAY.png" alt=""/></a>
                        </div>
                        <div className="logoBar w-0">
                            <img src="/images/Untitled.png" alt=""/>
                        </div>
                    </div>
                    <ul id="nav-links">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">Moola</a></li>
                        <li><a href="/mentor">Passabi</a></li>
                        <li><a href="/mentee">About Us</a></li>
                    </ul>
                    <div className="butn">
                        <button type="button">DOWNLOAD APP</button>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default NavBar
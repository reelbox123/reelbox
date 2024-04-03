import Navbar from '../components/nav.jsx'
import ContactTab from '../components/contactTab.jsx'
import Footer from '../components/footer.jsx'

function Moola () {
    return(
        <>
            <Navbar/>
            <div className="pt-36 m-header" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className="moola-header">
                    <h1>MOOLA</h1>
                    <h2>A new way of saving </h2>
                    <h3>Save and win N1m Weekly</h3>
                    <p>Moola is a financial app that offers prize linked savings account as an alternative to traditional interest based savings. Moola offers people an exceptional and exciting chance of wining a cash prize in return for saving money into Moola account</p>
                </div>
                <img src="/Images/joy.png" alt="" />
            </div>
            <div className="moola-features" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <h2>Moola Features</h2>
                <div className="pass-feat-val">
                    <img className='pass-i' src="/Images/Group 41.png" alt="" />
                    <div className="pass-feat-val1">
                        <div className="pass-feat1">
                            <img src="/Images/ph.png" alt="" />
                            <div className="pass-feat1-text">
                                <h2>Prize-linked savings</h2>
                                <p>Save and unlock the chance of winning cash prizes and lot of rewards.</p>
                            </div>                       
                        </div>
                        <div className="pass-feat1">
                            <img src="/Images/ph.png" alt="" />
                            <div className="pass-feat1-text">
                                <h2>Debit Cards</h2>
                                <p>Experience  secured and seamless online and offline shopping experience </p>
                            </div>                       
                        </div>
                        <div className="pass-feat1">
                            <img src="/Images/ph.png" alt="" />
                            <div className="pass-feat1-text">
                                <h2>Linked Account</h2>
                                <p>Set goals, track spending, lock savings, earn interest and win cash prizes. the more you save the more your chances of entries into weekly drawing.</p>
                            </div>                       
                        </div>
                        <div className="pass-feat1">
                            <img src="/Images/ph.png" alt="" />
                            <div className="pass-feat1-text">
                                <h2>Automated Savings Plan</h2>
                                <p>Moola helps you save money without manual effort, promoting financial discipline.</p>
                            </div>                       
                        </div>
                    </div>
                </div>
            </div>
            <img className='rec' src="Images/Rectangle 1.png" alt=""/>
            <div className="moola-signup">
                <img src="/Images/young.png" alt="" />
                <div className="moola-signup-text">
                    <h2>How do i sign up to Moola?</h2>
                    <p>Download Xtremepay app </p>
                    <p className='m-p'>Create your Moola account on Xtrempay  start saving, Start winning</p>
                    <div className="playstore">
                        <img  src="/Images/googleplay.png" alt="" />
                        <img src="/Images/appstore.png" alt="" />
                    </div>
                </div>
            </div>
            <ContactTab/>
            <Footer/>
        </>
    )
}
export default Moola
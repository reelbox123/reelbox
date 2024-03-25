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
                                <h2>Contribution tracking</h2>
                                <p>Passabi helps maintain transparency, assess contribution progress and demonstrate the growth and impact of group contributions</p>
                            </div>                       
                        </div>
                        <div className="pass-feat1">
                            <img src="/Images/ph.png" alt="" />
                            <div className="pass-feat1-text">
                                <h2>Joint Ownership</h2>
                                <p>Allow all members of the group to have equal access and authority over their contributions, fostering trust and accountability within the group</p>
                            </div>                       
                        </div>
                        <div className="pass-feat1">
                            <img src="/Images/ph.png" alt="" />
                            <div className="pass-feat1-text">
                                <h2>Automated loans disbursement</h2>
                                <p>Passabi streamlines the loan disbursement process of electronically transferiring loan funds to borrowers accounts without the need of manual process or intervention</p>
                            </div>                       
                        </div>
                        <div className="pass-feat1">
                            <img src="/Images/ph.png" alt="" />
                            <div className="pass-feat1-text">
                                <h2>Communication and Reminders</h2>
                                <p>Passsabi provides communication tools and reminders to keep memebers informed about their contribution schedules and deadlines, helping them stay on track with their saving plans</p>
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
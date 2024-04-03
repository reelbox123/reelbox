import Navbar from '../components/nav.jsx'
import ContactTab from '../components/contactTab.jsx'
import Footer from '../components/footer.jsx'
import { ReactTyped } from "react-typed";
function Passabi () {
    return (
        <>
            <Navbar/>
            <div className="passabi-header">
                <h1>PASSABI</h1>
            </div>
            <div className="passabi-text">
                <h1>Redefining <ReactTyped
                    strings={["Ajo", "Adashe", "Esusu",]}
                    typeSpeed={100}
                    backSpeed={140}
                    loop
                    >
                    </ReactTyped> for small business owners.  Alternative for way to save and borrow money for  Micro, Small, and Medium Enterprises.</h1>
                <p>Passabi offers seamless group savings and provide access to no interest loans for individual members that have come together to solve their money challenges. Digitalize rotating savings platform that is seamlessly integrates with commercial bank and fin-tech companies to offers access to secure and easy to use financial services</p>
            </div>
            <div className="details" id='pass-get' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000">
                <div className="details-text-1">
                    <h2>GET TO KNOW  ABOUT PASSABI</h2>
                    <div className="ggles" id='pass-p'>
                        <p>Passabi offers seamless group savings and provide access to no interest loans for individual members that have come together to solve their money challenges. Digitalize rotating savings platform that is seamlessly integrates with commercial bank and fin-tech companies to offers access to secure and easy to use financial services</p>
                    </div>
                </div>
                <div className="details-text">
                    <div className="details-text1">
                        <div className="details-text" id="t1">
                            <h1>01</h1>
                            <h2>No interest Loan</h2>
                            <p>A standout feature of Passabi is its provision of no-interest loans to its members. This unique offering enables individuals to access funds without the burden of accruing interest, making it easier to manage and repay loans.</p>
                        </div>
                        <div className="details-text">
                            <h1>02</h1>
                            <h2>Customize Contribution Plan</h2>
                            <p>Understanding that financial capabilities and needs vary from person to person, Passabi allows its users to tailor their contribution plans. This flexibility ensures that members can save and contribute at a pace that suits their financial situation, making the process of saving less daunting and more achievable.</p>
                        </div>
                    </div>
                    <div className="details-text2">
                        <div className="details-text" id="t1">
                            <h1>03</h1>
                            <h2>Saving and loan Management</h2>
                            <p>Passabi integrates sophisticated tools for managing savings and loans, ensuring that members have a clear overview of their finances. This feature aids in fostering financial discipline among users, encouraging regular saving habits, and providing a structured approach to loan repayment.</p>
                        </div>
                        <div className="details-text">
                            <h1>04</h1>
                            <h2>Instant SMS & Email Notification</h2>
                            <p>In today’s fast-paced world, immediate access to information is crucial. Passabi caters to this need through instant SMS and email notifications, keeping members up-to-date on their savings contributions, loan disbursements, and repayment schedules. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pass-features">
                <h1>Passabi Features</h1>
                <div className="pass-feat-val">
                    <img src="/Images/Group 625544.png" alt="" />
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
            <ContactTab/>   
            <Footer/>
        </>    
    )
}
export default Passabi
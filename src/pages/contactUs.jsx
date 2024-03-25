import Navbar from '../components/nav.jsx'
import ContactTab from '../components/contactTab.jsx'
import Footer from '../components/footer.jsx'
function ContactUs () {
    return (
        <>
            <Navbar />
            <div className="contact-header">
                <h1>Contact Us</h1>
            </div>
            <div className="contacts-links">
                <ul>
                    <li><a href="/home">Xtremepay</a></li>
                    <li><a className='m-link' href="/moola">Moola</a></li>
                    <li><a href="/passabi">Passabi</a></li>
                </ul>
            </div>
            <div className="contact-support">
                <h1>Contact Support</h1>
                <p>Fill in the required information below and an Xtrempay representative will get in touch.</p>
            </div>
            <div className="contact-form">
                <div className="labels">
                    <form action="" method="get">
                        <label htmlFor="Full Name">Full Name</label>
                        <input type="text" placeholder='Enter Full Name' required/>
                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder='Enter Email' required/>
                        <label htmlFor="Message">Message</label>
                        <input className='msg' type="text" placeholder='Enter your message' required/>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
                <img src="Images/Frame 630543.png" alt="" />
            </div>
            <ContactTab />
            <Footer />
        </>
    )
}
export default ContactUs
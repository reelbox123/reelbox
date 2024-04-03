import { useState } from 'react';
import Navbar from '../components/nav.jsx'
import ContactTab from '../components/contactTab.jsx'
import Footer from '../components/footer.jsx'
import XtremModalTab  from '../components/xtremModalTab.jsx';
import MoolaModalTab from '../components/moolaModalTab.jsx';
import PassabiModalTab from '../components/passabiModalTab.jsx';
function ContactUs () {
    const [openModal, setOpenModal]  = useState(false)
    const [openMoolaModal, setOpenMoolaModal]  = useState(false)
    const [openPassabiModal, setOpenPassabiModal]  = useState(false)
    return (
        <>
            <Navbar />
            <div className="contact-header">
                <h1>Contact Us</h1>
            </div>
            <div className="contacts-links">
                <ul>
                    <li><button onClick={() => setOpenModal(true)} type='submit'>Xtrempay</button></li>
                    <li><button onClick={() => setOpenMoolaModal(true)} type='submit' className='m-link'>Moola</button></li>
                    <li><button onClick={() => setOpenPassabiModal(true)}  type='submit'>Passabi</button></li>
                </ul>
            </div>
            {openModal && <XtremModalTab closeModal={setOpenModal}/> }
            {openMoolaModal && <MoolaModalTab closeModal={setOpenMoolaModal}/> }
            {openPassabiModal && <PassabiModalTab closeModal={setOpenPassabiModal}/> }
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
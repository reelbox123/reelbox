import Navbar from '../components/nav.jsx'
import ContactTab from '../components/contactTab.jsx'
import Footer from '../components/footer.jsx'
function FAQ () {
    return (
        <>
            <Navbar />
            <div className="faq-header">
                <h1>FAQ</h1>
            </div>
            <div className="faq-passabi">
                <div className="faq-passabi-header">
                    <img src="/Images/Group 18.png" alt="" />
                    <h1>Xtremepay</h1>
                </div>
                <div className="faq-pass-text" id='faq-x'>
                    <div className="faq1">
                        <h1>What is Xtremepay?</h1>
                        <img src="/Images/arr-b.png" alt="" /> 
                    </div>
                   <div className="faq-pass-text1">
                    <p> <strong>Xtrempay</strong> is designed to address specific challenges in the digital and financial space, supporting the informal financial sector and driving financial inclusion, In addition, we offer Passabi and Moola, which provides range of financial needs.</p>
                   </div>
                </div>
                <div className="faq-pass-text">
                   <h1>Do i need to register?</h1>
                   <img src="/Images/arr-f.png" alt="" /> 
                </div>
                <div className="faq-pass-text">
                   <h1>Do i need to link my bank account or credit card?</h1>
                   <img src="/Images/arr-f.png" alt="" /> 
                </div>
                <div className="faq-pass-text">
                   <h1>Is my data secure?</h1>
                   <img src="/Images/arr-f.png" alt="" /> 
                </div>
                <hr />
            </div>
            <div className="faq-passabi">
                <div className="faq-passabi-header">
                    <img src="/Images/Group 20.png" alt="" />
                    <h1>Moola</h1>
                </div>
                <div className="faq-pass-text">
                   <h1>What is Moola?</h1>
                   <img src="/Images/arr-f.png" alt="" /> 
                </div>
                <div className="faq-pass-text">
                   <h1>How do i know i have won?</h1>
                   <img src="/Images/arr-f.png" alt="" /> 
                </div>
                <div className="faq-pass-text">
                   <h1>Do i need to save before i can be part of the draw?</h1>
                   <img src="/Images/arr-f.png" alt="" /> 
                </div>
                <div className="faq-pass-text">
                   <h1>Can i have access to my fund on moola anytime?</h1>
                   <img src="/Images/arr-f.png" alt="" /> 
                </div>
                <hr />
            </div>
            <div className="faq-passabi">
                <div className="faq-passabi-header">
                    <img src="/Images/Group 19.png" alt="" />
                    <h1>Passabi</h1>
                </div>
                <div className="faq-pass-text">
                   <h1>What is Passabi?</h1>
                   <img src="/Images/arr-f.png" alt="" /> 
                </div>
                <div className="faq-pass-text">
                   <h1>How do i register?</h1>
                   <img src="/Images/arr-f.png" alt="" /> 
                </div>
                <hr />
            </div>
            <div className="faq-convince">
                <h1>Are you convinced?</h1>
                <p>One of the best ways to take control of your finances is by adequate signing up to Xtrempay. Join other users as they attain financial freedom.</p>
                <button type="button">Download App</button>
            </div>
            <ContactTab />
            <Footer />
        </>
    )
}
export default FAQ
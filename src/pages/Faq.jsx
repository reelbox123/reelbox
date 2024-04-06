import { useState } from 'react'
import Navbar from '../components/nav.jsx'
import ContactTab from '../components/contactTab.jsx'
import Footer from '../components/footer.jsx'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
function FAQ () {
    const [openAccordion, setOpenAccordion] = useState(false);
    const handleAccordion = () => {
        setOpenAccordion(!openAccordion)
    }
    const xtremData = [
        {
            id: 1,
            question: 'What is Xtrempay?',
            answer:'Xtrempay is designed to address specific challenges in the digital and financial space, supporting the informal financial sector and driving financial inclusion, In addition, we offer Passabi and Moola, which provides range of financial needs.'
        },
        {
            id: 2,
            question: 'Do i need to register?',
            answer:'Xtrempay is designed to address specific challenges in the digital and financial space, supporting the informal financial sector and driving financial inclusion, In addition, we offer Passabi and Moola, which provides range of financial needs.'
        },
        {
            id: 3,
            question: 'Do i need to link my bank account or credit card?',
            answer:'is designed to address specific challenges in the digital and financial space, supporting the informal financial sector and driving financial inclusion, In addition, we offer Passabi and Moola, which provides range of financial needs.'
        },
        {
            id: 4,
            question: 'Is my data secure?',
            answer:'is designed to address specific challenges in the digital and financial space, supporting the informal financial sector and driving financial inclusion, In addition, we offer Passabi and Moola, which provides range of financial needs.'
        }

    ]
    const moolaData = [
        {
            id: 1,
            question: 'What is Moola?',
            answer:'Xtrempay is designed to address specific challenges in the digital and financial space, supporting the informal financial sector and driving financial inclusion, In addition, we offer Passabi and Moola, which provides range of financial needs.'
        },
        {
            id: 2,
            question: 'How do i know i have won?',
            answer:'Xtrempay is designed to address specific challenges in the digital and financial space, supporting the informal financial sector and driving financial inclusion, In addition, we offer Passabi and Moola, which provides range of financial needs.'
        },
        {
            id: 3,
            question: 'Do i need to save before i can be part of the draw?',
            answer:'is designed to address specific challenges in the digital and financial space, supporting the informal financial sector and driving financial inclusion, In addition, we offer Passabi and Moola, which provides range of financial needs.'
        },
        {
            id: 4,
            question: 'Can i have access to my fund on moola anytime?',
            answer:'is designed to address specific challenges in the digital and financial space, supporting the informal financial sector and driving financial inclusion, In addition, we offer Passabi and Moola, which provides range of financial needs.'
        }
    ]
    const passabiData = [
        {
            id: 1,
            question: 'What is Passabi?',
            answer:'Xtrempay is designed to address specific challenges in the digital and financial space, supporting the informal financial sector and driving financial inclusion, In addition, we offer Passabi and Moola, which provides range of financial needs.'
        },
        {
            id: 2,
            question: 'How do i register?',
            answer:'Xtrempay is designed to address specific challenges in the digital and financial space, supporting the informal financial sector and driving financial inclusion, In addition, we offer Passabi and Moola, which provides range of financial needs.'
        }
    ]
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
                <div className="w-[45%]">
                    <Accordion allowZeroExpanded>
                        {xtremData.map((xtremDatas) => (
                            <AccordionItem  key={xtremDatas.id}>
                                <div className="faq-pass-text" id='faq-x'>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <div className="faq1">
                                                <h1 className="font-bold">{xtremDatas.question}</h1>
                                                <img className={!openAccordion ? 'rotate-0' : 'rotate-[180deg]'} src="/Images/arr-f.png" alt="" />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className='w-[90%]'>{xtremDatas.answer}</p>
                                    </AccordionItemPanel>
                                <hr className="text-[#BEBEC0] pr-7"/>
                                </div>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                <div className="mt-5 faq-passabi-header">
                    <img src="/Images/Group 20.png" alt="" />
                    <h1>Moola</h1>
                </div>
                <div className="w-[45%]">
                    <Accordion allowZeroExpanded>
                        {moolaData.map((moolaDatas) => (
                            <AccordionItem  key={moolaDatas.id}>
                                <div className="faq-pass-text" id='faq-x'>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <div className="faq1">
                                                <h1 className="font-bold">{moolaDatas.question}</h1>
                                                <img src="/Images/arr-f.png" alt="" />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className='w-[90%]'>{moolaDatas.answer}</p>
                                    </AccordionItemPanel>
                                </div>
                                <hr className="text-[#BEBEC0] pr-7"/>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                <div className="mt-5 faq-passabi-header">
                    <img src="/Images/Group 19.png" alt="" />
                    <h1>Passabi</h1>
                </div>
                <div className="w-[45%]">
                    <Accordion allowZeroExpanded>
                        {passabiData.map((passabiDatas) => (
                            <AccordionItem  key={passabiDatas.id}>
                                <div className="faq-pass-text" id='faq-x'>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <div className="faq1">
                                                <h1>{passabiDatas.question}</h1>
                                                <img src="/Images/arr-f.png" alt="" />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className='w-[90%]'>{passabiDatas.answer}</p>
                                    </AccordionItemPanel>
                                </div>
                                <hr className="text-[#BEBEC0] pr-7"/>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
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
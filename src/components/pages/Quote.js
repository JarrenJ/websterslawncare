import React from 'react';
import emailjs from 'emailjs-com';
import apikeys from "../../apikeys";
import swal from "@sweetalert/with-react/";

import '../Quote.css'

function Quote() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', apikeys.TEMPLATE_ID, e.target, apikeys.USER_ID)
            .then(() => {
                swal("Thanks!", `You should expect a response within 1 business day.`, "success")
            })
    }

    return (

        <div className="container">
            <h1 className="title">Get Your Free Quote</h1>
            {/*<div className="row">*/}
            {/*    <h4 style={{textAlign:"center"}}>We'd love to hear from you!</h4>*/}
            {/*</div>*/}
            <form onSubmit={sendEmail}>
                <div className="input-container">
                        <div className="styled-input wide">
                            <input type="text" name="user_name" autoComplete="name" required/>
                            <label>Name</label>
                        </div>
                        <div className="styled-input">
                            <input type="text" name="user_email" autoComplete="email" required/>
                            <label>Email</label>
                        </div>
                        <div className="styled-input" style={{float:"right"}}>
                            <input type="text" name="user_phone" autoComplete="tel"/>
                            <label>Phone Number <sup><small>(optional)</small></sup></label>
                        </div>
                        <div className="styled-input wide">
                            <textarea style={{resize: "none"}} name="message" required />
                            <label>Message</label>
                        </div>
                    <button className="submit">Send <i className="far fa-paper-plane" /></button>
                </div>
            </form>
        </div>


        // <div className="wrapper">
        //     <div className="contact__container">
        //         <div className="contact__title">
        //             <h2 className="text__white">Get a Free Quote<hr /></h2>
        //
        //         </div>
        //         <form className="contact__form" onSubmit={sendEmail} >
        //             <p className="text__white">Name</p>
        //             <input className="contact__form-input" type="text" name="user_name" required />
        //             <div className="block">
        //                 <p className="text__white">Email</p>
        //                 <input className="contact__form-input" type="email" name="user_email" required />
        //             </div>
        //             <div className="block">
        //                 <p className="text__white">Phone # <sup>(optional)</sup></p>
        //                 <input className="contact__form-input" type="text" name="user_phone" />
        //             </div>
        //
        //             <p className="text__white">Message</p>
        //             <textarea className="contact__form-textarea" type="text" name="message" required />
        //
        //             <button className="submit">Send <i className="far fa-paper-plane"></i></button>
        //         </form>
        //     </div>
        // </div>
    );
}

export default Quote

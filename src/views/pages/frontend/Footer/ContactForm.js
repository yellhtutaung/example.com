import React from 'react'
import './ContactForm.scss'

function ContactForm() {
  return (
    <div>
        <div
            className="container"
            data-aos="fade-up"
            id="contact"
        >
            <div className="contact_center_title px-3">
                <h3 className="text-dark title-fm">Contact Us</h3>
                <span className="contact_center_title_underline"></span>
                <p className="body-fm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse vel nemo
                    iusto aut tenetur accusamus, neque, at et pariatur nisi modi omnis
                    libero deleniti, fugiat qui mollitia rem exercitationem sapiente?
                </p>
                </div>
                <div className="row p-3">
                <div className="contact_form">
                    <form
                    action="https://formsubmit.co/aungchanoo.promail@gmail.com"
                    method="POST" 
                    className="body-fm"
                    >
                    <input type="hidden" name="_next" value="https://www.freshmoe.com/" />
                    <input
                        type="text"
                        name="name"
                        required
                        className="mb-3"
                        placeholder="Enter Your Name"
                        autocomplete="off"
                    />
                    <input
                        type="email"
                        name="email"
                        required
                        className="mb-3"
                        placeholder="Enter Your Email"
                        autocomplete="off"
                    />
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="3"
                        className="mb-3"
                        placeholder="Enter Your Message"
                        autocomplete="off"
                    ></textarea>
                    <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactForm
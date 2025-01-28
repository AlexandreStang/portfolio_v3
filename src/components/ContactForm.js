import React, {useState} from "react";

export default function ContactForm() {

    const defaultValue = ""

    const [formData, setFormData] = useState({
        visitor_subject: defaultValue,
        // visitor_email: defaultValue,
        visitor_message: defaultValue,
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        window.location.href = "mailto:alexandre.stang.web@gmail.com?subject=" + formData.visitor_subject + "&body=" + formData.visitor_message;
        setFormData({visitor_name: defaultValue, visitor_message: defaultValue});
    };

    return (
        <form onSubmit={handleSubmit} id="contact-form">
            <div className="input-div"><input type="text" name="visitor_subject" placeholder="Votre sujet..."
                                              onChange={handleChange} data-aos="content-text" required></input></div>

            {/*<div className="input-div"><input type="email" name="visitor_email"*/}
            {/*                                  placeholder="Votre adresse courriel..."*/}
            {/*                                  onChange={handleChange} data-aos="content-text" required></input>*/}
            {/*</div>*/}
            <div className="input-div"><textarea rows="9" name="visitor_message"
                                                 placeholder="Votre message..."
                                                 onChange={handleChange} data-aos="content-text" required></textarea>
            </div>
            <div data-aos="content-text">
                <button type="submit" name="submit" value="envoyer">envoyer</button>
            </div>
        </form>
    )
}
import axios from "axios";
import React, { forwardRef, useState } from "react";
import "./Contact.css";

const Contact = forwardRef((props, ref) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post(
                "https://kiwi-curious-anglerfish.glitch.me",
                formData
            );
            alert(response.data.success || "Message sent successfully!");
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            alert("Failed to send message. Try again later.");
            console.error("Error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-section" ref={ref}>
            <div className="contact-container">
                <div className="contact-form-container">
                    <h2 className="contact-title">Get in Touch</h2>
                    <p className="subtitle"><i>Drop Me a Message Anytime</i></p>
                    <div className="underline"></div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label>Name <span>*</span></label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />

                        <label>Email address <span>*</span></label>
                        <input
                            type="email"
                            name="email"
                            placeholder="user@website.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <label>Phone number <span>*</span></label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="153-831-1860"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                        />

                        <label>Message</label>
                        <textarea
                            name="message"
                            placeholder="Write your message here..."
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>

                        <button type="submit" className="submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Submit"}
                        </button>
                    </form>
                </div>

                <div className="contact-info-container">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/place/Roorkee,+Uttarakhand,+India/@29.8614375,77.8536259,10611m/data=!3m1!1e3!4m15!1m8!3m7!1s0x390eb36e08b35119:0x798f5dc25ebd0a72!2sRoorkee,+Uttarakhand,+India!3b1!8m2!3d29.8542626!4d77.8880002!16zL20vMDV4azhx!3m5!1s0x390eb36e08b35119:0x798f5dc25ebd0a72!8m2!3d29.8542626!4d77.8880002!16zL20vMDV4azhx?hl=en&entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
                        allowFullScreen
                        loading="lazy"
                        className="google-map"
                    ></iframe>

                    <div className="contact-info">
                        <h3>Get in touch</h3>
                        <p>
                            <i className="fas fa-phone-alt"></i> 
                            <a href="tel:+919917948203"> +91 9917948203</a>
                        </p>
                        <p>
                            <i className="fas fa-envelope"></i> 
                            <a href="mailto:tanushri98371@gmail.com"> tanushri98371@gmail.com</a>
                        </p>

                        <div className="social-icons">
                            <a href="https://github.com/tanushri0804" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/tanu-shri-76b7a1242/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.instagram.com/tanu_shrii.08/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>

                        <h3>Location</h3>
                        <p>
                            <i className="fas fa-map-marker-alt"></i>
                            <a href="https://maps.app.goo.gl/U4LubnGWBm2BLHkVA" target="_blank">
                                Vill, Matlabpur, Roorkee, Uttarakhand 247667, India
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Contact;

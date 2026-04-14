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
                "https://hill-elderly-sesame.glitch.me/send-email",
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
                    <div className="contact-info">
                        <h3>Get in touch</h3>
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
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Contact;

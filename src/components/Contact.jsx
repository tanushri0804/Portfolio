import { forwardRef, useState } from "react";
import {
  CheckCircle2,
  Copy,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";

const EMAIL = "tanushri98371@gmail.com";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
  "d229f3aa-fa09-4203-8a90-ada094ca36fc";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/tanushri0804",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/tanu-shri-76b7a1242/",
  },
];

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formError) setFormError("");
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(
      `Portfolio message from ${formData.name || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Hi Tanu,\n\n${formData.message}\n\n---\nSender Details:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}`
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");

    // If access key is not configured, fallback gracefully to mailto
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "your_web3forms_access_key_here") {
      const mailtoUrl = getMailtoUrl();
      window.location.href = mailtoUrl;
      setIsSuccess(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
      return;
    }

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `Portfolio message from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to send message");
      }

      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      setFormError(
        "Could not send directly via Web3Forms. Click below to send directly via your email app:"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <div className="contact-bg">
        <div className="contact-blob contact-blob-1" />
        <div className="contact-blob contact-blob-2" />
      </div>

      <div className="contact-inner">
        <div className="contact-panel">
          <div className="contact-panel-accent" aria-hidden="true" />

          <div className="contact-grid">
            <div className="contact-info-side">
              <span className="contact-label">Get in touch</span>
              <h2 className="contact-title">
                Let&apos;s work <span className="text-gradient">together</span>
              </h2>
              <p className="contact-desc">
                Drop a message — I&apos;ll get back to you soon.
              </p>

              <div className="contact-quick-info">
                <button
                  type="button"
                  className="contact-quick-item"
                  onClick={handleCopyEmail}
                >
                  <Mail size={16} />
                  <span>{EMAIL}</span>
                  {copied ? (
                    <CheckCircle2 size={14} className="contact-copied" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
                <div className="contact-quick-item contact-quick-static">
                  <MapPin size={16} />
                  <span>Uttarakhand, India</span>
                </div>
              </div>

              <div className="contact-social-row">
                {socialLinks.map(({ name, icon: Icon, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-icon"
                    aria-label={name}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-form-side">
              <div className="contact-form-glass">
                {isSuccess ? (
                  <div className="contact-success">
                    <CheckCircle2 size={40} className="contact-success-icon" />
                    <h3>Message sent!</h3>
                    <p>I&apos;ll reply to your email soon.</p>
                    <button
                      type="button"
                      className="contact-reset-btn"
                      onClick={() => setIsSuccess(false)}
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    {formError && (
                      <div className="contact-form-error" role="alert">
                        <p>{formError}</p>
                        <a
                          href={getMailtoUrl()}
                          className="contact-error-mailto-btn"
                        >
                          <Mail size={14} /> Send via Email App
                        </a>
                      </div>
                    )}

                    <div className="contact-field-row">
                      <div className="contact-field">
                        <label htmlFor="contact-name">Name *</label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="contact-field">
                        <label htmlFor="contact-email">Email *</label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          placeholder="you@email.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="contact-field">
                      <label htmlFor="contact-phone">Phone *</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        placeholder="+91 00000 00000"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="contact-field">
                      <label htmlFor="contact-message">Message *</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        placeholder="Your message..."
                        rows={3}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <button
                      type="submit"
                      className="contact-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send message"}
                      {!isSubmitting && <Send size={16} />}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;

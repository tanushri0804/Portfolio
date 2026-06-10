import { forwardRef, useEffect, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Copy,
  Mail,
  MapPin,
  MessageSquare,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";

const EMAIL = "tanushri98371@gmail.com";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/tanushri0804",
    label: "@tanushri0804",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/tanu-shri-76b7a1242/",
    label: "Tanu Shri",
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
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setLocalTime(
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");

    try {
      if (!WEB3FORMS_ACCESS_KEY) {
        throw new Error("Web3Forms access key is not configured");
      }

      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
        "Could not send your message. Please email me directly at tanushri98371@gmail.com"
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
              Let&apos;s build something{" "}
              <span className="text-gradient">together.</span>
            </h2>
            <p className="contact-desc">
              Have a project in mind or want to collaborate? Drop a message —
              I&apos;ll get back to you as soon as I can.
            </p>

            <div className="contact-cards">
              <button
                type="button"
                className="contact-card glass-card"
                onClick={handleCopyEmail}
              >
                <div className="contact-card-icon">
                  <Mail size={22} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Email me</span>
                  <span className="contact-card-value">{EMAIL}</span>
                </div>
                <div className="contact-card-action">
                  {copied ? (
                    <CheckCircle2 size={18} className="contact-copied" />
                  ) : (
                    <Copy size={18} />
                  )}
                </div>
              </button>

              <div className="contact-meta-row">
                <div className="contact-card glass-card contact-card-half">
                  <MapPin size={20} />
                  <div className="contact-card-text">
                    <span className="contact-card-label">Location</span>
                    <span className="contact-card-value">
                      Uttarakhand, India
                    </span>
                  </div>
                </div>
                <div className="contact-card glass-card contact-card-half">
                  <Clock size={20} />
                  <div className="contact-card-text">
                    <span className="contact-card-label">Local time (IST)</span>
                    <span className="contact-card-value contact-live-time">
                      {localTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <span className="contact-social-label">Connect</span>
              <div className="contact-social-pills">
                {socialLinks.map(({ name, icon: Icon, url, label }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-pill"
                  >
                    <Icon size={18} />
                    <span>{name}</span>
                    <span className="contact-pill-handle">{label}</span>
                    <ArrowUpRight size={14} className="contact-pill-arrow" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-side">
            <div className="contact-form-glass">
              {isSuccess ? (
                <div className="contact-success">
                  <div className="contact-success-icon">
                    <CheckCircle2 size={56} />
                  </div>
                  <h3>Message sent!</h3>
                  <p>
                    Thanks for reaching out. I&apos;ll reply to your email as
                    soon as possible.
                  </p>
                  <button
                    type="button"
                    className="contact-reset-btn"
                    onClick={() => setIsSuccess(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-header">
                    <MessageSquare size={20} />
                    <h3>Start a conversation</h3>
                  </div>

                  {formError && (
                    <p className="contact-form-error" role="alert">
                      {formError}
                    </p>
                  )}

                  <div className="contact-field">
                    <label htmlFor="contact-name">
                      Name <span className="contact-required">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Full name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">
                      Email <span className="contact-required">*</span>
                    </label>
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

                  <div className="contact-field">
                    <label htmlFor="contact-phone">
                      Phone <span className="contact-required">*</span>
                    </label>
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
                    <label htmlFor="contact-message">
                      Message <span className="contact-required">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell me about your project or idea..."
                      rows={4}
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
                    {!isSubmitting && <Send size={18} />}
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

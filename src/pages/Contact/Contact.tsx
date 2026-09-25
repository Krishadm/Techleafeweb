import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonIcon from "@mui/icons-material/Person";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("idle");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "2d6e1937-21c0-4853-b82b-8f659864dd9b",

            name: formData.name,
            email: formData.email,
            subject:
              formData.subject || "New Contact Form Message",
            message: formData.message,

            from_name: formData.name,
            replyto: formData.email,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("Web3Forms error:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <section className="git-section">
        

        <div className="git-glow-a" />
        <div className="git-glow-b" />

        <div className="git-wrapper public-sans-regular">

          {/* LEFT COLUMN */}
          <div className="git-left">

            {/* CONTACT US */}
            <div className="git-contact-wrap">
              <PersonIcon className="git-contact-icon" />

              <span className="git-badge">
                Contact us
              </span>
            </div>

            <h1 className="git-heading">
              Let&apos;s build something amazing together.
            </h1>

            <div className="git-underline" />

            <p className="git-description">
              A short message is enough to start — we&apos;ll follow up
              with real questions, not a sales script.
            </p>

            <div className="git-info-list">

              {/* EMAIL */}
              <div className="git-info-card">
                <span className="git-info-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                    />

                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>

                <div>
                  <p className="git-info-title">
                    Email us
                  </p>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=admin@techleafe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="git-info-value git-link"
                  >
                    admin@techleafe.com
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="git-info-card">
                <span className="git-info-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>

                <div>
                  <p className="git-info-title">
                    Phone
                  </p>

                  <a
                    href="tel:+919345955510"
                    className="git-info-value git-link"
                  >
                    +91 93459 55510
                  </a>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="git-info-card">
                <span className="git-info-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />

                    <circle
                      cx="12"
                      cy="10"
                      r="2.5"
                    />
                  </svg>
                </span>

                <div>
                  <p className="git-info-title">
                    Address
                  </p>

                  <p className="git-info-value">
                    100 Feet Road, Selaiyur, Tambaram,
                    Chennai – 600073
                  </p>
                </div>
              </div>

            </div>

            {/* SOCIAL BUTTONS */}
            <div className="git-socials">

              <a
                href="https://www.instagram.com/tech_leafe"
                target="_blank"
                rel="noopener noreferrer"
                className="git-social-btn"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://www.linkedin.com/company/140613977"
                target="_blank"
                rel="noopener noreferrer"
                className="git-social-btn"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>

              <a
                href="https://x.com/TechLeafe_India"
                target="_blank"
                rel="noopener noreferrer"
                className="git-social-btn"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61593430346026"
                target="_blank"
                rel="noopener noreferrer"
                className="git-social-btn"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=admin@techleafe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="git-social-btn git-cta"
              >
                Reach us directly
              </a>

            </div>
          </div>

          {/* RIGHT COLUMN - FORM */}
          <div className="git-right">

            <div className="git-form-card">

              <h2 className="git-form-title">
                Send us a message
              </h2>

              <p className="git-form-subtitle">
                Fill out the form and we&apos;ll reply as soon
                as possible.
              </p>

              <form onSubmit={handleSubmit}>

                {/* NAME */}
                <div className="git-field">
                  <label
                    className="git-label"
                    htmlFor="git-name"
                  >
                    Name
                  </label>

                  <input
                    id="git-name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="git-input"
                  />
                </div>

                {/* EMAIL */}
                <div className="git-field">
                  <label
                    className="git-label"
                    htmlFor="git-email"
                  >
                    Email
                  </label>

                  <input
                    id="git-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="git-input"
                  />
                </div>

                {/* SUBJECT */}
                <div className="git-field">
                  <label
                    className="git-label"
                    htmlFor="git-subject"
                  >
                    Subject
                  </label>

                  <input
                    id="git-subject"
                    type="text"
                    name="subject"
                    placeholder="Project inquiry / Job opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    className="git-input"
                  />
                </div>

                {/* MESSAGE */}
                <div className="git-field">
                  <label
                    className="git-label"
                    htmlFor="git-message"
                  >
                    Message
                  </label>

                  <textarea
                    id="git-message"
                    name="message"
                    placeholder="What are you building?"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="git-input git-textarea"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="git-submit"
                  disabled={isSending}
                >
                  {isSending
                    ? "Sending..."
                    : "Send Message"}

                  {!isSending && (
                    <span aria-hidden="true">
                      &rarr;
                    </span>
                  )}
                </button>

                {/* SUCCESS */}
                {status === "success" && (
                  <p
                    className="git-form-success"
                    role="status"
                  >
                    ✓ Message sent successfully! We&apos;ll
                    get back to you soon.
                  </p>
                )}

                {/* ERROR */}
                {status === "error" && (
                  <p
                    className="git-form-error"
                    role="alert"
                  >
                    ✕ Failed to send message. Please try
                    again.
                  </p>
                )}

                {/* PRIVACY */}
                <p className="git-privacy">
                  <span aria-hidden="true">
                    🛡️
                  </span>

                  We respect your privacy. No spam.
                  We&apos;ll only use your info to respond.
                </p>

              </form>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
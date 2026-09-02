
import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Footer from "../component/Footer";


interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const GetInTouchSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Wire this up to your backend / email service.
  };

  return (
    <>
    <section className="git-section">
      <style>{`
        @keyframes gitFadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gitGlowDrift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-16px, 20px) scale(1.08);
          }
        }


        //testing
        @keyframes gitPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.35);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(52, 211, 153, 0);
          }
        }

        .git-section {
          position: relative;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          //background: #0A0F14;
          background:rgb(0, 0, 0);
          padding: 56px 32px;
        }

       
        .git-wrapper {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          width: 100%;
          box-sizing: border-box;
        }

        .git-section * {
          box-sizing: border-box;
        }

        /* Left column */
        .git-left {
          flex: 1 1 420px;
        }

        .git-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.35);
          //color: #34D399;
             color: #1e8511;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 20px;
          animation: gitFadeUp 0.6s ease both;
        }

        .git-badge-dot {
          animation: gitPulse 2s ease-in-out infinite;
        }

        .git-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #34D399;
        }

        .git-heading {
          font-size: 40px;
          line-height: 1.15;
          font-weight: 800;
          color: #F5F7F6;
          margin: 0 0 6px 0;
          animation: gitFadeUp 0.6s ease 0.08s both;
        }

        .git-underline {
          width: 64px;
          height: 3px;
          border-radius: 2px;
          background: linear-gradient(90deg, #1e8511, transparent);
          margin: 4px 0 18px 0;
          transform-origin: left;
          animation: gitFadeUp 0.6s ease 0.14s both;
        }

        .git-description {
          color: #9CA8A5;
          font-size: 15px;
          line-height: 1.6;
          max-width: 440px;
          margin: 0 0 28px 0;
          animation: gitFadeUp 0.6s ease 0.2s both;
        }

        .git-info-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .git-info-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          animation: gitFadeUp 0.6s ease both;
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }

        .git-info-card:hover {
          transform: translateY(-3px);
          border-color: rgba(52, 211, 153, 0.4);
          background: rgba(255, 255, 255, 0.05);
        }

        .git-info-list .git-info-card:nth-child(1) { animation-delay: 0.26s; }
        .git-info-list .git-info-card:nth-child(2) { animation-delay: 0.32s; }
        .git-info-list .git-info-card:nth-child(3) { animation-delay: 0.38s; }

        .git-info-icon {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .git-info-card:hover .git-info-icon {
          transform: scale(1.08);
          box-shadow: 0 0 0 4px rgba(52, 211, 153, 0.12);
        }

        .git-info-icon {
          flex-shrink: 0;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(16, 185, 129, 0.15);
          //color: #34D399;
          color: #1e8511;
        }

        .git-info-title {
          margin: 0;
          font-size: 14px;
          font-weight: 700;
          color: #F5F7F6;
        }

        .git-info-value {
          margin: 2px 0 0 0;
          font-size: 13px;
          color: #9CA8A5;
        }

        .git-info-value.git-link {
          //color: #34D399;
          //color: rgb(29, 98, 12);
           color: #1e8511;
        
          text-decoration: none;
        }

        .git-info-value.git-link:hover {
          text-decoration: underline;
        }

        .git-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 16px;
          animation: gitFadeUp 0.6s ease 0.46s both;
        }

        .git-social-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #F5F7F6;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }

        .git-social-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(52, 211, 153, 0.5);
          background: rgba(255, 255, 255, 0.08);
        }

        .git-social-btn.git-cta {
         //background-color: rgb(29, 98, 12);     
          background-color: #1D620C;
          border-color: rgba(16, 185, 129, 0.4); 
          color: #FFFFFF;
           
        }

        // .git-social-btn.git-cta:hover {
        //   background: rgba(16, 185, 129, 0.25);
        //   box-shadow: 0 0 0 4px rgba(52, 211, 153, 0.1);
        // }

        .git-social-btn.git-cta:hover {
          // filter: brightness(1.08);
          // transform: translateY(-2px);
          // box-shadow: 0 8px 24px rgba(16, 185, 129, 0.35);
           background: #1e8511;
            transform: translateY(-2px);
            box-shadow: 0 10px 28px rgba(31, 137, 17, 0.22);
        }

       
        /* Right column: form card */
        .git-right {
          flex: 1 1 380px;
        }

        .git-form-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          padding: 32px;
          animation: gitFadeUp 0.6s ease 0.2s both;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .git-form-card:hover {
          border-color: rgba(52, 211, 153, 0.25);
          box-shadow: 0 0 40px rgba(16, 185, 129, 0.08);
        }

        .git-form-title {
          margin: 0 0 6px 0;
          font-size: 20px;
          font-weight: 700;
          color: #F5F7F6;
        }

        .git-form-subtitle {
          margin: 0 0 24px 0;
          font-size: 13px;
          color: #9CA8A5;
        }

        .git-field {
          margin-bottom: 16px;
        }

        .git-label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          //color: #34D399;
          //color:rgb(29, 98, 12);
          color: #1e8511;
          margin-bottom: 8px;
        }

        .git-input {
          width: 100%;
          box-sizing: border-box;
          padding: 12px 14px;
          font-size: 14px;
          font-family: inherit;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.25);
          color: #F5F7F6;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .git-input::placeholder {
          color: #5C6663;
        }

        .git-input:focus {
          border-color: rgba(52, 211, 153, 0.6);
        
          box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.15);
        }

        .git-textarea {
          resize: vertical;
        }

        .git-submit {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 20px;
          font-size: 14px;
          font-weight: 700;
          color: #FFFFFF;
          //background: linear-gradient(90deg, #34D399, #10B981);
          //background-color:rgb(29, 98, 12);
          background-color: #1D620C;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          margin-top: 4px;
          transition: transform 0.2s ease, filter 0.2s ease, box-shadow 0.2s ease;
        }

        .git-submit:hover {
          // filter: brightness(1.08);
          // transform: translateY(-2px);
          // box-shadow: 0 8px 24px rgba(16, 185, 129, 0.35);
           background: #1e8511;
           transform: translateY(-2px);
           box-shadow: 0 10px 28px rgba(31, 137, 17, 0.22);
        }

        .git-submit:active {
          transform: translateY(0);
        }

        .git-submit span {
          transition: transform 0.2s ease;
        }

        .git-submit:hover span {
          transform: translateX(3px);
        }

        .git-privacy {
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 12px 0 0 0;
          font-size: 12px;
          color: #6B7573;
        }

        @media (max-width: 900px) {
          .git-wrapper {
            gap: 32px;
          }

          .git-left,
          .git-right {
            flex: 1 1 100%;
          }

          .git-description {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .git-section {
            padding: 40px 20px;
          }

          .git-heading {
            font-size: 30px;
          }

          .git-form-card {
            padding: 24px;
          }

          .git-info-card {
            padding: 12px 14px;
          }

          .git-socials {
            gap: 8px;
          }

          .git-social-btn {
            padding: 8px 14px;
            font-size: 12px;
          }
        }

        @media (max-width: 400px) {
          .git-section {
            padding: 32px 16px;
          }

          .git-heading {
            font-size: 26px;
          }

          .git-badge {
            font-size: 11px;
            padding: 5px 12px;
          }

          .git-info-card {
            flex-wrap: wrap;
          }

          .git-form-card {
            padding: 20px;
            border-radius: 14px;
          }

          .git-submit {
            padding: 12px 16px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .git-section *,
          .git-section *::before,
          .git-section *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="git-glow-a" />
      <div className="git-glow-b" />

      <div className="git-wrapper">
        {/* Left column */}
        <div className="git-left">
          <span className="git-badge">
            <span className="git-badge-dot" />
            Contact us
          </span>
//test
          <h1 className="git-heading">Let&apos;s build something amazing together.</h1>
          <div className="git-underline" />

          <p className="git-description">
            A short message is enough to start — we&apos;ll follow up with
            real questions, not a sales script.
          </p>

          <div className="git-info-list">
            <div className="git-info-card">
              <span className="git-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <div>
                <p className="git-info-title">Email us</p>
                <a href="mailto:admin@techleafe.com" className="git-info-value git-link">
                  admin@techleafe.com
                </a>
              </div>
            </div>

            <div className="git-info-card">
              <span className="git-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <p className="git-info-title">Phone</p>
                <a href="tel:+919345955510" className="git-info-value git-link">
                  +91 93459 55510
                </a>
              </div>
            </div>

            <div className="git-info-card">
              <span className="git-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <div>
                <p className="git-info-title">Address</p>
                <p className="git-info-value">
                  100 Feet Road, Selaiyur, Tambaram, Chennai – 600073
                </p>
              </div>
            </div>
          </div>

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

        {/* Right column: form */}
        <div className="git-right">
          <div className="git-form-card">
            <h2 className="git-form-title">Send us a message</h2>
            <p className="git-form-subtitle">
              Fill out the form and we&apos;ll reply as soon as possible.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="git-field">
                <label className="git-label" htmlFor="git-name">
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

              <div className="git-field">
                <label className="git-label" htmlFor="git-email">
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

              <div className="git-field">
                <label className="git-label" htmlFor="git-subject">
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

              <div className="git-field">
                <label className="git-label" htmlFor="git-message">
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

              <button type="submit" className="git-submit">
                Send Message
                <span aria-hidden="true">&rarr;</span>
              </button>

              <p className="git-privacy">
                <span aria-hidden="true">🛡️</span>
                We respect your privacy. No spam. We&apos;ll only use your info to respond.
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

export default GetInTouchSection;

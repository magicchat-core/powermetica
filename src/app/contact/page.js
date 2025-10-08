"use client";

import React, { useState } from "react";
import styles from "./contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setIsSubmitting(true);

    // ---- Build multipart/form-data ----
    const fd = new FormData();
    fd.append("email", formData.email);
    fd.append("email_type", "GET_IN_TOUCH");
    fd.append("to_pm", "to_pm");
    fd.append("name", formData.name);
    fd.append("phone", formData.phone);
    fd.append("company", formData.company || "");
    fd.append("message", formData.message);

    try {
      const response = await fetch("https://email.magicchat.io/prod/send_email", {
        method: "POST",
        headers: {
          "x-api-key": "justanything",
          // ⚠️ Don't set Content-Type manually when using FormData
        },
        body: fd,
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      console.log("✅ Email sent successfully:", data);

      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error("❌ Error sending email:", error);
      alert("Something went wrong while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      details: "help@powermetica.com",
      link: "mailto:help@powermetica.com"
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+91 (798) 231-1249",
      link: "tel:+917982311249"
    },
    {
      icon: "📍",
      title: "Address",
      details:
        "98, Sarvodaya Colony, Vijay Nagar, Ghaziabad - 201009, Uttar Pradesh, India",
      link: "#"
    },
    {
      icon: "💬",
      title: "Social Media",
      details: "LinkedIn / Twitter / GitHub",
      link: "#"
    }
  ];

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Get In Touch</h1>
          <p>
            Ready to start your project? Contact us today and let's discuss
            how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className={styles.contactContent}>
        <div className={styles.contactGrid}>
          {/* Contact Form */}
          <div className={styles.contactForm}>
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <h2>Contact Information</h2>
            <div className={styles.infoCards}>
              {contactInfo.map((info, index) => (
                <div key={index} className={styles.infoCard}>
                  <div className={styles.infoIcon}>{info.icon}</div>
                  <div className={styles.infoContent}>
                    <h3>{info.title}</h3>
                    <a href={info.link} className={styles.infoDetail}>
                      {info.details}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className={styles.officeHours}>
              <h3>Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: Closed</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <h2>Our Location</h2>
        <div className={styles.mapPlaceholder}>
          <div className={styles.mapContent}>
            <p>📍 Map would be embedded here</p>
            <p>
              98, Sarvodaya Colony, Vijay Nagar, Ghaziabad - 201009, Uttar
              Pradesh, India
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

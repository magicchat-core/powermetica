"use client";

import React, { useState } from "react";
import ReusableForms from "@/Components/ReusableForms";
import styles from "./FreeConsultation.module.css";

const GetQuotePage = () => {
  const [resetKey, setResetKey] = useState(Date.now());

  const handleQuoteSubmit = async (formData) => {
    console.log("Quote submitted:", formData);

    // ---- Build multipart/form-data ----
    const fd = new FormData();
    fd.append("email", formData.email);
    fd.append("email_type", "FREE_CONSULTATION");
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
          // ⚠️ Don't set Content-Type manually
        },
        body: fd,
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      console.log("✅ Email sent successfully:", data);

      alert("Your consultation request has been sent successfully!");
      setResetKey(Date.now());
    } catch (error) {
      console.error("❌ Error sending email:", error);
      alert("Something went wrong while sending your consultation request.");
    }
  };

  return (
    <div className={styles.getQuotePage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Get Your Free Consultation</h1>
          <p>
            Tell us about your project, and our experts will send you a tailored
            proposal.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className={styles.infoCardsSection}>
        <div className={styles.infoCards}>
          <div className={styles.card}>🚀 Fast Response</div>
          <div className={styles.card}>💡 Free Consultation</div>
          <div className={styles.card}>🎯 Tailored Solutions</div>
        </div>
      </section>

      {/* Form Section */}
      <section className={styles.formSection}>
        <div className={styles.formWrapper}>
          <ReusableForms
            key={resetKey}
            title="Schedule A Free Consultation."
            subtitle="Fill out the form and our team will get back to you promptly."
            fields={[
              { name: "name", label: "Name", type: "text", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone Number", type: "tel", required: true },
              { name: "company", label: "Company Name", type: "text", required: false },
              { name: "message", label: "Message", type: "textarea", required: true },
            ]}
            submitLabel="Get Free Consultation"
            onSubmit={handleQuoteSubmit}
          />
        </div>
        <div className={styles.formIllustration}>
          <img src="/assets/img/get_quote.png" alt="Quote Form Illustration" />
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Ready to Start Your Project?</h2>
        <p>Let’s discuss how we can help you achieve your goals</p>
        <button
          className={styles.ctaButton}
          onClick={() => (window.location.href = "/start-project")}
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

export default GetQuotePage;

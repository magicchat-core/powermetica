"use client";

import React from "react";

import styles from "./GetQuote.module.css";
import ReusableForms from "@/Components/ReusableForms";

const GetQuotePage = () => {
  const handleQuoteSubmit = (data) => {
    console.log("Quote submitted:", data);
    // Here you can connect API / send to backend / email
  };

  return (
    <div className={styles.getQuotePage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Get Your Free Quote</h1>
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
            title="Request Your Quote"
            subtitle="Fill out the form and our team will get back to you promptly."
            fields={[
              { name: "name", label: "Name", type: "text", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "budget", label: "Budget", type: "text" },
              {
                name: "message",
                label: "Message",
                type: "textarea",
                required: true,
              },
            ]}
            submitLabel="Get Quote"
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

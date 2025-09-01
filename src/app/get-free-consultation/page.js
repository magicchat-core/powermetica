"use client";

import React from "react";

import styles from "./GetFreeConsultation.module.css";
import ReusableForms from "@/Components/ReusableForms";

const GetFreeConsultationPage = () => {
  const handleConsultationSubmit = async (formData) => {
    console.log("Free Consultation Form Data:", formData);

    try {
      const res = await fetch("/api/free-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Thank you! Our team will contact you soon.");
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Get a Free Consultation</h1>
          <p>
            Schedule a free consultation with our experts to discuss your project requirements.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className={styles.formSection}>
        <div className={styles.formWrapper}>
          <ReusableForms
            title="Request Your Free Consultation"
            subtitle="Fill out the form and our team will get back to you promptly."
            fields={[
              { name: "name", label: "Full Name", type: "text", required: true, placeholder: "John Doe" },
              { name: "email", label: "Email", type: "email", required: true, placeholder: "you@example.com" },
              { name: "phone", label: "Phone Number", type: "text", required: true, placeholder: "+91 9876543210" },
              { name: "preferredDate", label: "Preferred Date", type: "date", required: true },
              { name: "preferredTime", label: "Preferred Time", type: "time", required: true },
              { name: "message", label: "Additional Notes", type: "textarea", placeholder: "Tell us anything else..." },
            ]}
            submitLabel="Get Free Consultation"
            onSubmit={handleConsultationSubmit}
          />
        </div>
        <div className={styles.formIllustration}>
          <img src="/assets/img/consultation-img.png" alt="Consultation Illustration" />
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Ready to Discuss Your Project?</h2>
        <p>Let’s talk about how we can help you achieve your goals.</p>
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

export default GetFreeConsultationPage;

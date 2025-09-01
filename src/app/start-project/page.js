"use client";

import React from "react";
import ReusableForms from "@/Components/ReusableForms";
import styles from "./startProj.module.css";

const StartProjectPage = () => {
  const handleStartProjectSubmit = (formData) => {
    console.log("Start Project Form Data:", formData);
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

      <section className={styles.formSection}>
        <div className={styles.formWrapper}>
          <ReusableForms
            title="Start Your Project"
            subtitle="Share your project idea with us, and our team will reach out to help you kick things off 🚀"
            fields={[
              {
                name: "name",
                label: "Full Name",
                type: "text",
                required: true,
                placeholder: "John Doe",
              },
              {
                name: "email",
                label: "Email",
                type: "email",
                required: true,
                placeholder: "you@example.com",
              },
              {
                name: "phone",
                label: "Phone Number",
                type: "text",
                required: true,
                placeholder: "+91 9876543210",
              },
              {
                name: "service",
                label: "Service Needed",
                type: "select",
                required: true,
                options: [
                  { value: "", label: "Select a service" },
                  { value: "website", label: "Website Development" },
                  { value: "mobile", label: "Mobile App Development" },
                  { value: "ai-ml", label: "AI/ML Development" },
                  { value: "cloud", label: "Cloud & DevOps" },
                  { value: "ui-ux", label: "UI/UX Design" },
                  { value: "qa", label: "Quality Assurance" },
                  { value: "marketing", label: "Digital Marketing" },
                ],
              },
              {
                name: "budget",
                label: "Estimated Budget",
                type: "text",
                placeholder: "e.g. $5000 - $10000",
              },
              {
                name: "message",
                label: "Project Details",
                type: "textarea",
                required: true,
                placeholder: "Describe your project...",
              },
            ]}
            submitLabel="Start Project"
            onSubmit={handleStartProjectSubmit}
          />
        </div>
        <div className={styles.formIllustration}>
          <img src="/assets/img/get_quote.png" alt="Quote Form Illustration" />
        </div>
      </section>

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

export default StartProjectPage;

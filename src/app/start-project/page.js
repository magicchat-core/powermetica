"use client";

import React, { useState } from "react";
import ReusableForms from "@/Components/ReusableForms";
import styles from "./startProj.module.css";

const StartProjectPage = () => {
  const [resetKey, setResetKey] = useState(Date.now());

  const handleStartProjectSubmit = async (formData) => {
    console.log("Start Project Form Data:", formData);

    // ---- Build multipart/form-data ----
    const fd = new FormData();
    fd.append("email", formData.email);
    fd.append("email_type", "START_PROJECT");
    fd.append("to_pm", "to_pm");
    fd.append("services", JSON.stringify(formData.services || []));
    fd.append("name", formData.name);
    fd.append("phone", formData.phone);
    fd.append("budget", formData.budget || "");
    fd.append("message", formData.message);
    fd.append("scheduled_time", formData.scheduled_time);

    if (formData.attachment) {
      fd.append("attachment", formData.attachment); // <-- File object
    }

    try {
      const response = await fetch("https://email.magicchat.io/prod/send_email", {
        method: "POST",
        headers: {
          "x-api-key": "justanything",
          // ❌ DON'T set Content-Type manually
        },
        body: fd,
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      console.log("✅ Email sent successfully:", data);

      alert("Your project details were sent successfully!");
      setResetKey(Date.now());
    } catch (error) {
      console.error("❌ Error sending email:", error);
      alert("Something went wrong while sending your project details.");
    }
  };

  return (
    <div className={styles.getQuotePage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Get Your Free Consultation</h1>
          <p>Tell us about your project and attach any relevant file.</p>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.formWrapper}>
          <ReusableForms
            key={resetKey}
            title="Start Your Project"
            subtitle="Share your project idea with us 🚀"
            fields={[
              { name: "name", label: "Full Name", type: "text", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone", type: "text", required: true },
              {
                name: "services",
                label: "Select Services",
                type: "checkbox-group",
                required: true,
                options: [
                  { value: "website", label: "Website / Web App Development" },
                  { value: "mobile", label: "Mobile App Development (iOS / Android)" },
                  { value: "ecommerce", label: "E-Commerce Platforms" },
                  { value: "saas", label: "SaaS / Custom Product Development" },
                  { value: "ai-ml", label: "AI / Machine Learning Solutions" },
                  { value: "cloud-devops", label: "Cloud & DevOps (AWS / GCP / Azure)" },
                  { value: "ui-ux", label: "UI / UX Design" },
                  { value: "qa", label: "Quality Assurance & Testing" },
                  { value: "api", label: "API / Microservices Development" },
                  { value: "crm-erp", label: "CRM / ERP Solutions" },
                  { value: "cms", label: "CMS Development (WordPress, Headless, etc.)" },
                  { value: "marketing", label: "Digital Marketing / SEO" },
                  { value: "consulting", label: "Technology Consulting & Strategy" },
                  { value: "maintenance", label: "Maintenance & Support" }
                ]
                ,
              },
              {
                name: "scheduled_time",
                label: "Preferred Schedule",
                type: "datetime-local",
                required: true,
                minDateTime: true,
              },
              { name: "budget", label: "Estimated Budget", type: "text" },
              {
                name: "message",
                label: "Project Details",
                type: "textarea",
                required: true,
              },
              {
                name: "attachment",
                label: "Attach a File",
                type: "file",           // ✅ NEW
                required: false,
              },
            ]}
            submitLabel="Start Project"
            onSubmit={handleStartProjectSubmit}
          />
        </div>
      </section>
    </div>
  );
};

export default StartProjectPage;

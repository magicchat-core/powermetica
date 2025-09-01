"use client";

import React, { useState } from "react";
import styles from "./ReusableForms.module.css";

const ReusableForms = ({ 
  title, 
  subtitle, 
  fields = [], 
  submitLabel = "Submit", 
  onSubmit 
}) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className={styles.formWrapper}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      
      <form className={styles.form} onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} className={styles.formGroup}>
            <label className={styles.label}>{field.label}</label>

            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                placeholder={field.placeholder || ""}
                required={field.required}
                className={styles.input}
                onChange={handleChange}
              />
            ) : field.type === "select" ? (
              <select
                name={field.name}
                required={field.required}
                className={styles.input}
                onChange={handleChange}
              >
                {field.options.map((opt, i) => (
                  <option key={i} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder || ""}
                required={field.required}
                className={styles.input}
                onChange={handleChange}
              />
            )}
          </div>
        ))}

        <button type="submit" className={styles.submitButton}>
          {submitLabel}
        </button>
      </form>
    </div>
  );
};

export default ReusableForms;

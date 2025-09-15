"use client";

import React, { useState } from "react";
import styles from "./ReusableForms.module.css";

const ReusableForms = ({
  title,
  subtitle,
  fields = [],
  submitLabel = "Submit",
  onSubmit,
}) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      // ✅ Handle multiple checkbox selections
      setFormData((prev) => {
        const current = new Set(prev[name] || []);
        if (checked) current.add(value);
        else current.delete(value);
        return { ...prev, [name]: Array.from(current) };
      });
    } else if (type === "file") {
      // ✅ Store the File object (only first file for now)
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  // ✅ helper to get current local datetime string in HTML5 format
  const getMinDateTime = () => {
    const now = new Date();
    const tzOffset = now.getTimezoneOffset() * 60000;
    const localISO = new Date(now - tzOffset).toISOString().slice(0, 16);
    return localISO;
  };

  return (
    <div className={styles.formWrapper}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      <form className={styles.form} onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} className={styles.formGroup}>
            <label className={styles.label}>{field.label}</label>

            {/* ✅ Textarea */}
            {field.type === "textarea" && (
              <textarea
                name={field.name}
                placeholder={field.placeholder || ""}
                required={field.required}
                className={styles.input}
                onChange={handleChange}
              />
            )}

            {/* ✅ Select dropdown */}
            {field.type === "select" && (
              <select
                name={field.name}
                required={field.required}
                className={styles.input}
                onChange={handleChange}
              >
                {field.options.map((opt, i) => (
                  <option key={i} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            )}

            {/* ✅ Checkbox group */}
            {field.type === "checkbox-group" && (
              <div className={styles.checkboxGroup}>
                {field.options.map((opt, i) => (
                  <label key={i} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name={field.name}
                      value={opt.value}
                      required={field.required && i === 0}
                      onChange={handleChange}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            )}

            {/* ✅ File input */}
            {field.type === "file" && (
              <input
                type="file"
                name={field.name}
                required={field.required}
                className={styles.input}
                onChange={handleChange}
                multiple          // ✅ allow selecting multiple files

              />
            )}

            {/* ✅ Default text, email, datetime, etc. */}
            {field.type !== "textarea" &&
              field.type !== "select" &&
              field.type !== "checkbox-group" &&
              field.type !== "file" && (
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder || ""}
                  required={field.required}
                  min={field.minDateTime ? getMinDateTime() : undefined}
                  className={`${styles.input} ${
                    field.type === "datetime-local" ? styles.inputDatetime : ""
                  }`}
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

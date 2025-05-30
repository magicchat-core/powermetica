'use client';

import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import styles from './ContactForm.module.css';
import 'react-phone-input-2/lib/style.css';

const ContactForm = ({ title, fields, buttonText, onSubmit }) => {
  const initialData = fields.reduce((acc, f) => {
    acc[f.name] = '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // For PhoneInput change (special handler)
  const handlePhoneChange = (value, name) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required && !formData[field.name].trim()) {
        newErrors[field.name] = `${field.label} is required`;
      }
      if (field.type === 'email' && formData[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.name])) {
          newErrors[field.name] = 'Invalid email address';
        }
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(formData);
    // Optionally reset form
    // setFormData(initialData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
    {title && <h2 className={styles.title}>{title}</h2>}
  
    {/* First row: Name and Company Name */}
    <div className={styles.row}>
      {fields
        .filter(f => f.name === 'name' || f.name === 'companyName')
        .map((field) => (
          <div key={field.name} className={styles.formGroupRow}>
            <label htmlFor={field.name} className={styles.label}>
              {field.label}
              {field.required && <span className={styles.required}>*</span>}
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder || ''}
              required={field.required}
              value={formData[field.name]}
              onChange={handleChange}
              className={styles.input}
            />
            {errors[field.name] && (
              <p className={styles.error}>{errors[field.name]}</p>
            )}
          </div>
        ))}
    </div>
  
    {/* Second row: Email and Mobile */}
    <div className={styles.row}>
      {fields
        .filter(f => f.name === 'email' || f.name === 'mobile')
        .map((field) => (
          <div key={field.name} className={styles.formGroupRow}>
            <label htmlFor={field.name} className={styles.label}>
              {field.label}
              {field.required && <span className={styles.required}>*</span>}
            </label>
  
            {field.type === 'phone' ? (
              <PhoneInput
                country={'us'}
                value={formData[field.name]}
                onChange={(value) => handlePhoneChange(value, field.name)}
                inputProps={{
                  name: field.name,
                  required: field.required,
                  id: field.name,
                }}
                containerClass={styles.phoneContainer}
                inputClass={styles.phoneInput}
                buttonClass={styles.phoneButton}
                dropdownClass={styles.phoneDropdown}
                enableSearch
                disableCountryCode={false}
                countryCodeEditable={true}
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={field.placeholder || ''}
                required={field.required}
                value={formData[field.name]}
                onChange={handleChange}
                className={styles.input}
              />
            )}
  
            {errors[field.name] && (
              <p className={styles.error}>{errors[field.name]}</p>
            )}
          </div>
        ))}
    </div>
  
    {/* The rest fields (country, message, etc) */}
    {fields
      .filter(f => !['name', 'companyName', 'email', 'mobile'].includes(f.name))
      .map((field) => (
        <div key={field.name} className={styles.formGroup}>
          <label htmlFor={field.name} className={styles.label}>
            {field.label}
            {field.required && <span className={styles.required}>*</span>}
          </label>
  
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              placeholder={field.placeholder || ''}
              required={field.required}
              value={formData[field.name]}
              onChange={handleChange}
              className={styles.textarea}
            />
          ) : field.type === 'select' ? (
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              className={styles.select}
            >
              <option value="">Select {field.label}</option>
              {field.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder || ''}
              required={field.required}
              value={formData[field.name]}
              onChange={handleChange}
              className={styles.input}
            />
          )}
  
          {errors[field.name] && (
            <p className={styles.error}>{errors[field.name]}</p>
          )}
        </div>
      ))}
  
    <button type="submit" className={styles.button}>
      {buttonText || 'Submit'}
    </button>
  </form>
  
  );
};

export default ContactForm;

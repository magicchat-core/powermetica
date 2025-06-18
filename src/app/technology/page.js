"use client";

import React from "react";
import Banner from "@/Components/webSite-dev-components/Banner";
import ChooesTechnology from "@/Components/technology_page/ChooesTechnology";
import TechnologyCards from "@/Components/technology_page/TechnologyCards";
import ContactForm from "@/Components/technology_page/ContactForm";
import { BiSolidPhoneCall, BiLogoLinkedin } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { SiYoutube } from "react-icons/si";
import styles from "./technology.module.css";

const Technology = () => {
  const bannerData = {
    title: "A Look at Our Technologies Expertise",
    description:
      "Designing and developing innovative, professional software solutions for hundreds of companies across global tech markets for nearly two decades",
    image1: "/assets/icons/shap.png",
    image2: "/assets/icons/shape2.png",
    buttonText: "Talk to us",
    onButtonClick: () => alert("Let’s go!"),
  };

  const formFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your name",
      required: true,
    },
    {
      name: "companyName",
      label: "Company Name",
      type: "text",
      placeholder: "Enter company Name",
      required: true,
    },
    {
      name: "email",
      label: "Email ID",
      type: "email",
      placeholder: "Enter email id",
      required: true,
    },
    { name: "mobile", label: "Mobile Number", type: "phone", required: true },
    {
      name: "country",
      label: "Country",
      type: "select",
      required: true,
      options: [
        { label: "India", value: "India" },
        { label: "USA", value: "USA" },
        { label: "UK", value: "UK" },
      ],
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Your message here...",
      required: true,
    },
  ];

  const handleSubmit = (formData) => {
    console.log("Form Submitted:", formData);
  };

  return (
    <div style={{ backgroundColor: "#121723" }}>
      <Banner
        title={bannerData.title}
        description={bannerData.description}
        image1={bannerData.image1}
        image2={bannerData.image2}
        buttonText={bannerData.buttonText}
        onButtonClick={bannerData.onButtonClick}
      />

      <ChooesTechnology />

      <TechnologyCards />

      <div className={styles.addresswrapper}>
        <img src="/assets/img/newbg.png" className={styles.bgImage} />
        <div className={styles.absoluteContainer}>
          <div className={styles.infoCard}>
            <h2>Talk to our experts</h2>
            <p>
              Elevate your journey and empower your choices with our experts'
              insightful guidance.
            </p>
            <div className={styles.contactLine}>
              <p>
                {" "}
                <strong>Call us at:</strong>{" "}
                <BiSolidPhoneCall className={styles.icon} /> +91-9999999999
              </p>

              <p>
                {" "}
                <strong>Email us at:</strong>
                <MdEmail className={styles.icon} /> abc@gmail.com
              </p>
            </div>

            <div className={styles.socialIcons}>
              <TbBrandWhatsappFilled /> <BiLogoLinkedin /> <SiYoutube />
            </div>
          </div>
          <ContactForm
            title="Get in Touch"
            fields={formFields}
            buttonText="Send Message"
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;

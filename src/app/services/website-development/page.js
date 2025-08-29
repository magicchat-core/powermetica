"use client";

import React from "react";
import Banner from "@/Components/webSite-dev-components/Banner";
import FAQ from "@/Components/webSite-dev-components/FAQ";
import Tabs from "@/Components/webSite-dev-components/Tabs";
import tabsData from "@/Components/webSite-dev-components/tabsData";
import faqItems from "@/Components/webSite-dev-components/faqItems";
import Card from "../../../Components/webSite-dev-components/Card";
import webdev from "./webdev.module.css";
import cardData from "@/Components/webSite-dev-components/cardData";

const LightningIcon = () => (
  <svg
    width="24"
    height="24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M7 2v11h3v9l7-12h-4l3-8z" />
  </svg>
);

const WebsiteDevelopment = () => {
  const bannerData = {
    title: "Dynamic Web Development Services",
    description:
      "Our Dynamic Web Development Services help you build engaging, responsive, and scalable websites tailored to your business goals. With modern designs, seamless functionality, and optimized performance, we deliver web solutions that captivate users and drive growth online.",
    image1: "/assets/icons/shap.png",
    image2: "/assets/icons/shape2.png",
    buttonText: "Talk to us",
    onButtonClick: () => alert("Let’s go!"),
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

      <section className={webdev.tabWrap}>
        <Tabs tabs={tabsData} />
      </section>

      <section className={webdev.cardWrap}>
        <div className={webdev.cardsHeading}>
          <h2>Our Web Development Process</h2>
          <p className={webdev.description}>
            We understand that every web development project is unique, and
            tailor our approach to meet your specific needs. Our development
            process is built on collaboration, creativity, and cutting-edge
            technology.
          </p>
        </div>
        <div className={webdev.allCards}>
        {cardData.map((props, index) => (
          <Card key={index} {...props} />
        ))}
        </div>
      </section>

      <FAQ items={faqItems} />
    </div>
  );
};

export default WebsiteDevelopment;

"use client"; // add this at the top of WebsiteDevelopment.js

import React from "react";
import Banner from "@/Components/Banner";
import FAQ from "@/Components/FAQ";
import Tabs from "@/Components/Tabs";
import tabsData from "@/Components/tabsData";
import faqItems from "@/Components/faqItems";
import Card from "../../Components/Card";



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
    title: "Grow Your Business Today",
    description: "We provide powerful solutions to help you scale faster.",
    image1: "/Asset/shap.png",
    image2: "/Asset/shape2.png",
    buttonText: "Get Started",
    onButtonClick: () => alert("Let’s go!"),
  };

  return (
    <div>
      WebsiteDevelopment
      <Banner
        title={bannerData.title}
        description={bannerData.description}
        image1={bannerData.image1}
        image2={bannerData.image2}
        buttonText={bannerData.buttonText}
        onButtonClick={bannerData.onButtonClick}
      />

      <br/>
      <div>
        <section>
          <Tabs tabs={tabsData} />
        </section>  
      </div>

  <br/>

  <FAQ items={faqItems}/>


  <main style={{ padding: "40px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <Card
        title="Fast Performance"
        text="Optimized for speed and efficiency."
        Icon={LightningIcon}
      />
      <Card
        title="Reliable Uptime"
        text="Stable and consistent experience."
        Icon={LightningIcon}
      />
      <Card
        title="Easy Integration"
        text="Simple to connect and deploy."
        Icon={LightningIcon}
      />
    </main>
    </div>
  );
};

export default WebsiteDevelopment;

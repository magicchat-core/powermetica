"use client";

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
    title: "Dynamic Web Development Services",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image1: "/Asset/shap.png",
    image2: "/Asset/shape2.png",
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

      <br />
      <div>
        <section>
          <Tabs tabs={tabsData} />
        </section>
      </div>

      <br />

      <FAQ items={faqItems} />

      <main
        style={{
          padding: "40px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
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

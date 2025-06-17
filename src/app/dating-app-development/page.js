"use client";

import React from "react";
import Banner from "@/Components/webSite-dev-components/Banner";
import FAQ from "@/Components/webSite-dev-components/FAQ";
import datingfaqItems from "@/Components/datingApp-components/datingfaqItems";
import CustomDatingApp from "@/Components/datingApp-components/CustomDatingApp";
import TimeTestedComp from "@/Components/datingApp-components/TimeTestedComp";
import Card from "@/Components/datingApp-components/Card";
import datingSty from "./datingApp.module.css";
import cardData from "@/Components/datingApp-components/cardData";
import WhyChooseMagicChat from "@/Components/datingApp-components/WhyChooseMagicChat";

const datingAppDevelopment = () => {
  const bannerData = {
    title: "Dating App Development Company",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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

      <CustomDatingApp />

      <TimeTestedComp />

      <section className={datingSty.cardWrap}>
        <div className={datingSty.cardsHeading}>
          <h2>Our Web Development Process</h2>
          <p className={datingSty.description}>
            We understand that every web development project is unique, and
            tailor our approach to meet your specific needs. Our development
            process is built on collaboration, creativity, and cutting-edge
            technology.
          </p>
        </div>

        <div className={datingSty.allCards}>
          <div className={datingSty.firstCard}>
            {cardData.slice(0, 3).map((props, index) => (
              <Card key={index} {...props} />
            ))}
          </div>

          <img
          src="/assets/img/man_with_laptop.png"
          alt="custom-dating-banner"
        />
          <div className={datingSty.remainingCards}>
            {cardData.slice(3, 6).map((props, index) => (
              <Card key={index + 1} {...props} />
            ))}
          </div>
        </div>
      </section>

      {/* <WhyChooseMagicChat/> */}

      <FAQ items={datingfaqItems} />
    </div>
  );
};

export default datingAppDevelopment;

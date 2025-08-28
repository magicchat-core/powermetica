"use client";

import React from "react";
import styles from "../future-ai-web-development/post.module.css";

const Web3BlockchainDevelopment = () => {
  return (
    <div className={styles.blogPostPage}>
      <article className={styles.postContainer}>
        <header className={styles.postHeader}>
          <div className={styles.postMeta}>
            <span className={styles.category}>Blockchain</span>
            <span className={styles.date}>February 28, 2024</span>
            <span className={styles.readTime}>6 min read</span>
            <span className={styles.author}>By Sarah Wilson</span>
          </div>
          <h1 className={styles.postTitle}>The Rise of Web3 and Blockchain Development</h1>
          <p className={styles.postExcerpt}>
            Understanding how blockchain technology and Web3 are creating new opportunities for developers.
          </p>
        </header>

        <div className={styles.postContent}>
          <h2>Introduction</h2>
          <p>
            Web3 and blockchain technology are transforming the internet as we know it, creating 
            decentralized applications that give users more control over their data and digital assets.
          </p>
          
          <h2>Smart Contract Development</h2>
          <p>
            Learn how to develop and deploy smart contracts on various blockchain platforms using 
            languages like Solidity and frameworks like Hardhat and Truffle.
          </p>
          
          <h2>Decentralized Applications (dApps)</h2>
          <p>
            Build full-stack decentralized applications that interact with blockchain networks 
            through web3 libraries and APIs.
          </p>

          <div className={styles.postTags}>
            <span>#Web3</span>
            <span>#Blockchain</span>
            <span>#SmartContracts</span>
            <span>#dApps</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Web3BlockchainDevelopment;

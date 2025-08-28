"use client";

import React from "react";
import styles from "../technology.module.css";

const AIMLTechnology = () => {
  const technologies = [
    {
      category: "Machine Learning Frameworks",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "MXNet"]
    },
    {
      category: "Natural Language Processing",
      items: ["spaCy", "NLTK", "Hugging Face", "BERT", "GPT", "Transformer Models"]
    },
    {
      category: "Computer Vision",
      items: ["OpenCV", "YOLO", "Detectron2", "MediaPipe", "TensorFlow Object Detection"]
    },
    {
      category: "Data Processing & Analysis",
      items: ["Pandas", "NumPy", "Apache Spark", "Dask", "Polars", "Apache Beam"]
    },
    {
      category: "MLOps & Deployment",
      items: ["MLflow", "Kubeflow", "Seldon Core", "TensorFlow Serving", "TorchServe"]
    },
    {
      category: "Cloud AI Services",
      items: ["AWS SageMaker", "Google Vertex AI", "Azure Machine Learning", "IBM Watson"]
    }
  ];

  return (
    <div style={{ backgroundColor: "#121723", padding: "2rem" }}>
      <div className={styles.techPage}>
        <h1>AI & Machine Learning Technologies</h1>
        <p className={styles.subtitle}>
          We leverage cutting-edge AI and ML technologies to build intelligent solutions 
          that learn, adapt, and deliver exceptional results for your business.
        </p>

        <div className={styles.techGrid}>
          {technologies.map((tech, index) => (
            <div key={index} className={styles.techCategory}>
              <h2>{tech.category}</h2>
              <div className={styles.techItems}>
                {tech.items.map((item, idx) => (
                  <span key={idx} className={styles.techItem}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.expertiseSection}>
          <h2>Our AI/ML Expertise</h2>
          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseItem}>
              <h3>Predictive Analytics</h3>
              <p>Building models that forecast trends and business outcomes with remarkable accuracy</p>
            </div>
            <div className={styles.expertiseItem}>
              <h3>Natural Language Processing</h3>
              <p>Creating chatbots and text processing solutions that understand human language</p>
            </div>
            <div className={styles.expertiseItem}>
              <h3>Computer Vision</h3>
              <p>Developing image and video recognition systems for various applications</p>
            </div>
            <div className={styles.expertiseItem}>
              <h3>Recommendation Systems</h3>
              <p>Building personalized recommendation engines that enhance user experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMLTechnology;

"use client";

import React from "react";
import styles from "./blog.module.css";

const Blog = () => {
  const blogPosts = [
    {
      id: "future-ai-web-development",
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence is transforming the way we build and interact with web applications.",
      date: "March 15, 2024",
      author: "Deepak Singh",
      category: "AI & Machine Learning",
      readTime: "5 min read",
      image: "/assets/img/blog1.jpg"
    },
    {
      id: "react-performance-optimization",
      title: "Best Practices for React Performance Optimization",
      excerpt: "Learn practical techniques to improve your React application's performance and user experience.",
      date: "March 10, 2024",
      author: "Deepak Singh",
      category: "Frontend Development",
      readTime: "8 min read",
      image: "/assets/img/blog2.jpg"
    },
    {
      id: "microservices-architecture",
      title: "Building Scalable Microservices Architecture",
      excerpt: "A comprehensive guide to designing and implementing microservices that can scale with your business.",
      date: "March 5, 2024",
      author: "Mike Johnson",
      category: "Backend Development",
      readTime: "10 min read",
      image: "/assets/img/blog3.jpg"
    },
    {
      id: "web3-blockchain-development",
      title: "The Rise of Web3 and Blockchain Development",
      excerpt: "Understanding how blockchain technology and Web3 are creating new opportunities for developers.",
      date: "February 28, 2024",
      author: "Sarah Wilson",
      category: "Blockchain",
      readTime: "6 min read",
      image: "/assets/img/blog4.jpg"
    },
    {
      id: "mobile-first-design-2024",
      title: "Mobile-First Design: Why It Matters in 2024",
      excerpt: "Why adopting a mobile-first approach is crucial for modern web design and development.",
      date: "February 22, 2024",
      author: "David Brown",
      category: "UI/UX Design",
      readTime: "7 min read",
      image: "/assets/img/blog5.jpg"
    },
    {
      id: "devops-best-practices",
      title: "DevOps Best Practices for Small Teams",
      excerpt: "How small development teams can implement DevOps practices to improve efficiency and delivery.",
      date: "February 18, 2024",
      author: "Emily Chen",
      category: "DevOps",
      readTime: "9 min read",
      image: "/assets/img/blog6.jpg"
    }
  ];

  const categories = [
    "All Topics",
    "AI & Machine Learning",
    "Frontend Development",
    "Backend Development",
    "Mobile Development",
    "UI/UX Design",
    "DevOps",
    "Blockchain",
    "Cloud Computing"
  ];

  return (
    <div className={styles.blogPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Our Blog</h1>
          <p>
            Insights, trends, and best practices in software development,
            design, and technology innovation.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categoriesSection}>
        <div className={styles.categories}>
          {categories.map((category, index) => (
            <button
              key={index}
              className={styles.categoryButton}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className={styles.blogPostsSection}>
        <div className={styles.blogPostsGrid}>
          {blogPosts.map((post, index) => (
            <article key={index} className={styles.blogPost}>
              <div className={styles.postImage}>
                <img src={post.image} alt={post.title} />
                <div className={styles.categoryBadge}>{post.category}</div>
              </div>

              <div className={styles.postContent}>
                <h2>{post.title}</h2>
                <p className={styles.postExcerpt}>{post.excerpt}</p>

                <div className={styles.postMeta}>
                  <span className={styles.postDate}>{post.date}</span>
                  <span className={styles.postAuthor}>By {post.author}</span>
                  <span className={styles.readTime}>{post.readTime}</span>
                </div>

                <a href={`/blog/posts/${post.id}`} className={styles.readMoreButton}>
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <section className={styles.paginationSection}>
        <div className={styles.pagination}>
          <button className={styles.paginationButton}>Previous</button>
          <button className={styles.paginationButtonActive}>1</button>
          <button className={styles.paginationButton}>2</button>
          <button className={styles.paginationButton}>3</button>
          <button className={styles.paginationButton}>Next</button>
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest insights and updates</p>
          <div className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.newsletterInput}
            />
            <button className={styles.newsletterButton}>Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

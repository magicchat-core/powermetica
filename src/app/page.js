'use client'

export default function Home() {

  return (
    <div className="container">
      <section className="banner">
        <div className="banner-text">
          <h1>Revolutionizing digital experiences through innovative web and mobile app solutions</h1>
          <p>
            HHP Software builds inspirational designs and powerful software solutions for web and mobile apps.
            We blend cutting-edge tech & design to develop innovative digital products and bring ideas and changes to life.
          </p>
          <div className="banner-buttons">
            <button className="btn-orange">Talk to us</button>
            <button className="btn-dark">About us</button>
          </div>
        </div>
        <div className="banner-image">
          {/* Replace with actual <img src="..." /> as needed */}
          <div className="image-placeholder">[ Image Here ]</div>
        </div>
      </section>
    </div>
  );
}

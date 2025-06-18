import styles from "./WhyChoose.module.css";

const chooseList = [
  {
    id: 1,
    title: "User-Centric UI/UX Design",
    text: "Seamless and engaging user experience.",
    svgSrc: "/assets/icons/uiux.svg",
  },
  {
    id: 2,
    title: "Data Security & Compliance",
    text: "End-to-end encryption, GDPR, and CCPA compliance.",
    svgSrc: "/assets/icons/security.svg",
  },
  {
    id: 3,
    title: "Scalability & Future-Readiness",
    text: "Apps designed to grow with your business.",
    svgSrc: "/assets/icons/scal.svg",
  },
  {
    id: 4,
    title: "Expert Developers",
    text: "Skilled in iOS, Android, and cross-platform development.",
    svgSrc: "/assets/icons/develpoer.svg",
  },
];

export default function WhyChooseMagicChat() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h2>Why Choose Magic Chat as Your Dating App Development Partner?</h2>
        <p className={styles.description}>
          We create custom software specifically designed to meet you unique
          business needs.
        </p>
      </div>

      <div className={styles.horizontaldivider} style={{marginBottom:"65px"}}></div>

      <div className={styles.cardWrap}>
        <div className={styles.image}>
          <img
            src="/assets/img/customDatingbannerImg.png"
            alt="custom-dating-banner"
          />
        </div>

        <div className={styles.verticalDivider}></div>

        <div className={styles.cards}>
          <div className={styles.row1}>
            {chooseList.slice(0, 2).map(({id, title, text, svgSrc }) => (
              <div key={id} className={styles.box} style={{ marginBottom: "50px" }}>
                <div className={styles.icon}>
                  <img src={svgSrc} />
                </div>

                <div className={styles.contnet}>
                  <h3 className={styles.cardheading}>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.row1}>
            {chooseList.slice(2, 4).map(({id, title, text, svgSrc }) => (
              <div key={id} className={styles.box}>
                <div className={styles.icon}>
                  <img src={svgSrc} />
                </div>

                <div className={styles.contnet}>
                  <h3 className={styles.cardheading}>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.horizontaldivider} style={{marginTop:"65px"}}></div>
    </div>
  );
}

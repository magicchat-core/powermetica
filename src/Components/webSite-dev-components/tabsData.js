import styles from "./Tabs.module.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const tabsData = [
  {
    label: "Front-end",
    content: (
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {/* {["Box 1", "Box 2", "Box 3", "Box 4"].map((boxLabel) => (
            <button key={boxLabel} className="box-button">
              {boxLabel}
            </button>
          ))} */}

        {[
          "HTML",
          "CSS",
          "JavaScript",
          "Vue.js",
          "React.js",
          "Angular",
          "Next.js",
          "Bootstrap",
          "Material UI (MUI)",
          "Tailwind CSS",
        ].map((linkLabel) => (
          <a
            key={linkLabel}
            href="#"
            className={styles["box-link"]}
            onClick={(e) => e.preventDefault()}
          >
            <IoMdCheckmarkCircleOutline
              style={{ marginRight: "8px", color: "green", fontSize: "30px" }}
            />
            {linkLabel}
          </a>
        ))}
      </div>
    ),
  },
  {
    label: "Back-end",
    content: (
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {[
          "Python",
          "Java ",
          "JavaScript",
          "C#",
          "PHP",
          "Ruby",
          "Node.js",
          "Express.js",
          "Django",
          "FastAPI",
          "Laravel",
        ].map((linkLabel) => (
          <a
            key={linkLabel}
            href="#"
            className={styles["box-link"]}
            onClick={(e) => e.preventDefault()}
          >
            <IoMdCheckmarkCircleOutline
              style={{ marginRight: "8px", color: "green", fontSize: "30px" }}
            />

            {linkLabel}
          </a>
        ))}
      </div>
    ),
  },
  {
    label: "Database",
    content: (
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {["MySql", "MongoDB  ", "PostgreSQL", "Cassandra", "AWS Aurora"].map(
          (linkLabel) => (
            <a
              key={linkLabel}
              href="#"
              className={styles["box-link"]}
              onClick={(e) => e.preventDefault()}
            >
              <IoMdCheckmarkCircleOutline
                style={{ marginRight: "8px", color: "green", fontSize: "30px" }}
              />

              {linkLabel}
            </a>
          )
        )}
      </div>
    ),
  },
];

export default tabsData;

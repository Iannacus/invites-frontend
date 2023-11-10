import React from "react";
import BackDropContainer from "../bg/BackDropContainer";
import bg from "../../../img/bautizo/heroBg.jpg";
import "./section-container.css";

function SectionContainer({
  noBorder,
  style,
  children,
  bgColor,
  withBgImage,
  img,
}) {
  const prepareClassNames = () => {
    const classes = ["section-content"];

    const borderStyle = `border-${style}`;

    if (!noBorder) {
      classes.push(borderStyle);
    }
    return classes;
  };

  const styles = prepareClassNames();

  return (
    <BackDropContainer img={bg}>
      <div
        className="section-container "
        style={{
          overflow: "hidden",
          background: `${bgColor ?? ""}`,
          backgroundImage: `${withBgImage && `url(${img})`}`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className={styles.join(" ")}>{children}</div>
      </div>
    </BackDropContainer>
  );
}

export default SectionContainer;

import React from "react";
import footerImg from "../img/logo (1).png";
function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ minHeight: "70px", padding: "10px 20px", zIndex: "100" }}
    >
      <h6 style={{ fontSize: "14px", fontWeight: "400" }}>
        Designed and Developed by: <br /> <strong> Alif Haider </strong>
      </h6>
      <p style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}>
        Copyright © alifhaider57@gmail.com
      </p>
    </div>
  );
}

export default Footer;

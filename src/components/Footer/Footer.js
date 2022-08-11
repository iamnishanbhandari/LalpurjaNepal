import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaAngleDoubleRight,
  FaRegPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div
        className="footerBox"
        style={{
          height: "50vh",
          backgroundColor: "gray",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginLeft: "20px",
            paddingTop: "30px",
          }}
        >
          <div
            className="footerlogos"
            style={{
              width: "20vw",
              height: "40vh",
              padding: "20px",
            }}
          >
            <h2 style={{ fontWeight: "bold", fontSize: "40px" }}>
              Lalpurja Nepal
            </h2>
            <p>
              Modern Problem require ,<br></br> Modern Solution
            </p>
            <ul
              style={{
                fontSize: "25px",
                display: "flex",
                justifyContent: "space-around",
                margin: "10px 10px 0px -20px",
                cursor: "pointer",
              }}
            >
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaTiktok />
              </li>
            </ul>
          </div>
          <div className="quickLinks" style={{ width: "10vw" }}>
            <h2 style={{ margin: "8px", fontSize: "20px" }}>QuickLinks</h2>
            <ul>
              <li
                style={{
                  display: "flex",
                  alignItem: "center",
                  margin: "8px",
                  cursor: "pointer",
                }}
              >
                <FaAngleDoubleRight style={{ marginTop: "5px" }} /> Home
              </li>
              <li
                style={{
                  display: "flex",
                  alignItem: "center",
                  margin: "8px",
                  cursor: "pointer",
                }}
              >
                <FaAngleDoubleRight style={{ marginTop: "5px" }} /> Buyer
              </li>
              <li
                style={{
                  display: "flex",
                  alignItem: "center",
                  margin: "8px",
                  cursor: "pointer",
                }}
              >
                <FaAngleDoubleRight style={{ marginTop: "5px" }} /> Seller
              </li>
              <li
                style={{
                  display: "flex",
                  alignItem: "center",
                  margin: "8px",
                  cursor: "pointer",
                }}
              >
                <FaAngleDoubleRight style={{ marginTop: "5px" }} /> Community
              </li>
              <li
                style={{
                  display: "flex",
                  alignItem: "center",
                  margin: "8px",
                  cursor: "pointer",
                }}
              >
                <FaAngleDoubleRight style={{ marginTop: "5px" }} /> Blog
              </li>
              <li
                style={{
                  display: "flex",
                  alignItem: "center",
                  margin: "8px",
                  cursor: "pointer",
                }}
              >
                <FaAngleDoubleRight style={{ marginTop: "5px" }} /> Contact me
              </li>
            </ul>
          </div>
          <div className="support" style={{ width: "10vw" }}>
            <h2 style={{ margin: "8px", fontSize: "20px" }}>Support</h2>
            <ul>
              <li
                style={{
                  display: "flex",
                  alignItem: "center",
                  margin: "8px",
                  cursor: "pointer",
                }}
              >
                <FaAngleDoubleRight style={{ marginTop: "5px" }} /> Privacy
                Policy
              </li>
              <li
                style={{
                  display: "flex",
                  alignItem: "center",
                  margin: "8px",
                  cursor: "pointer",
                }}
              >
                <FaAngleDoubleRight style={{ marginTop: "5px" }} /> Terms &
                Condition
              </li>
              <li
                style={{
                  display: "flex",
                  alignItem: "center",
                  margin: "8px",
                  cursor: "pointer",
                }}
              >
                <FaAngleDoubleRight style={{ marginTop: "5px" }} /> 24/7
                HelpLine
              </li>
              <li
                style={{
                  display: "flex",
                  alignItem: "center",
                  margin: "8px",
                  cursor: "pointer",
                }}
              >
                <FaAngleDoubleRight style={{ marginTop: "5px" }} /> FAQs
              </li>
            </ul>
          </div>
          <div className="stayConnected" style={{ width: "20vw" }}>
            <h2 style={{ fontSize: "25px", margin: "5px" }}>Stay Connected</h2>
            <p style={{ fontSize: "15px", marginTop: "10px" }}>
              Be First to Know about Latest Update
            </p>
            <div
              style={{
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type={"email"}
                placeholder="Your Email Address"
                style={{ padding: "2px" }}
              ></input>
              <div
                style={{
                  backgroundColor: "green",
                  padding: "2px",
                  width: "30px",
                  height: "34px",
                }}
              >
                <button>
                  {" "}
                  <FaRegPaperPlane style={{ marginTop: "5px" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

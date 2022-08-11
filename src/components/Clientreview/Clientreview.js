import React from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar, FaCircle } from "react-icons/fa";

const Clientreview = () => {
  return (
    <div
      style={{
        // outline: "1px solid red",
        height: "80vh",
        width: "100vw",
        margin: "15px 0px 0px 5px",
        display: "flex",
        justifyContent: "space-around",
        gap: "40px",
      }}
    >
      <div
        style={{
          width: "50vw",
          backgroundColor: "whitesmoke",
          marginBottom: "10px",
        }}
      >
        <h1 style={{ fontSize: "25px", textAlign: "center" }}>
          <span>
            <td
              style={{
                borderLeft: "thick solid gold",
                height: "40px",
                padding: "2px",
              }}
            ></td>
          </span>
          Our Client Review
        </h1>
        <p
          style={{
            display: "flex",
            gap: "4px",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          <FaQuoteLeft
            style={{ margin: "5px", color: "#EEBC1D", fontSize: "20px" }}
          />
          very relible...
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus{" "}
          <br />
          interdum eget mi quis fringilla. Fusce pulvinar urna massa, ut semper
          <br />
          libero imperdiet sed. Sed arcu augue, cursus id faucibus commodo,
          <br />
          maximus in tellus.
          <span>
            <FaQuoteRight />
          </span>
        </p>
        <p style={{ display: "flex", margin: "10px", fontSize: "20px" }}>
          <span style={{ fontWeight: "bold" }}>Mac.</span>from Bravo
          <ul style={{ display: "flex", color: "#FFB302", marginLeft: "8px" }}>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
          </ul>
        </p>
        <div>
          <ul style={{ display: "flex", gap: "5px", margin: "30px" }}>
            <li>
              <FaCircle />
            </li>
            <li>
              <FaCircle />
            </li>{" "}
            <li>
              <FaCircle />
            </li>{" "}
            <li>
              <FaCircle />
            </li>{" "}
            <li>
              <FaCircle />
            </li>
          </ul>
        </div>
        <hr></hr>
        <div>
          <h1 style={{ fontSize: "25px", margin: "10px" }}>
            <span>
              <td
                style={{
                  borderLeft: "thick solid gold",
                  height: "40px",
                  padding: "5px",
                }}
              ></td>
            </span>
            Follow Us
          </h1>
          <div style={{}}>
            <ul
              style={{
                display: "flex",
                height: "25vh",
                gap: "10px",
                flexWrap: "wrapreverse",
              }}
            >
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgkWCo07VxXxcci_ygQ1ctPT_kTULIVSu2Og&usqp=CAU"
                  alt="buildingimages"
                ></img>
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgkWCo07VxXxcci_ygQ1ctPT_kTULIVSu2Og&usqp=CAU"
                  alt="buildingimages"
                ></img>
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgkWCo07VxXxcci_ygQ1ctPT_kTULIVSu2Og&usqp=CAU"
                  alt="buildingimages"
                ></img>
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgkWCo07VxXxcci_ygQ1ctPT_kTULIVSu2Og&usqp=CAU"
                  alt="buildingimages"
                ></img>
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgkWCo07VxXxcci_ygQ1ctPT_kTULIVSu2Og&usqp=CAU"
                  alt="buildingimages"
                ></img>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          width: "30vw",
          marginBottom: "10px",
        }}
      >
        <h1 style={{ fontSize: "25px", textAlign: "center" }}>
          <span>
            <td
              style={{
                borderLeft: "thick solid gold",
                height: "40px",
                padding: "2px",
              }}
            ></td>
          </span>
          Get in Touch
        </h1>
        <p style={{ fontSize: "15px", color: "grey", marginLeft: "20px" }}>
          Fill up the form below and we will back within 24 hours around <br />
          We are <span style={{ fontWeight: "bold" }}>24/7/365 </span> online
          service.
        </p>
        <p
          style={{ fontWeight: "bold", textAlign: "center", marginTop: "5px" }}
        >
          I am a <span style={{ fontWeight: "lighter" }}> Buyer </span>{" "}
          <span style={{ fontWeight: "lighter" }}> seller</span>
        </p>
        <div
          style={{ height: "62vh", width: "auto", margin: "10px 0px 0px 80px" }}
        >
          <input
            type={"text"}
            placeholder="Name"
            style={{
              border: "1px solid grey",
              outline: "none",
              width: "65%",
              height: "50px",
              margin: "10px",
              padding: "5px",
            }}
          ></input>
          <input
            type={"text"}
            placeholder="Email"
            style={{
              border: "1px solid grey",
              outline: "none",
              width: "65%",
              height: "50px",
              padding: "5px",
              margin: "10px",
            }}
          ></input>
          <input
            type={"text"}
            placeholder="Phone Number"
            style={{
              border: "1px solid grey",
              outline: "none",
              width: "65%",
              height: "50px",
              margin: "10px",
              padding: "5px",
            }}
          ></input>
          <input
            type={"text"}
            placeholder="Messages"
            style={{
              border: "1px solid grey",
              outline: "none",
              width: "65%",
              height: "100px",
              padding: "5px",
              margin: "10px",
            }}
          ></input>
          <p style={{ fontColor: "grey" }}>
            I agree with
            <span style={{ fontWeight: "bold" }}> Terms & Condition</span>
          </p>
          <button
            style={{
              backgroundColor: "gold",
              borderRadius: "8px",
              color: "white",
              height: "50px",
              width: "120px",
              fontSize: "20px",
              fontWeight: "bold",
              margin: "10px",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clientreview;

import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const BuySell = () => {
  return (
    <div
      style={{
        height: "85vh",
        backgroundImage: `url("https://i.pinimg.com/originals/85/6f/31/856f31d9f475501c7552c97dbe727319.jpg")`,
      }}
    >
      <div
        style={{
          margin: "auto",
          height: "15vh",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <h1 style={{ fontSize: "30px" }}>Hello!! How can I help You?</h1>
        <p style={{ color: "grey", marginTop: "10px" }}>
          Hey Whats up all good !! <br /> Long time no see whats up !!
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "25px 30px 0px 35px",
          gap: "60px",
          height: "60vh",
        }}
      >
        <div style={{ width: "50vw", textAlign: "center" }}>
          <div>
            <img
              src="https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2022/1/27/4-cent-trivandrum-home-view.jpg"
              alt="building"
              style={{ height: "30vh", width: "70%", margin: "auto" }}
            ></img>
            <h2 style={{ fontSize: "25px" }}>
              I am <span style={{ fontWeight: "bold" }}>Seller</span>
            </h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              <br />
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              <br />
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              <br />
              dicta sunt explicabo.
            </p>
            <button
              style={{
                backgroundColor: "gold",
                color: "Black",
                borderRadius: "8px",
                height: "45px",
                width: "150px",
                margin: "auto",
                marginTop: "15px",
                fontWeight: "bolder",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              Process Guide <FaAngleDoubleRight />
            </button>
          </div>
        </div>
        <div style={{ width: "50vw", textAlign: "center" }}>
          <img
            src="https://nepalhomesearch.com/wp-content/uploads/2020/05/nepal_home_search101-1.jpg"
            alt="building"
            style={{ height: "30vh", width: "50%", margin: "auto" }}
          ></img>
          <h2 style={{ fontSize: "25px" }}>
            I am <span style={{ fontWeight: "bold" }}>Buyer</span>
          </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            <br />
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            <br />
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            <br />
            dicta sunt explicabo.
          </p>
          <button
            style={{
              backgroundColor: "black",
              color: "yellow",
              borderRadius: "8px",
              height: "45px",
              width: "150px",
              margin: "auto",
              marginTop: "15px",
              fontWeight: "bolder",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            Process Guide <FaAngleDoubleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuySell;

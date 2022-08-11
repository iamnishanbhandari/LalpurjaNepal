import React from "react";
// import Hero from "../Hero/Hero";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="backgroundImg">
          <div className="navBar flex justify-around 	">
            <div className="logo  ">
              <img src="/images/logo.png" alt="img" className="h-12" />
            </div>
            <div className="navItems  ">
              <ul className="flex  gap-10 mt-2  ">
                <li className="cursor-pointer p-2 hover:text-yellow-400">
                  Buyers{" "}
                </li>
                <li className="cursor-pointer p-2 hover:text-yellow-400">
                  Sellers{" "}
                </li>
                <li className="cursor-pointer p-2 hover:text-yellow-400">
                  Blogs{" "}
                </li>
                <li className="cursor-pointer p-2 hover:text-yellow-400">
                  Community{" "}
                </li>
                <li className="bg-yellow-400 p-2 rounded-md">
                  <button>Speak with me</button>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p
              className
              style={{
                fontSize: "70px",
                color: "white",
                fontFamily: "initial",
                width: "fit-content",
                position: "relative",
                top: "120px",
                left: "120px",
              }}
            >
              TOP RATED <b>Relator</b> <br />
              <label
                style={{
                  fontFamily: "initial",
                  margin: "20px",
                }}
              >
                In Kathmandu Valley
              </label>
              <br></br>
              <label
                style={{
                  fontSize: "20px",
                  position: "absolute",
                  marginLeft: "15px",
                  color: "grey",
                }}
              >
                we are best at our work No one can compete with us we are <br />{" "}
                king of the world and king of the game
              </label>
            </p>
            <div
              style={{
                borderRadius: "12px",
                backgroundColor: "#FFB300",
                width: "fit-content",
                position: "relative",
                top: "200px",
                left: "200px",
              }}
            >
              <button
                style={{
                  color: "black",
                  height: "60px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  padding: "10px",
                }}
              >
                Speak with me
              </button>
            </div>
            <div>
              <img
                src="/images/sanjay.png"
                alt="sanjay"
                style={{
                  height: "-webkit-fill-available",
                  position: "absolute",
                  marginTop: "40px",
                  left: "955px",
                  top: "0px",
                  width: "-webkit-fill-available",
                }}
              ></img>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320 "
                style={{ marginTop: "58px" }}
              >
                <path
                  fill="#FFB300 "
                  fill-opacity="1"
                  d="M0,192L1440,224L1440,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

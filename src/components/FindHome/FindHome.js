import React from "react";
import { FaMapMarkerAlt, FaRegCalendarAlt, FaColumns } from "react-icons/fa";

const FindHome = () => {
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        height: "80vh",
        margin: "5px",
        fontWeight: "bold",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "40px",
          alignItems: "center",
          margin: "10px",
          paddingTop: "5px",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "lighter",
          }}
        >
          Find Your New Home
        </h1>
        <ul style={{ display: "flex", gap: "30px", color: "grey" }}>
          <li style={{ cursor: "pointer" }}>All</li>
          <li style={{ cursor: "pointer" }}>Bungalow</li>
          <li style={{ cursor: "pointer" }}>Type 1</li>
          <li style={{ cursor: "pointer" }}>Type 2</li>
          <li style={{ cursor: "pointer" }}>Type 3</li>
          <li style={{ cursor: "pointer" }}>Type 4</li>
        </ul>
      </div>
      <hr></hr>
      <div
        style={{
          height: "70vh",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            margin: "10px",
            width: "25%",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <div>
            <img
              src="https://i.ytimg.com/vi/knXxbZqLlgA/maxresdefault.jpg"
              alt="houseimage"
              style={{
                height: "25vh",
                margin: "10px",
              }}
            ></img>
            <p
              style={{
                marginLeft: "10px",
              }}
            >
              Khatra lorem house
            </p>
            <p
              style={{
                fontWeight: "lighter",
                textAlign: "start",
                margin: "10px",
                color: "grey",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing <br></br>
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <div
              style={{ margin: "10px", fontWeight: "lighter", color: "grey" }}
            >
              <p style={{ display: "flex", gap: "5px" }}>
                <FaMapMarkerAlt style={{ margin: "2px", color: "golden" }} />
                Sanepa,Lalitpur
              </p>
              <p style={{ display: "flex", gap: "5px" }}>
                <FaRegCalendarAlt style={{ margin: "2px", color: "golden" }} />4
                Bedroom , 2 Bathroom
              </p>
              <p style={{ display: "flex", gap: "5px" }}>
                <FaColumns style={{ margin: "2px", color: "golden" }} />
                1,464 sq.km
              </p>
              <button
                style={{
                  border: "1px solid",
                  height: "40px",
                  width: "120px",
                  marginTop: "10px",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                View Details
              </button>
            </div>
          </div>
          {/* <FindHome /> */}
        </div>
        <div
          style={{
            width: "25%",
            margin: "10px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <div>
            <img
              src="https://i.ytimg.com/vi/knXxbZqLlgA/maxresdefault.jpg"
              alt="houseimage"
              style={{
                height: "25vh",
                margin: "10px",
              }}
            ></img>
            <p
              style={{
                marginLeft: "10px",
              }}
            >
              Khatra lorem house
            </p>
            <p
              style={{
                fontWeight: "lighter",
                textAlign: "start",
                margin: "10px",
                color: "grey",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing <br></br>
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <div
              style={{ margin: "10px", fontWeight: "lighter", color: "grey" }}
            >
              <p style={{ display: "flex", gap: "5px" }}>
                <FaMapMarkerAlt style={{ margin: "2px", color: "golden" }} />
                Sanepa,Lalitpur
              </p>
              <p style={{ display: "flex", gap: "5px" }}>
                <FaRegCalendarAlt style={{ margin: "2px", color: "golden" }} />4
                Bedroom , 2 Bathroom
              </p>
              <p style={{ display: "flex", gap: "5px" }}>
                <FaColumns style={{ margin: "2px", color: "golden" }} />
                1,464 sq.km
              </p>
              <button
                style={{
                  border: "1px solid",
                  height: "40px",
                  width: "120px",
                  marginTop: "10px",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                View Details
              </button>
            </div>
          </div>{" "}
        </div>
        <div
          style={{
            width: "25%",
            margin: "10px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <div>
            <img
              src="https://i.ytimg.com/vi/knXxbZqLlgA/maxresdefault.jpg"
              alt="houseimage"
              style={{
                height: "25vh",
                margin: "10px",
              }}
            ></img>
            <p
              style={{
                marginLeft: "10px",
              }}
            >
              Khatra lorem house
            </p>
            <p
              style={{
                fontWeight: "lighter",
                textAlign: "start",
                margin: "10px",
                color: "grey",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing <br></br>
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <div
              style={{ margin: "10px", fontWeight: "lighter", color: "grey" }}
            >
              <p style={{ display: "flex", gap: "5px" }}>
                <FaMapMarkerAlt style={{ margin: "2px", color: "golden" }} />
                Sanepa,Lalitpur
              </p>
              <p style={{ display: "flex", gap: "5px" }}>
                <FaRegCalendarAlt style={{ margin: "2px", color: "golden" }} />4
                Bedroom , 2 Bathroom
              </p>
              <p style={{ display: "flex", gap: "5px" }}>
                <FaColumns style={{ margin: "2px", color: "golden" }} />
                1,464 sq.km
              </p>
              <button
                style={{
                  border: "1px solid",
                  height: "40px",
                  width: "120px",
                  marginTop: "10px",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                View Details
              </button>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default FindHome;

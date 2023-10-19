import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "./Usecontext";

function UseEffect() {
  const [timer, setTimer] = useState("");
  const [users, setUsers] = useState([]);
  const { isDarkMode } = useDarkMode();
  // useEffect(() => {
  //   console.log(data.users);
  // }, [data]);

  useEffect(() => {
    setInterval(() => {
      setTimer(dayjs().format("HH:mm:ss"));
    }, 1000);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        console.log("Response", response);
        setUsers(response.data.users);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="App mt-3">
        <h1>UseEffect</h1>
        <hr className="mb-4" />
        <div
          className={` container col-md-8 ${
            isDarkMode ? "container1" : "container2"
          }`}
          style={{
            padding: "40px 60px",
          }}
        >
          <h3>Live Time</h3>
          <h3>{timer}</h3>
        </div>
        <br />
        <br />
        <div
          className={` container col-md-8 ${
            isDarkMode ? "container1" : "container2"
          }`}
          style={{
            padding: "40px 60px",
          }}
        >
          <h3>Calling API</h3>
          <div className="group mt-3  m-2 row row-cols-2">
            {users?.map((item) => (
              <div
                className={` card  ${isDarkMode ? "container2" : "container1"}`}
                key={item.id}
              >
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.username}</h5>
                  <p className="card-text">
                    Name :- {item.firstName} {item.maidenName} {item.lastName}{" "}
                    <br />
                    Email :- {item.email} <br />
                    Phone:-{item.phone}
                  </p>
                  <button className="btn btn-primary">
                    {" "}
                    <Link
                      to="/details"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {" "}
                      More Details...{" "}
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br /> <br />
      </div>
    </div>
  );
}

export default UseEffect;

// const [counDown, setCounDown] = useState("");
// const fixDate = dayjs("10-23-2023 18:00:00");
// useEffect(() => {
//   console.log(fixDate);
// }, []);
//   useEffect(() => {
//     setInterval(() => {
//       const now = dayjs();
//       const distance = fixDate - now;
//       const month = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
//       const day = Math.floor(
//         (distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
//       );
//       const hour = Math.floor(
//         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//       );
//       const minute = Math.floor((distance % (100 * 60 * 60)) / (1000 * 60));
//       const second = Math.floor((distance % (1000 * 60)) / 1000);
//     }, 1000);
//   }, []);

import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

function UseEffect() {
  const [timer, setTimer] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setTimer(dayjs().format("HH:mm:ss"));
    }, 1000);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="App mt-3">
        <h1>UseEffect</h1>
        <hr className="mb-4" />
        <div
          className="container col-md-8"
          style={{
            backgroundColor: "#282c34",
            color: "white",
            padding: "40px 60px",
          }}
        >
          <h3>Live Time</h3>
          <h3>{timer}</h3>
        </div>
        <br />
        <br />
        <div
          className="container col-md-8 mt-5"
          style={{
            backgroundColor: "#282c34",
            color: "white",
            padding: "40px 60px",
          }}
        >
          <h3>Calling API</h3>

          {/* <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul> */}
          {
            <div className="group mt-3 m-2 row row-cols-2">
              {data.map((item) => (
                <div className="card" key={item.id}>
                  <div className="card-body">
                    <h5 className="card-title">{item.username}</h5>
                    <p className="card-text">
                      Name :- {item.name} <br />
                      Email : - {item.email} <br />
                      Phone :- {item.phone} <br />
                      Web :- {item.website}
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              ))}
            </div>
          }
        </div>
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

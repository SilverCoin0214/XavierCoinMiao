import React, { useEffect } from "react";
import axios from "axios";

function App() {
  // useEffect(() => {
  //   axios({
  //     url: "https://httpbin.org/get",
  //     params: {
  //       name: "sce",
  //       age: 18,
  //     },
  //     method: "get",
  //   })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   axios({
  //     url: "https://httpbin.org/post",
  //     data: {
  //       name: "post",
  //       age: 18,
  //     },
  //     method: "post",
  //   })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://httpbin.org/get", {
  //       params: {
  //         name: "sce",
  //         age: 20,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   axios
  //     .post("https://httpbin.org/post", {
  //       name: "post",
  //       age: 20,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    const request1 = axios.get("/get", {
      params: {
        name: "get",
        age: 200,
      },
    });

    const request2 = axios.post("/post", {
      name: "post",
      age: 20,
    });

    axios
      .all([request1, request2])
      .then(([res1, res2]) => {
        console.log(res1);
        console.log(res2);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>fuck</div>;
}

export default App;

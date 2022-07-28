import React, { useState, useEffect } from "react";
import { DatePicker, Input, message } from "antd";
import { useQuery } from "@tanstack/react-query";
import "antd/dist/antd.css";
import Home from "./Home";

function App() {
  const [date, setDate] = useState();
  const [inputVal, setInputVal] = useState();
  const handleChange = (value) => {
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(
      value._d.toLocaleDateString("en-GB").split("/").reverse().join("-")
    );
  };

  const { data, isLoading, error, isError } = useQuery("movies", () =>
    fetch("http://15.164.163.31:8000/movies")
  );

  const changeInput = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <>
      <Input onChange={changeInput} value={inputVal} />
      <DatePicker onChange={handleChange} format="YY-MM-DD" />
      날짜: {date}
      <Home />
    </>
  );
}

export default App;

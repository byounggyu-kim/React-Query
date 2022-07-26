import React, { useState } from "react";
import { DatePicker, Input, message } from "antd";
import { QueryClientProvider, QueryClient } from "react-query";
import "antd/dist/antd.css";
import Home from "./Home";

function App() {
  // const BASE_URL = "http://15.164.163.31:8000";
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

  const changeInput = (e) => {
    setInputVal(e.target.value);
  };

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <Input onChange={changeInput} value={inputVal} /> */}
      {/* <DatePicker onChange={handleChange} format="YY-MM-DD" /> */}
      <Home />
    </QueryClientProvider>
  );
}

export default App;

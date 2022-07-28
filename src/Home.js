import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data, isLoading, isFetching } = useQuery("movies", () =>
    fetch("http://15.164.163.31:8000/movies").then((res) => console.log(res))
  );
  //   useEffect(() => {
  //     fetch("http://15.164.163.31:8000/movies")
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, []);
  // console.log(isFetching);
  return <div>Home</div>;
};

export default Home;

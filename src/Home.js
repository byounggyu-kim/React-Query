import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const Home = () => {
  const result = useQuery("movieList", () =>
    axios("http://swapi.dev/api/people/1/")
  );
  //   useEffect(() => {
  //     fetch("http://15.164.163.31:8000/movies")
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, []);
  // console.log(isFetching);
  console.log(result, "ㄷ데이터야 들ㅓㅘ");
  return <div>Home</div>;
};

export default Home;

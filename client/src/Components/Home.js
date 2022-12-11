//import { useEffect, useState } from "react";
import Houses from "./Houses/Houses";
import React from 'react'


function Home({ user, houses }) {
  // const [house, setHouses] = useState([]);

  // useEffect(() => {
  //   fetch(`/houses`)
  //     .then((res) => res.json())
  //     .then((houseInfo) => {
  //       setHouses(houseInfo);
  //     });
  // }, []);


  if (user) {
    return (
      <>
        <div className="container">
          <div className="w-20 bg-black text-white text-center">
            <h2 className="pt-4">Welcome, {user.username}, and find</h2>
            <h2 className="pb-4">yourself a house to build a home</h2>
          </div>
          <Houses houses={houses}/>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h1>login sign up</h1>
        </div>
      </>
    );
  }
}

export default Home;

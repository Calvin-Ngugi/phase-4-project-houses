import { useEffect, useState } from "react";
import Houses from "./Houses/Houses";

// const inline = {
//   display: "flex",
//   text: "900px"
// }


function Home({ user }) {
  const [house, setHouses] = useState([]);

  useEffect(() => {
    fetch(`/houses`)
      .then((res) => res.json())
      .then((houseInfo) => {
        setHouses(houseInfo);
      });
  }, []);


  if (user) {
    return (
      <>
        <div className="container bg-green-900">
          <div className="w-20 bg-black text-white text-center">
            <h2 className="pt-4">Welcome, {user.username}, and find</h2>
            <h2 className="pb-4">yourself a house to build a home</h2>
          </div>
          <Houses house={house}/>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <div className="text-center">
            <h1>Choose us Everyday!</h1>
            <p className="pt-5 mb-20 text-4xl">OasisHomes is an exclusive chic estate of contemporary more than one </p>
            <p className="text-2xl">bedroom apartments sitting on 12 acres at the heart of Nairobi. The cool balconies, </p>
            <p>glass railings and floor to ceiling double-leaf doors make most of the homes’ spectacular </p>
            <p>panoramic views to the park and the community’s expansive outdoor amenities </p>
            <p>which are close by. Each apartment boasts of calming natural palettes and a modern kitchen </p>
            <p className="text-5xl">giving a lovely and quality indoor experience.</p>
            <h2 className="font-extrabold">Please Login or Sign Up</h2>
          </div>
        </div>
      </>
    );
  }
}

export default Home;

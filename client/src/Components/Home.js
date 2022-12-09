import { useEffect, useState } from "react";
import Houses from "./Houses/Houses";

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
        <div className="container">
          <div className="w-20 bg-black text-white text-center">
            <h2 className="pt-4">Welcome, {user.username}, and find</h2>
            <h2 className="pb-4">yourself a house to build a home</h2>
          </div>
          <Houses house={house}/>
        </div>
      </>
    );
  } else {
    return <h2>Please Login or Sign Up</h2>;
  }
}

export default Home;

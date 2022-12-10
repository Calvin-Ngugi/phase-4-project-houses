import React from'react';
import Houses from "./Houses/Houses";

function Home({ user, houses}) {

  if (user) {
    return (
      <>
        <div className="container">
          <h2>Welcome, {user.username}, and find</h2>
          <h2>yourself a house to build a home</h2>
          <Houses houses={houses}/>
        </div>
      </>
    );
  } else {
    return <h2>Please Login or Sign Up</h2>;
  }
}

export default Home;

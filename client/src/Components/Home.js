import Footer from "./Footer";
function Home({ user }) {
    if (user) {
      return (
      <>
      <div className="container"> 
        <h2>Welcome, {user.username}, and find</h2>
        <h2>yourself a house to build a home</h2>
      </div>
      </>
      );
    } else {
      // <h2>Please Login or Sign Up</h2>;
      return  <Footer/>
    }
  }
  
  export default Home;
  
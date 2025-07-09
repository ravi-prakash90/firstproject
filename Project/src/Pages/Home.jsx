import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Accordians from "../Components/Accordians";
import Axis from "../Components/Axis"

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-center text-lg font-bold">Welcome to Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          commodi doloremque ut dolorem temporibus aspernatur facilis, impedit
          quam reiciendis dicta molestias aliquid? Culpa illo quo ullam
          laudantium sit quae nisi, veritatis, esse atque quia laborum molestias
          quaerat commodi ipsam non iusto nesciunt animi dignissimos? Quae error
          voluptatibus nisi totam dolorum?
        </p>
      </div>
      <Axis/>
     <Accordians/>
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Chart from "../Components/Chart"
import Legend from "../Components/Legend"
const Contact = () => {
  return (
  <>
       <Navbar />
    <div>
        <h1 className="flex justify-center text-center font-bold text-lg">Welcome to Contact Component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        commodi doloremque ut dolorem temporibus aspernatur facilis, impedit
        quam reiciendis dicta molestias aliquid? Culpa illo quo ullam laudantium
        sit quae nisi, veritatis, esse atque quia laborum molestias quaerat
        commodi ipsam non iusto nesciunt animi dignissimos? Quae error
        voluptatibus nisi totam dolorum?
      </p>
    </div>

    <Chart/>
   <Legend/>
     <Footer />
    </>
  );
};

export default Contact;

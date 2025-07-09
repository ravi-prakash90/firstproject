import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Uidemo1 from "../Components/Uidemo1"

const About = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="flex justify-center text-center font-bold text-lg p-4">Welcome to About</h1>
        
      </div>
     <div className="flex gap-10 justify-around p-4">
       <Uidemo1/>
      <Uidemo1/>
      <Uidemo1/>
     </div>
      <Footer />
      
    </>
  );
};
export default About;

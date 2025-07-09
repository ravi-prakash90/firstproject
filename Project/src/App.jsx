import { Routes, Route } from "react-router-dom";
import "./App.css";

import DataTable from "./Components/DataTable";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import TableUse from "./Components/TableUse"
import Uidemo from "./Components/Uidemo"
import Uidemo1 from "./Components/Uidemo1"
import Chart from "./Components/Chart"

function App() {
  return (
    <>
     
      

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dataTable" element={<DataTable />} />
        <Route path="/tableuse" element={<TableUse />} />
        <Route path="/Uidemo" element={<Uidemo />} />
        <Route path="/Uidemo1" element={<Uidemo1 />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>


    </>
  );
}

export default App;

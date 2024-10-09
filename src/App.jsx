import { useLocationContext } from "./Context/Location";
import Navbar from "./Components/Navbar/Navbar";
import Banner1 from "./Components/Banner/Banner1";
import Zymo from "./Components/Zymo/Zymo";
import Benefits from "./Components/Benefits/Benefits";
import Refer from "./Components/Refer/Refer";
import Cars from "./Components/Cars/Cars";
import Featured from "./Components/Featured/Featured";
import Reviews from "./Components/Reviews/Reviews";
import Youtube from "./Components/Youtube/Youtube";
import Faq from "./Components/FAQ/Faq";
import Footer from "./Components/Footer/Footer";
import CarRentalComponent from "./Components/Footer/CarRentalComponent";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cars_page from "./Pages/Cars"
import SelectLocation from "./Components/SelectLocation/Select";

function App() {
  const { location, setLocation } = useLocationContext();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars/:id" element={<Cars_page/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;


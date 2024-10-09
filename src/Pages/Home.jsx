import React from "react";
import Banner1 from "../Components/Banner/Banner1";
import Zymo from "../Components/Zymo/Zymo";
import Benefits from "../Components/Benefits/Benefits";
import Refer from "../Components/Refer/Refer";
import Cars from "../Components/Cars/Cars";
import Featured from "../Components/Featured/Featured";
import Reviews from "../Components/Reviews/Reviews";
import Youtube from "../Components/Youtube/Youtube";
import Faq from "../Components/FAQ/Faq";
import Navbar from "../Components/Navbar/Navbar"
import CarRentalComponent from "../Components/Footer/CarRentalComponent";
import SelectLocation from "../Components/SelectLocation/Select";

import { useLocationContext } from "../Context/Location";
import CarRentalSearch from "../Components/CarRentalSearch/CarRentalSearch";

const Home = () => {
  const { location , setLocation} = useLocationContext();
  return (
    <>
      {location === "Delhi" && (
        <>
          <SelectLocation />
        </>
      )}
      <div
        className={location === "Delhi" ? "pointer-events-none opacity-95" : ""}
      >
        <button
          onClick={() => {
            setLocation("Delhi");
          }}
        >
          change
        </button>
        <Navbar />
        <CarRentalSearch />
        <Banner1 />
        <Zymo />
        <Benefits />
        <Refer />
        <Cars />
        <Featured />
        <Reviews />
        <Youtube />
        <Faq />
        <CarRentalComponent />
      </div>
    </>
  );
};

export default Home;

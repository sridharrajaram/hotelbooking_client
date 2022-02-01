import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Contact from "../components/contact";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner
          tittle="ROOMS AT YOUR BUDGET"
          subtitle="convinient and comfort rooms starts at 1000INR"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <FeaturedRooms />
      <Contact />
    </>
  );
};

export default Home;

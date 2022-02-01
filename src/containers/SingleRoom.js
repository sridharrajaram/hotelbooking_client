import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomWithId from "../components/RoomWithId";

const SingleRoom = () => {
  return (
    <>
      <Hero hero="singleHero">
        <Banner tittle="Your selected Room">
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </Banner>
      </Hero>
      <RoomWithId />
    </>
  );
};

export default SingleRoom;

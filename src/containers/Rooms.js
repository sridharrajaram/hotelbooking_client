import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import axios from "axios";
import Rooms from "../components/Room";
import { API } from "../config";

const RoomsPage = () => {
  const [rooms, setRooms] = useState([{}]);

  useEffect(() => {
    axios
      .get(`${API}/rooms`)
      .then((res) => setRooms(res.data))
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <>
      <Hero hero="roomsHero">
        <Banner tittle="Our Rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <section className="featured-rooms">
        <Rooms rooms={rooms} />
      </section>
    </>
  );
};

export default RoomsPage;

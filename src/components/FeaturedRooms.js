import React, { useEffect, useState } from "react";
import Title from "./Title";
import axios from "axios";
import Rooms from "./Room";
import { API } from "../config";


const FeaturedRooms = () => {
  
  const [rooms, setRooms] = useState([{}]);

  useEffect(() => {
    axios
      .get(`${API}/rooms`)
      .then((res) => setRooms(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="featured-rooms">
      <Title title="Featured Rooms" />
      <Rooms rooms={rooms} />
    </section>
  );
};

export default FeaturedRooms;

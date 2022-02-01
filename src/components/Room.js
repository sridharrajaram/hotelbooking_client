import React from "react";
import { Link } from "react-router-dom";

function Room({ rooms }) {
  console.log(rooms);
  return (
    <div className="featured-rooms-center">
      {rooms.map((room, key) => (
        <article className="room">
          <div className="img-container">
            <img src={room.image} alt="rooms" />
            <div className="price-top">
              <h6>INR{room.price}</h6>
              <p>per night</p>
            </div>

            <Link to={`/rooms/${room._id}`} className="btn-primary room-link">
              Features
            </Link>
          </div>
          <p className="room-info">{room.roomtype}</p>
        </article>
      ))}
    </div>
  );
}

export default Room;

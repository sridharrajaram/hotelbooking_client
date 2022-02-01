import React, { useState } from "react";
import Title from "./Title";
import { FaPhoneAlt, FaMapMarker, FaMailchimp } from "react-icons/fa";

export default function Contact() {
  const services = [
    {
      icon: <FaPhoneAlt />,
      title: "Contact Us",
      info: "Phone:98xxxxxxx",
    },
    {
      icon: <FaMailchimp />,
      title: "Write To Us",
      info: "Mail:hotelbooxxxg@gxxxx.inxx",
    },
    {
      icon: <FaMapMarker />,
      title: "Address",
      info: "Hosur Estates",
    },
  ];
  const [state] = useState(services);

  return (
    <section className="services">
      <Title title="Contact" />
      <div className="services-center">
        {state.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

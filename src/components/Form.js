import React, { useState } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { API } from "../config";

const BookingForm = () => {

  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState("");
  const [roombooking, setRoombooking] = useState(false);

  const [customer, setCustomer] = useState({
    customerName: "",
    email: "",
    phoneNumber: "",
    govtidentityProof: "",
  });

  const handleCustomer = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };
  
  const handleRoom = (e) => {
    setRooms([...rooms, e.target.value]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      customer,
      rooms,
    };
    try {
      const infoToBook = await fetch(
        `${API}/customers/addNewCustomer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const response = await infoToBook.status;
      setRoombooking(true);
      return response === 400
        ? setError("please check the input the fields correctly")
        : null;
    } catch (err) {
      return err;
    }
  };

  return (
    <>
      <Hero hero="roomsHero">
        <Banner tittle="Book Your Room Now">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>

      {roombooking ? (
        <h5>
          {error
            ? error
            : "Booking successful "}
        </h5>
      ) : (
        <>
          <h3 className="book">Fill the Form To Book Your Room</h3>
          <form className="bookingform" onSubmit={handleSubmit}>
            <label htmlFor="customerName">Customer Name:</label>
            <input
              type="text"
              name="customerName"
              placeholder="Enter Name"
              value={customer.customerName}
              id="NameInput"
              onChange={handleCustomer}
              required
            />
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={customer.email}
              id="EmailInput"
              onChange={handleCustomer}
              required
            />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="Number"
              name="phoneNumber"
              placeholder="Enter Phone number"
              value={customer.phoneNumber}
              id="PhoneInput"
              onChange={handleCustomer}
              required
            />
            <label htmlFor="govtidentityProof">Govt Identity Proof:</label>
            <input
              type="Number"
              name="govtidentityProof"
              placeholder="Enter ID Proof Number"
              value={customer.govtidentityProof}
              id="govtIdentityInput"
              onChange={handleCustomer}
              required
            />
            <label htmlFor="RoomType">
              Select Room Type:
              <select multiple={true} value={rooms} onChange={handleRoom}>
                <option value="61f97652dfcf27cab603b620">
                  DELUX DOUBLE ROOM
                </option>
                <option value="61f977a0dfcf27cab6055f38">
                  DELUX SINGLE ROOM
                </option>
                <option value="61f97584dfcf27cab602aa1e">
                  LUXURY SINGLE ROOM
                </option>
                <option value="61f97772dfcf27cab60525d9">
                  LUXURY DOUBLE ROOM
                </option>
              </select>
            </label>

            <button type="submit" className="btn-info-form">
              {" "}
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default BookingForm;

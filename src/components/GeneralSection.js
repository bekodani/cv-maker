import React, { useState } from "react";
import Preview from './Preview';

const GeneralSection = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    title: "Webdevolper",
    address: "Address",
    email: "email@email.com",
    phone: "+0123456789",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  });
  const [editMode, setEditMode] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => {
      let newInfo = { ...prevInfo, [name]: value };
      return newInfo;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode((prevMode) => !prevMode);
  };


  const { firstName, lastName, title, address, email, phone, about } = personalInfo;

  



  if (!editMode) {
    return (
      <Preview
        firstName={firstName}
        lastName={lastName}
        title={title}
        address={address}
        email={email}
        phone={phone}
        about={about}
        handleEdit={handleSubmit}
      />
    );
  }  

  return (

      <section className="generalSection">

        <form className="section" action="" onSubmit={handleSubmit}>
          <label>
          <p>First name:</p>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              defaultValue={firstName}
              required
            />
          </label>

          <label>
          <p>Last name:</p>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              defaultValue={lastName}
              required
            />
          </label>

          <label>
            <p>Title:</p>
            <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={handleChange}
              defaultValue={title}
              required
            />
          </label>

          <label>
            <p>Address:</p>
            <input
              type="text"
              placeholder="Address"
              name="address"
              onChange={handleChange}
              defaultValue={address}
              required
            />
          </label>

          <label>
            <p>E-mail:</p>
            <input
              type="text"
              placeholder="E-mail"
              name="email"
              onChange={handleChange}
              defaultValue={email}
              required
            />
          </label>

          <label>
            <p>Phone:</p>
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
              defaultValue={phone}
              required
            />
          </label>

          <label>
            <p>About me:</p>
            <textarea
              id="about-input"
              type="text"
              placeholder="About"
              name="about"
              onChange={handleChange}
              defaultValue={about}
            />
          </label>



          <div className="save-button-wrapper">
            <button className="save-button" type="submit">
              Save
            </button>
          </div>
        </form>
      </section>

  );
};

export default GeneralSection;
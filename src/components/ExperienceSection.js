import React, { useState } from "react";
import Preview from './Preview';

const ExperienceSection = (props) => {
  const [personalInfo, setPersonalInfo] = useState({
    position: "Position title",
    companyName: "company name",
    companyFrom: "2018-01-01",
    companyTo: "Present",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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


  const { position, companyName, detail, companyFrom, companyTo } = personalInfo;

  const { id, handleDelete } = props;



  if (!editMode) {
    return (
      <Preview
        position={position}
        companyName={companyName}
        companyFrom={companyFrom}
        companyTo={companyTo}
        detail={detail}
        handleEdit={handleSubmit}
      />
    );
  } 

  return (
    <div>
      <section className="generalSection grid-container">
        <form className="section" action="" onSubmit={handleSubmit}>
          <label>
            <p>Position title:</p>
            <input
              type="text"
              placeholder="Position title"
              name="position"
              onChange={handleChange}
              defaultValue={position}
              required
            />
          </label>

          <label>
            <p>Company name:</p>
            <input
              type="text"
              placeholder="Company name"
              name="companyName"
              onChange={handleChange}
              defaultValue={companyName}
              required
            />
          </label>

          <label>
            <p>Detail:</p>
            <textarea
              type="text"
              placeholder="Detail"
              name="detail"
              onChange={handleChange}
              defaultValue={detail}
            />
          </label>

          <label>
            <p>From:</p>
            <input
              type="date"
              placeholder="From"
              name="companyFrom"
              onChange={handleChange}
              defaultValue={companyFrom}
              required
            />
          </label>

          <label>
            <p>To:</p>
            <input
              type="date"
              placeholder="To"
              name="companyTo"
              onChange={handleChange}
              defaultValue={companyTo}
            />
          </label>

          <div className="save-and-delete-button-wrapper">
          <button className="save-button" type="submit">
            Save
          </button>
          <button className="delete-button" type="button" onClick={() => handleDelete('expIds', id)}>
              Delete
          </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ExperienceSection;
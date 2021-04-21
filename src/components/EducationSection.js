import React, { useState } from "react";
import Preview from './Preview';

const EducationSection = (props) => {
  const [educationlInfo, setEducationlInfo] = useState({
    degree: "Degree",
    universityName: "University Name",
    from: "2010-01-01",
    to: "Present",
    isGoing: true,
  });
  const [editMode, setEditMode] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationlInfo((prevInfo) => {
      let newInfo = { ...prevInfo, [name]: value };
      return newInfo;
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode((prevMode) => !prevMode);
  };


  const { degree, universityName, from, to } = educationlInfo;

  const { id, handleDelete } = props;



  if (!editMode) {
    return (
      <Preview
        degree={degree}
        universityName={universityName}
        from={from}
        to={to}
        handleEdit={handleSubmit}
      />
    );
  } 

  return (
    <div>
      <section className="generalSection grid-container">
        <form className="section" action="" onSubmit={handleSubmit}>
          <label>
            <p>Degree here/Major:</p>
            <input
              type="text"
              placeholder="First Name"
              name="degree"
              onChange={handleChange}
              defaultValue={degree}
              required
            />
          </label>

          <label>
            <p>University Name:</p>
            <input
              type="text"
              placeholder="Last Name"
              name="universityName"
              onChange={handleChange}
              defaultValue={universityName}
              required
            />
          </label>

          <label>
            <p>From:</p>
            <input
              type="date"
              placeholder="From"
              name="from"
              onChange={handleChange}
              defaultValue={from}
              required
            />
          </label>

          <label>
            <p>To:</p>
            <input
              type="date"
              placeholder="To"
              name="to"
              onChange={handleChange}
              defaultValue={to}
            />
          </label>


          <div className="save-and-delete-button-wrapper">
          <button className="save-button" type="submit">
            Save
          </button>
          <button className="delete-button" type="button" onClick={() => handleDelete('eduIds', id)}>
              Delete
          </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EducationSection;
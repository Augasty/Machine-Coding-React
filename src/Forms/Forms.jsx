import React, { useState } from "react";
import { Link } from "react-router-dom";

const Forms = () => {
  const [formData, setFormData] = useState({ name: "", role: "" });

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, name: name, role: role });
    setName('')
    setRole('')
  };
  return (
    <>
    {/* <div>formData</div>
     In React, you can't render objects directly as children in JSX.
     */}
      <div>
        <p>Name: {formData.name}</p>
        <p>Role: {formData.role}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="role">role:</label>
        <input
          type="text"
          id="role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <Link to="/">
        <button className="buttonclass" type="button">
          Back
        </button>
      </Link>
    </>
  );
};

export default Forms;

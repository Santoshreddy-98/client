import React, { useState } from "react";
import axios from "axios";

const UpdateProfile = ({ data, handleUpdate, token }) => {
  const [formData, setFormData] = useState({
    username: data.username,
    email: data.email,
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // perform form validation
    // ...

    // update the updatedData object with the new user data
    const updatedData = {};
    if (formData.username !== data.username) {
      updatedData.username = formData.username;
    }
    if (formData.password) {
      updatedData.password = formData.password;
    }

    // send the updated user data to the server
    axios.put(`http://localhost:710/updateprofile/${data._id}`, updatedData, {
        // headers: {
        //   "x-token": token,
        // },
      })
      .then((res) => {
        console.log(res.data);
        handleUpdate(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;

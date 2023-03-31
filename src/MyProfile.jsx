import React, { useContext, useState, useEffect } from "react";
// import UpdateProfile from "./UpdateProfile";
import { Link } from "react-router-dom";
import { store } from "./App";
import { Navigate } from "react-router";
import axios from "axios";

const MyProfile = () => {
  const [token, setToken] = useContext(store);
  const [data, setData] = useState(null);
  // const [showUpdateProfile, setShowUpdateProfile] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:710/myprofile", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [token]);

  // const handleUpdate = (updatedData) => {
  //   axios
  //     .put("http://localhost:710/myprofile", updatedData, {
  //       headers: {
  //         "x-token": token,
  //       },
  //     })
  //     .then((res) => {
  //       setData(res.data);
  //       setShowUpdateProfile(false);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const handleUpdateProfileClick = () => {
  //   setShowUpdateProfile(true);
  // };

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      {data && (
        <center>
          <br />
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Welcome : {data.username}</h5>
              <button
                className="btn btn-primary"
                onClick={() => setToken(null)}
              >
                Logout
              </button>
              <Link to="/test" className="btn btn-primary">
      Start Test
    </Link>
              {/* <button
                onClick={handleUpdateProfileClick}
                style={{ marginLeft: "50px" }}
              >
                Update Profile
              </button>
              
              {showUpdateProfile && (
                <UpdateProfile data={data} handleUpdate={handleUpdate} />
              )} */}
            </div>
          </div>
        </center>
      )}
    </div>
  );
};

export default MyProfile;

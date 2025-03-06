import React from "react";
import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";

function Profile({ user, setUser }) {
  const handleEdit = () => {
    const newName = prompt("Enter new name:", user.name);
    if (newName) {
      setUser(prevUser => ({ ...prevUser, name: newName }));
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your profile?")) {
      setUser(prevUser => ({ ...prevUser, name: "Deleted User" }));
    }
  };

  return (
    <div className="page-container">
      <div className="content-box">
        <h2>Profile</h2>
        <ProfilePicture />
        <UserInfo name={user.name} />
        <div className="btn-group">
          <button className="btn-edit" onClick={handleEdit}>Edit</button>
          <button className="btn-delete" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

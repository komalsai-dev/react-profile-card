import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const fetchUser = () => {
    fetch("https://randomuser.me/api/?results=1&") 
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile-card">
      <img src={user.picture.large} alt="Profile" className="profile-image" />
      <div className="profile-info">
        <h2 className="my-h2">
          {user.name.first}  {user.name.last}
        </h2>
        <p className="my-p"><strong>Gender:</strong> {user.gender}</p>
        <p className="my-p"><strong>Phone Number:</strong> {user.phone}</p>
        <button className="next-button" onClick={fetchUser}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { useEffect } from "react";

const Profile = (props: any) => {
  const [user, setUser] = useState([]);

  // get data onmount:
  useEffect(() => {
    const data = localStorage.getItem("user") as any;
    setUser(JSON.parse(data));
  }, []);

  return <div className="list">{JSON.stringify(user)}</div>;
};

export default Profile;

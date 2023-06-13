import { useContext, useEffect } from "react";
import "./Profile.css";
import { getAllUsers } from "../../utilities/userUtilities";
import { DataContext } from "../../contexts/DataContext";
import ProfileCard from "../../components/cards/ProfileCard/ProfileCard";

export function Profile() {
  const {
    dataState: { users },
    dataDispatch,
  } = useContext(DataContext);

  useEffect(() => {
    getAllUsers(dataDispatch);
  }, []);

  return (
    <div>
      <h1>Profiles</h1>
      {users.map((user) => (
        <ProfileCard key={user._id} user={user} />
      ))}
    </div>
  );
}

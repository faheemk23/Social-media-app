import { useContext } from "react";

import { DataContext } from "../../contexts/DataContext";
import { ProfileSmall } from "../ProfileSmall/ProfileSmall";
import "./GuestLoginUsers.css";

export default function GuestLoginUsers({ setUserDetail, setShowGuestUsers }) {
  const {
    dataState: { users },
  } = useContext(DataContext);

  return (
    <div className="guest-login-users relative">
      <i
        className="fa-solid fa-xmark guest-login-users-close-icon pointer"
        onClick={() => setShowGuestUsers(false)}
      ></i>
      {users.slice(0, 6).map(({ avatar, name, username, password }) => (
        <ProfileSmall
          avatar={avatar}
          name={name}
          username={username}
          password={password}
          setUserDetail={setUserDetail}
          setShowGuestUsers={setShowGuestUsers}
          inGuestUsers
        />
      ))}
    </div>
  );
}

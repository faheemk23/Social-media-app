import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import { ProfileSmall } from "../ProfileSmall/ProfileSmall";
import "./GuestLoginUsers.css";

export default function GuestLoginUsers({ setUserDetail, setShowGuestUsers }) {
  const {
    dataState: { users },
  } = useContext(DataContext);

  const { mode } = useContext(AuthContext);

  return (
    <div
      className={
        mode === "dark"
          ? "guest-login-users relative bg-black black-box-shadow "
          : "guest-login-users relative"
      }
    >
      <i
        className="fa-solid fa-arrow-left guest-login-users-close-icon pointer"
        onClick={() => setShowGuestUsers(false)}
      ></i>
      {users.map(({ _id, avatar, name, username, password, isVerified }) => (
        <ProfileSmall
          key={_id}
          avatar={avatar}
          name={name}
          username={username}
          password={password}
          setUserDetail={setUserDetail}
          setShowGuestUsers={setShowGuestUsers}
          inGuestUsers
          isVerified={isVerified}
        />
      ))}
    </div>
  );
}

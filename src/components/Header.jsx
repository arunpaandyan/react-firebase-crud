import React from "react";
import CreateUser from "./CreateUser";

const Header = ({ getUsers }) => {
  return (
    <header className="header-cls">
      <div
        style={{
          marginLeft: "200px",
        }}
      >
        Users
      </div>
      <CreateUser getUsers={getUsers} />
    </header>
  );
};

export default Header;

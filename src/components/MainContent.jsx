import React, { useState } from "react";

const MainContent = ({ users, onSelectClick, updateUser, deleteUser }) => {
  const [activeRow, setActiveRow] = useState(null);

  return (
    <main
      style={{
        backgroundColor: "lightgray",
      }}
    >
      <div
        style={{
          marginLeft: "200px",
          marginTop: "30px",
          paddingTop: "20px",
        }}
      >
        {users.length} Users
      </div>

      <div
        className="main-box"
        style={{
          marginLeft: "200px",
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          marginTop: "50px",
        }}
      >
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>User Type</th>
              <th>Status</th>
              <th
                style={{
                  height: "100px",
                }}
              ></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                onMouseOver={() => setActiveRow(user.id)}
                onMouseOut={() => setActiveRow(null)}
              >
                <td
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                  }}
                >
                  <span>
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                      src={user.photo}
                      alt=""
                    />
                  </span>
                  <span>
                    <p>{user.name}</p>
                    <p>{user.designation}</p>
                  </span>
                </td>
                <td>{user.email}</td>
                <td>{user.mobileno}</td>
                <td>{user.user_type}</td>
                <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={user.status}
                      onChange={() => onSelectClick(user.id, user.status)}
                    />
                    <span className="slider round"></span>
                  </label>
                </td>
                <td>
                  {activeRow === user.id && (
                    <>
                      <button onClick={() => updateUser(user.id)}>Edit</button>
                      <button onClick={() => deleteUser(user.id)}>
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default MainContent;

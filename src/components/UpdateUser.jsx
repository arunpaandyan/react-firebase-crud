import React, { useState } from "react";
import { addDoc } from "firebase/firestore";
import { userCollectionRef } from "../App";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement("#yourAppElement");

const UpdateUser = ({
  name,
  email,
  mobileno,
  designation,
  usertype,
  status,
}) => {
  const [name, setName] = useState(name);
  const [email, setEmail] = useState(email);
  const [mobileno, setMobileno] = useState(mobileno);
  const [designation, setDesignation] = useState(designation);
  const [usertype, setUsertype] = useState(usertype);
  const [status, setStatus] = useState(status);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async () => {
    console.log("submitted");
    if (!name || !email || !mobileno || !designation || !usertype) {
      alert("Enter required fields...");
      return;
    }
    const userData = {
      name,
      email,
      mobileno: Number(mobileno),
      designation,
      photo:
        "http://res.cloudinary.com/de1rlrhnc/image/upload/v1681291528/g6pp2ll4enuhoehpy5pw.png",
      status: true,
      user_type: usertype,
    };
    console.log(userData);
    const data = await addDoc(userCollectionRef, userData);
    setName("");
    setEmail("");
    setMobileno("");
    setDesignation("");
    setUsertype("");

    //getUsers();
  };

  return (
    <div
      style={{
        marginRight: "20px",
      }}
    >
      <button onClick={openModal}>Update user</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>
          <Update></Update> user
        </h2>
        <button onClick={closeModal}>close</button>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name"></label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
              id=""
            />
          </div>
          <div>
            <label htmlFor="designation"></label>
            <input
              type="text"
              name="designation"
              placeholder="Enter designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              id=""
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id=""
            />
          </div>
          <div>
            <label htmlFor="phoneno"></label>
            <input
              type="text"
              name="phoneno"
              placeholder="Enter Phone No"
              value={mobileno}
              onChange={(e) => setMobileno(e.target.value)}
              id=""
            />
          </div>
          <div>
            <label htmlFor="usertype">User Type</label>
            <select
              name="usertype"
              onChange={(e) => setUsertype(e.target.value)}
            >
              <option value="Admin">Admin</option>
              <option value="Recruiter">Recruiter</option>
            </select>
          </div>
          <div>
            <button onClick={handleSubmit}>Update user</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default UpdateUser;

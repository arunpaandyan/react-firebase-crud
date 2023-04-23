import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Header from "./components/Header";

export const userCollectionRef = collection(db, "users");

function App() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const data = await getDocs(userCollectionRef);
    console.log(data);
    setUsers(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };
  useEffect(() => {
    //getUsers();
    const queryResponse = query(userCollectionRef, orderBy("name"));
    const snapShot = onSnapshot(queryResponse, (snapShotParam) => {
      setUsers(
        snapShotParam.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });

    return () => snapShot();
  }, []);

  const updateUser = async (userId, updatedData) => {
    const userDoc = doc(db, "users", userId);
    const upDoc = {
      name: "isifs",
      email: "gmi@gmaic.om",
    };
    await updateDoc(userDoc, upDoc);
  };

  const deleteUser = async (userId) => {
    const userDoc = doc(db, "users", userId);
    await deleteDoc(userDoc);
  };

  const onSelectClick = async (userId, status) => {
    const userDoc = doc(db, "users", userId);
    const upDoc = {
      status: !status,
    };
    await updateDoc(userDoc, upDoc);
  };

  return (
    <>
      <Sidebar />
      <Header getUsers={getUsers} />
      <MainContent
        users={users}
        onSelectClick={onSelectClick}
        updateUser={updateUser}
        deleteUser={deleteUser}
      />
    </>
  );
}

export default App;

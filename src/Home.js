import React, { useRef, useState } from "react";
import axios from "axios";
import useLazyLoad from "./useLazyLoad.js";
import clsx from "clsx";
import { LazyCom } from "./LazyCom.jsx";
import { API_URI } from "./constants.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const triggerRef = useRef(null);
  console.log(API_URI )
  const onGrabData = async (page) => {
    try {
      const response = await axios.get(`${API_URI}/users?page=${page}`, {
        timeout: 5000,
      });

      console.log(response.data.results);
      setUsers([...users, ...response.data.results]);
      return response.data.results;
    } catch (error) {
      toast.error('We are facing trouble ...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: "Bounce",
        });
    }
  };

  const { loading } = useLazyLoad({ triggerRef, onGrabData, currentPage });

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
    onGrabData(currentPage);
    toast.success("Loading ...", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: "Bounce",
    });
  };

  const refreshList = () => {
    setCurrentPage(1);
    setUsers([]);
    onGrabData(currentPage);
    toast.success("Refreshed ...", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: "Bounce",
    });
  };
  return (
    <>
     
      <ToastContainer />
      <div className="btns-container">
        <button className="btn load" onClick={loadMore} disabled={loading}>
          {loading ? "Loading..." : "Load More"}
        </button>
        <button className="btn" onClick={refreshList} disabled={loading}>
          Refresh
        </button>
      </div>
      <div className="container">
        {users.map((user) => {
          const inputDate = new Date(user.birthdate);
          const outputDate = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }).format(inputDate);
          return (
            <div className="user-card" key={user.id}>
              <img className="" src={user.avatar} alt="profile" />
              <p className="">{user.username}</p>
              <p className="">{user.email}</p>
              <p className="">{outputDate}</p>
              <p className="">{user.address}</p>
            </div>
          );
        })}
      </div>
      <div
        ref={triggerRef}
        className={clsx("trigger", "container", { visible: loading })}
      >
        {[...Array(25)].map((_, i) => (
          <LazyCom key={i} />
        ))}
      </div>
    </>
  );
};

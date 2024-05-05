import React from "react";
import "./style.css";
export const LazyCom = () => {
  return (
    <div className="user-card">
      <img
        className={"skeleton"}
        src={ "http://placehold.jp/200.png?text=Profile"}
        alt="profile"
      />
      <p className={"skeleton"}></p>
      <p className={"skeleton"}></p>
      <p className={"skeleton"}></p>
      <p className={"skeleton"}></p>
    </div>

  );
};

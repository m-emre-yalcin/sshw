import * as React from "react";
import "./index.scss";
const Skeleton = () => {
  return (
    <div
      className="skeleton"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div
        className="skeleton-box"
        style={{
          width: "webkit-fill-available",
          height: "120px"
        }}
      />
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          marginTop: "6px"
        }}
      >
        <div
          className="skeleton-box"
          style={{ width: "100%", height: "25px", margin: "6px 0" }}
        />
        <div
          className="skeleton-box"
          style={{ width: "100%", height: "25px", margin: "6px 0" }}
        />
      </div>
    </div>
  );
};

export default Skeleton;

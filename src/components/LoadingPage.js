import React from "react";

export default function LoadingPage() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <h1
        className="spinner spinner-border"
        style={{
          zoom: "2",
        }}
      ></h1>
    </div>
  );
}

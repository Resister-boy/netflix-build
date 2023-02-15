import React from "react";

const Row = ({ title, fetchrl, isLargeRow = false }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
    </div>
  )
}

export default Row;
import React from "react";

function Tag({ nom }) {
  return (
    <div className="tag">
      <span className="tag-button">{nom}</span>
    </div>
  );
}

export default Tag;

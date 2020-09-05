import React from "react";

const OldAddress = ({ address }) => {
  return address ? (
    <div className="old-address">
      <span className="old-address__label">지번</span>
      <p className="old-address__content">{address}</p>
    </div>
  ) : (
    ""
  );
};

export default OldAddress;

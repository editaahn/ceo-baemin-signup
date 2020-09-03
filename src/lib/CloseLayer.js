import React from "react";

const CloseLayer = ({ closeAddressLayer }) => {
  return (
    <div className="layer__header">
      <p className="layer__title">주소 검색</p>
      <button
        className="layer__button-close"
        onClick={(e) => {
          e.preventDefault();
          closeAddressLayer();
        }}
      >
        닫기
      </button>
    </div>
  );
};

export default CloseLayer;

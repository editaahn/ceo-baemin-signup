import React from "react";
import Postcode from "./Postcode";
import CloseLayer from "./CloseLayer";

const LayerContents = ({ setAddress, closeAddressLayer}) => {
  return (
    <React.Fragment>
      <CloseLayer 
        closeAddressLayer={closeAddressLayer}
      />
      <Postcode 
        closeAddressLayer={closeAddressLayer}
        setAddress={setAddress}
      />
    </React.Fragment>
  );
};

export default LayerContents;
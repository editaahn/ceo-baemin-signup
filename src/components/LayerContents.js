import React from "react";
import Postcode from "../lib/Postcode";
import CloseLayer from "../lib/CloseLayer";

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
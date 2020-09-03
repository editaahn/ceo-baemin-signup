import React from "react";
import DaumPostcode from "react-daum-postcode";

const Postcode = ({ setAddress, closeAddressLayer }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    //addressType == R(도로명)
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddress({
      zonecode: data.zonecode,
      address: fullAddress,
      old_address: data.jibunAddress || data.autuJibunAddress || '',
    });
    closeAddressLayer();
  };

  return <DaumPostcode onComplete={handleComplete} width={360} />;
};

export default Postcode;

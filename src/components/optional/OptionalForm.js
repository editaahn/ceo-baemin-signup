import React, { useRef } from "react";
import { connect } from "react-redux";
import * as actions__value from "../../redux-module/optionalFormState";
import * as actions__result from "../../redux-module/resultState";
import AddressHandler from "./AddressHandler";
import Input from "../common/Input";
import ResultMessage from "../common/ResultMessage";
import LayerContents from "./LayerContents";
import OldAddress from "./OldAddress";

const OptionalForm = ({
  editable,
  zonecode,
  address,
  old_address,
  result__detail_address,
  setEditable,
  setAddress,
  setDetailAddress,
}) => {

  const layerEl = useRef(null);
  const openAddressLayer = () => {
    layerEl.current.style.display = "block";
  };
  const closeAddressLayer = () => {
    layerEl.current.style.display = "none";
  };

  return (
    <fieldset className="optional">
      <AddressHandler setEditable={setEditable} />
      <div className="input-container--row">
        <Input
          id="input__zonecode"
          className="input__zonecode"
          guideMessage="우편번호"
          isReadOnly={true}
          isDisabled={!editable}
        />
        <button
          className="button"
          onClick={(e) => {
            e.preventDefault();
            openAddressLayer();
          }}
          disabled={!editable}
        >
          주소찾기
        </button>
      </div>
      <div className="input-container--col">
        <Input
          id="input__address"
          guideMessage="주소"
          isReadOnly={true}
          isDisabled={!editable}
        />
      </div>
      <div className="input-container--col">
        <Input
          guideMessage="상세주소"
          setValue={setDetailAddress}
          isDisabled={!editable}
        />
        <ResultMessage result={result__detail_address} />
      </div>
      <OldAddress address={old_address} />

      <div className="layer__background" ref={layerEl}>
        <div className="layer__align" >
          <LayerContents
            setAddress={setAddress}
            closeAddressLayer={closeAddressLayer}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default connect(({ optional, result }) => ({ ...optional, ...result }), {
  ...actions__result,
  ...actions__value,
})(OptionalForm);

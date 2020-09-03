import React, { useRef } from "react";
import { connect } from "react-redux";
import * as actions__value from "../module/optionalFormState";
import * as actions__result from "../module/resultState";
import validation from "../lib/validation";
import AddressHandler from "./AddressHandler";
import Input from "./Input";
import ResultMessage from "./ResultMessage";
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
          className="input__zonecode"
          guideMessage="우편번호"
          isReadOnly={true}
          isDisabled={!editable}
          value={zonecode}
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
          guideMessage="주소"
          isReadOnly={true}
          isDisabled={!editable}
          value={address}
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

      <div className="layer__layer" ref={layerEl}>
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

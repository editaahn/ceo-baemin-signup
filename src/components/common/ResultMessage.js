import React from "react";

const ResultMessage = ({ result }) => {
  return (
    result 
    ? result.message 
    ? result.status 
    ? <label className="result-message">{result.message}</label> //메시지 있고 상태값이 true
      : <label className="result-message--fail">{result.message}</label>  //메시지 있고 상태값이 false
      : '' //메시지가 없는 경우
      : '' //result 없는 경우
  )
}

export default ResultMessage;
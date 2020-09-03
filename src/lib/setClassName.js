// validation status에 따라 인풋 클래스 동적 변경
export const setClassName = ( result, defaultClass, failClass = "input--fail" ) => {
  return result.status === true || result.status === null
    ? defaultClass
    : failClass;
};
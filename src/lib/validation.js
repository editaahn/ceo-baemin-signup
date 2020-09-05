const result = (status, msg) => ({
  status: status,
  message: msg,
});

const validation = {
  // mandatory
  ID: (id) => {
    if (!id) return result(false, "아이디를 입력해주세요.");
    else if (id.length >= 4 && id.length <= 20 && /[a-z]\d|\d[a-z]/.test(id))
      return result(true, "입력하신 아이디로 사용이 가능합니다.");
    else
      return result(
        false,
        "아이디는 영문과 숫자로 4자~20자 사이로 입력해주세요."
      );
  },
  PW: (pw) => {
    if (!pw) return result(false, "비밀번호를 입력해주세요.");
    else if (
      pw.length >= 8 &&
      pw.length <= 20 &&
      /[0-9]/.test(pw) &&
      /[a-z]|[A-Z]/.test(pw)
    )
      return result(true, "");
    else
      return result(
        false,
        "비밀번호는 영문과 숫자를 포함하여 8~20자로 입력해주세요."
      );
  },
  PW_CHECK: (pwCheck, pw) => {
    return pw
      ? pwCheck === pw
        ? result(true, "")
        : result(false, "위 비밀번호와 일치하지 않습니다. 다시 입력해주세요.")
      : result(false, "비밀번호 확인을 위해 한 번 더 입력해주세요.");
  },
  EMAIL1: (address) => {
    return address
      ? /[^0-9a-zA-Z_.-]/.test(address)
        ? result(false, "이메일 주소를 확인해 주세요.")
        : result(true, "")
      : result(false, "이메일 주소를 입력해주세요."); // 입력값 없음
  },
  EMAIL2: (address) => {
    return address
      ? /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(address)
        ? result(true, "") // 통과
        : result(false, "이메일 주소를 확인해 주세요.") // 이메일 잘못입력
      : result(false, "이메일 주소를 입력해주세요."); // 입력값 없음
  },
  NAME: (name) => {
    return name
      ? name.length > 1
        ? /[가-힣a-z]{2,6}$/.test(name)
          ? result(true, "")
          : result(
              false,
              "이름에 특수문자, 숫자는 입력하실 수 없습니다. 다시 입력해주세요."
            )
        : result(false, "2자 이상으로 입력해주세요.")
      : result(false, "이름을 입력해주세요.");
  },
  PHONE: (phone) => {
    return phone
      ? /[0-9]{10,}/.test(phone)
        ? result(true, "")
        : result(false, "휴대폰 번호를 다시 입력해주세요.")
      : result(false, "휴대폰 번호를 입력해주세요.");
  },
  PHONE_AUTH: (phone_auth_digit) => {
    return document.getElementById("input__auth").value * 1 === phone_auth_digit
      ? result(true, "")
      : result(false, "전송된 인증번호와 다릅니다.");
  },
  // optional
  DETAIL_ADDRESS: (address) => {
    return address ? result(true, "") : result(false, "주소를 입력해주세요.");
  },
};

export default validation;

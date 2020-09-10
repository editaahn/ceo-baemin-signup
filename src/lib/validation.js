const result = (status, msg) => ({
  status: status,
  message: msg,
});

const validation = {
  ID: (id, idDBCheckFn) => {
    const isRightID = id.length >= 4 && id.length <= 20 && /[a-z]\d|\d[a-z]/.test(id);

    idDBCheckFn(id);

    if (!id) 
      return result(false, "아이디를 입력해주세요.");
    else if (!isRightID)
      return result(false,"아이디는 영문과 숫자로 4자~20자 사이로 입력해주세요.");
    else 
      return result(true, "입력하신 아이디로 사용이 가능합니다.");
  },

  PW: (pw) => {
    const isRightPW = pw.length >= 8 && pw.length <= 20 && /[0-9]/.test(pw) && /[a-z]|[A-Z]/.test(pw);

    if (!pw)
      return result(false, "비밀번호를 입력해주세요.");
    else if (!isRightPW)
      return result(false,"비밀번호는 영문과 숫자를 포함하여 8~20자로 입력해주세요.");
    else
      return result(true, "");
  },

  PW_TWICE: (pwTwice, pwFirst) => {
    if (!pwTwice)
      return result(false, "비밀번호 확인을 위해 한 번 더 입력해주세요.");
    else if (!(pwTwice === pwFirst))
      return result(false, "위 비밀번호와 일치하지 않습니다. 다시 입력해주세요.");
    else
      return result(true, "");
  },

  EMAIL1: (address) => {
    const isWrongEmail1 = /[^0-9a-zA-Z_.-]/.test(address);

    if (!address)
      return result(false, "이메일 주소를 입력해주세요."); // 입력값 없음
    else if (isWrongEmail1)
      return result(false, "이메일 주소를 확인해주세요.");
    else
      return result(true, "");

  },

  EMAIL2: (address) => {
    const isrightEmail2 = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(address);

    if (!address)
      return result(false, "이메일 주소를 입력해주세요."); // 입력값 없음
    else if (!isrightEmail2)
      return result(false, "이메일 주소를 확인해주세요."); // 이메일 잘못입력
    else 
      return result(true, ""); // 통과
  },

  NAME: (name) => {
    const isRightName = /[가-힣a-z]{2,6}$/.test(name);

    if (!name) 
      return result(false, "이름을 입력해주세요.");
    else if (!(name.length > 1))
      return result(false, "2자 이상으로 입력해주세요.")
    else if (!isRightName)
      return result(false, "이름에 특수문자, 숫자는 입력하실 수 없습니다. 다시 입력해주세요.");
    else
      result(true, "") ;
  },
  PHONE: (phone) => {
    const isRightPhone = /[0-9]{10,}/.test(phone);

    if (!phone)
      return result(false, "휴대폰 번호를 입력해주세요.");
    else if (!isRightPhone)
      return result(false, "휴대폰 번호를 다시 입력해주세요.")
    else
      return result(true, "")
  },
  PHONE_AUTH: (phone_auth_digit) => {
    const isRightDigit = document.getElementById("input__auth").value * 1 === phone_auth_digit;
    
    if (!isRightDigit)
      return result(false, "전송된 인증번호와 다릅니다.");
    else
      result(true, "")
  },
};

export default validation;
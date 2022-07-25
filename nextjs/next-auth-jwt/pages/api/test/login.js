
export default function handler(req, res) {
  const { email, password } = req.body;

  if (password === 'example') {
    res.status(200).json({
      accessToken: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqZW5uaUBzdG9yZWxpbmsuaW8iLCJpYXQiOjE2NTgzODY3NDksImV4cCI6MTY1ODM5Mzk0OX0.KuCL_7JB98Ye4spef3HvQPlu-GVDIoHArKoZx9waBdo",
      accessTokenExpiry: 1658502500786,
      refreshToken: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqZW5uaUBzdG9yZWxpbmsuaW8iLCJpYXQiOjE2NTgzODY3NDksImV4cCI6MTY1ODk5MTU0OX0.2WgwLnp5bF-21zO9JZrEi4JpystQpdbi4ZCaiyh_wm4"
    });
  } else {
    res.status(401).json({
      messageCode: "MEM_005",
      message: "비밀번호가 일치하지 않습니다.",
      timeStamp: "2022.07.21 15:59:00",
      result: null,
      page: null
    })
  }
}

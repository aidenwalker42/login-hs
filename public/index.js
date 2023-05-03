let registerBtn = document.getElementById("registerButton");
registerBtn.addEventListener("click", register);
let loginBtn = document.getElementById("loginButton");
loginBtn.addEventListener("click", login);

function register(e) {
  e.preventDefault();

  let username = document.getElementById("uname-register").value;
  let password = document.getElementById("psw-register").value;
  let registerCode = document.getElementById("input-register-code").value;

  let accountObj = {
    username,
    password,
    registerCode,
  };
  console.log(accountObj);

  axios.post(baseURL + "api/createAccount/", accountObj).then((response) => {
    console.log(response);
  });

  //encrypt
  //push to server
}

function login(e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("psw-login").value;

  let accountObj = {
    username,
    password,
  };
  console.log(accountObj);

  axios.post(baseURL + "api/login/", accountObj).then((response) => {
    const [loginSuccess, sessionID] = response.data;
    if (loginSuccess === true) {
      window.location.href = "/home.html";
      console.log(sessionID);
      localSessionID = sessionID; //change this to a cookie later.
    }
  });
}

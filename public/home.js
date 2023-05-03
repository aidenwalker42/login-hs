document.getElementById("register-code").addEventListener("click", () => {
  const selectedRole = document.getElementById("role-selector").value;
  const body = { selectedRole };
  axios.post(baseURL + "api/admin/generateCode", body);
});
//axios post
//send uuid to server,
//server checks if uuid is valid and their roles, sends back the html and innerHTML's the admin panel

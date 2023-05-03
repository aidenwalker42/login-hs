function ifnbsp(key) {
  if (key.length === 1) {
    return "";
  } else {
    return key;
  }
}

let list = document.getElementById("the-list").querySelectorAll("tr");

let users = [];

for (let i = 0; i < list.length; i++) {
  let spot = list[i].querySelector("a").innerHTML;
  let address = list[i].cells[2].textContent;
  let client = list[i].cells[3].textContent;
  let validStart = list[i].cells[4].textContent;
  let validEnd = list[i].cells[5].textContent;
  let status = list[i].cells[6].textContent;

  client = ifnbsp(client);

  let obj = {
    spot,
    address,
    client,
    validStart,
    validEnd,
    status,
  };
  users.push(obj);
}
copy(users);
console.log(users);

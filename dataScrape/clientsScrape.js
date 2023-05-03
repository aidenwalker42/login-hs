let list = document.getElementById("the-list").querySelectorAll("tr");

let users = [];

for (let i = 0; i < list.length; i++) {
  let email = list[i].querySelector("a").innerHTML;
  let firstName = list[i].cells[2].innerHTML;
  let lastName = list[i].cells[3].innerHTML;
  let type = list[i].cells[4].innerHTML;
  if (type === "&nbsp;") {
    type = false;
  }
  let optOut = list[i].cells[5].innerHTML;
  if (optOut === "&nbsp;") {
    optOut = false;
  } else {
    optOut = true;
  }
  let enabled = list[i].cells[6].innerHTML;
  if (enabled === "&nbsp;") {
    enabled = false;
  } else {
    enabled = true;
  }
  let client = list[i].cells[7].innerHTML;
  if (client === "&nbsp;") {
    client = "";
  }
  let foreman = list[i].cells[8].innerHTML;
  if (foreman === "&nbsp;") {
    foreman = false;
  } else {
    foreman = true;
  }
  let lineman = list[i].cells[9].innerHTML;
  if (lineman === "&nbsp;") {
    lineman = false;
  } else {
    lineman = true;
  }
  let obj = {
    email,
    firstName,
    lastName,
    type,
    optOut,
    enabled,
    client,
    foreman,
    lineman,
  };
  users.push(obj);
}
copy(users);
console.log(users);

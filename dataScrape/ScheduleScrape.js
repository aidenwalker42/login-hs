function ifnbsp(key) {
  if (key.length === 1) {
    return "";
  } else {
    return key;
  }
}
function checkmark(key) {
  if (key === "X") {
    return true;
  } else {
    return false;
  }
}

let list = document.getElementById("the-list").querySelectorAll("tr");

let users = [];

for (let i = 0; i < list.length; i++) {
  let address = list[i].querySelector("a").innerHTML;
  let service = list[i].cells[2].textContent;
  let schedule = list[i].cells[3].textContent;
  let client = list[i].cells[4].textContent;
  let foreman = list[i].cells[5].textContent;
  let order = list[i].cells[6].textContent;
  let past = list[i].cells[7].textContent;
  let today = list[i].cells[8].textContent;
  let upcoming = list[i].cells[9].textContent;
  let spotsValid = list[i].cells[10].textContent;

  client = ifnbsp(client);
  let isnum = /^\d+$/.test(order);
  if (order.length === 1 && isnum === false) {
    order = "";
  }
  foreman = ifnbsp(foreman);
  past = checkmark(past);
  today = checkmark(today);
  upcoming = checkmark(upcoming);
  spotsValid = checkmark(spotsValid);

  let obj = {
    address,
    service,
    schedule,
    client,
    foreman,
    order,
    past,
    today,
    upcoming,
    spotsValid,
  };
  users.push(obj);
}
copy(users);
console.log(users);

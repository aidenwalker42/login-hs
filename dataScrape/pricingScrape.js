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
  let item = list[i].querySelector("a").innerHTML;
  let client = list[i].cells[2].textContent;
  let service = list[i].cells[3].textContent;
  let portals = list[i].cells[4].textContent;
  let price = list[i].cells[5].textContent;
  let units = list[i].cells[6].textContent;

  item = ifnbsp(item);
  client = ifnbsp(client);
  service = ifnbsp(service);
  portals = checkmark(portals);
  price = ifnbsp(price);
  units = ifnbsp(units);

  let obj = {
    item,
    client,
    service,
    portals,
    price,
    units,
  };
  users.push(obj);
}
copy(users);
console.log(users);

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
  let performed = list[i].cells[2].textContent;
  let address = list[i].cells[3].textContent;
  let client = list[i].cells[4].textContent;
  let node = list[i].cells[5].textContent;
  let service = list[i].cells[6].textContent;
  let qty = list[i].cells[7].textContent;
  let price = list[i].cells[8].textContent;
  let units = list[i].cells[9].textContent;
  let readyToBill = list[i].cells[10].textContent;
  let billed = list[i].cells[11].textContent;

  performed = ifnbsp(performed);
  address = ifnbsp(address);
  client = ifnbsp(client);
  node = ifnbsp(node);
  service = ifnbsp(service);
  price = ifnbsp(price);
  units = ifnbsp(units);
  readyToBill = checkmark(readyToBill);
  billed = checkmark(billed);

  let isnum = /^\d+$/.test(qty);
  if (qty.length === 1 && isnum === false) {
    qty = "";
  }

  let obj = {
    item,
    performed,
    address,
    client,
    node,
    service,
    qty,
    price,
    units,
    readyToBill,
    billed,
  };
  users.push(obj);
}
copy(users);
console.log(users);

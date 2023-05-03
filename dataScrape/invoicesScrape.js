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
  let id = list[i].querySelector("a").innerHTML;
  let client = list[i].cells[2].textContent;
  let created = list[i].cells[3].textContent;
  let dueDate = list[i].cells[4].textContent;
  let subTotal = list[i].cells[5].textContent;
  let tax = list[i].cells[6].textContent;
  let total = list[i].cells[7].textContent;
  let paid = list[i].cells[8].textContent;
  let balance = list[i].cells[9].textContent;
  let status = list[i].cells[10].textContent;
  let poNumber = list[i].cells[11].textContent;

  id = ifnbsp(id);
  client = ifnbsp(client);
  dueDate = ifnbsp(dueDate);
  subTotal = ifnbsp(subTotal);
  tax = ifnbsp(tax);
  total = ifnbsp(total);
  paid = ifnbsp(paid);
  balance = ifnbsp(balance);
  status = ifnbsp(status);
  poNumber = ifnbsp(poNumber);

  let obj = {
    id,
    client,
    created,
    dueDate,
    subTotal,
    tax,
    total,
    paid,
    balance,
    status,
    poNumber,
  };
  users.push(obj);
}
copy(users);
console.log(users);

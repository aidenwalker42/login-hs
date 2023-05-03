function ifnbsp(key) {
  if (key === "&nbsp;") {
    return "";
  } else {
    return key;
  }
}

let list = document.getElementById("the-list").querySelectorAll("tr");

let users = [];

for (let i = 0; i < list.length; i++) {
  let name = list[i].querySelector("a").innerHTML;
  let customerNumber = list[i].cells[2].innerHTML;
  customerNumber = ifnbsp(customerNumber);
  let type = list[i].cells[3].innerHTML;
  let phone = list[i].cells[4].innerHTML;
  phone = ifnbsp(phone);
  let address = list[i].cells[5].innerHTML;
  address = ifnbsp(address);
  let city = list[i].cells[6].innerHTML;
  city = ifnbsp(city);
  let state = list[i].cells[7].innerHTML;
  state = ifnbsp(state);
  let zip = list[i].cells[8].innerHTML;
  zip = ifnbsp(zip);
  let netDays = list[i].cells[9].innerHTML;
  netDays = ifnbsp(netDays);
  let created = list[i].cells[10].innerHTML;
  let obj = {
    name,
    customerNumber,
    type,
    phone,
    address,
    city,
    state,
    zip,
    netDays,
    created,
  };
  users.push(obj);
}
copy(users);
console.log(users);

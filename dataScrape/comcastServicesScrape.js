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
  let created = list[i].cells[2].textContent;
  let area = list[i].cells[3].textContent;
  let billTo = list[i].cells[4].textContent;
  let client = list[i].cells[5].textContent;
  let lineInstalled = list[i].cells[6].textContent;
  let lineFootage = list[i].cells[7].textContent; //
  let boreFootage = list[i].cells[8].textContent;
  let pedestal = list[i].cells[9].textContent; //
  let status = list[i].cells[10].textContent;
  let spotsNotExpired = list[i].cells[11].textContent;
  let spot = list[i].cells[12].textContent;
  let spotStatus = list[i].cells[13].textContent;
  billTo = ifnbsp(billTo);
  client = ifnbsp(client);
  lineInstalled = ifnbsp(lineInstalled);
  pedestal = checkmark(pedestal);
  spotsNotExpired = checkmark(spotsNotExpired);
  spot = ifnbsp(spot);
  spotStatus = ifnbsp(spotStatus);

  let isnum2 = /^\d+$/.test(lineFootage);
  if (lineFootage.length === 1 && isnum2 === false) {
    lineFootage = "";
  }
  let isnum3 = /^\d+$/.test(boreFootage);
  if (boreFootage.length === 1 && isnum3 === false) {
    boreFootage = "";
  }
  let obj = {
    address,
    created,
    area,
    billTo,
    client,
    lineInstalled,
    lineFootage,
    boreFootage,
    pedestal,
    status,
    spotsNotExpired,
    spot,
    spotStatus,
  };
  users.push(obj);
}
copy(users);
console.log(users);

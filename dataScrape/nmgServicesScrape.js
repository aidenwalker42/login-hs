function ifnbsp(key) {
  if (key.length === 1) {
    return "";
  } else {
    return key;
  }
}

function checkmark(key) {
  if (key === " ") {
    return false;
  } else {
    return true;
  }
}

let list = document.getElementById("the-list").querySelectorAll("tr");

let users = [];

for (let i = 0; i < list.length; i++) {
  let address = list[i].querySelector("a").innerHTML;
  let created = list[i].cells[2].textContent;
  let area = list[i].cells[3].textContent;
  let xTrude = list[i].cells[4].textContent;
  let billTo = list[i].cells[5].textContent;
  let client = list[i].cells[6].textContent;
  let importedOn = list[i].cells[7].textContent;
  let record = list[i].cells[8].textContent;
  let customer = list[i].cells[9].textContent;
  let lineInstalled = list[i].cells[10].textContent;
  let lineFootage = list[i].cells[11].textContent;
  let serviceType = list[i].cells[12].textContent;
  let duplicate = list[i].cells[13].textContent;
  let nmgStatus = list[i].cells[14].textContent;
  let pnmStatus = list[i].cells[15].textContent;
  let pnmServiceOrder = list[i].cells[16].textContent;
  let pnmPermit = list[i].cells[17].textContent;
  let pnmDateReceived = list[i].cells[18].textContent;
  let pnmPremise = list[i].cells[19].textContent;
  let spotsNotExpired = list[i].cells[20].textContent;
  let spot = list[i].cells[21].textContent;
  let spotStatus = list[i].cells[22].textContent;
  let builder = list[i].cells[23].textContent;
  let builderPhone = list[i].cells[24].textContent;

  billTo = ifnbsp(billTo);
  client = ifnbsp(client);
  xTrude = checkmark(xTrude);
  importedOn = ifnbsp(importedOn);
  record = ifnbsp(record);
  customer = ifnbsp(customer);
  lineInstalled = ifnbsp(lineInstalled);
  nmgStatus = ifnbsp(nmgStatus);
  pnmStatus = ifnbsp(pnmStatus);
  pnmServiceOrder = ifnbsp(pnmServiceOrder);
  pnmPermit = ifnbsp(pnmPermit);
  pnmDateReceived = ifnbsp(pnmDateReceived);
  pnmPremise = ifnbsp(pnmPremise);
  spot = ifnbsp(spot);
  builder = ifnbsp(builder);
  builderPhone = ifnbsp(builderPhone);
  duplicate = checkmark(duplicate);
  spotsNotExpired = checkmark(spotsNotExpired);

  let isnum = /^\d+$/.test(lineFootage);
  if (lineFootage.length === 1 && isnum === false) {
    lineFootage = "";
  }

  let obj = {
    address,
    created,
    area,
    xTrude,
    billTo,
    client,
    importedOn,
    record,
    customer,
    lineInstalled,
    lineFootage,
    serviceType,
    duplicate,
    nmgStatus,
    pnmStatus,
    pnmServiceOrder,
    pnmPermit,
    pnmDateReceived,
    pnmPremise,
    spotsNotExpired,
    spot,
    spotStatus,
    builder,
    builderPhone,
  };
  users.push(obj);
}
copy(users);
console.log(users);

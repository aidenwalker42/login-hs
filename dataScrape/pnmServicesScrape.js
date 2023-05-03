function ifnbsp(key) {
  if (key === "&nbsp;") {
    return "";
  } else {
    return key;
  }
}
let list = document.getElementById("the-list").querySelectorAll("tr");

let users = [];

// = ifnbsp();
for (let i = 0; i < list.length; i++) {
  let address = list[i].querySelector("a").innerHTML;
  let created = list[i].cells[2].innerHTML;
  let area = list[i].cells[3].innerHTML;
  let billTo = list[i].cells[4].innerHTML;
  let client = list[i].cells[5].innerHTML;
  let dateReceived = list[i].cells[6].innerHTML;
  let customerName = list[i].cells[7].innerHTML;
  let priority = list[i].cells[8].innerHTML;
  let lineInstalled = list[i].cells[9].innerHTML;
  let lineFootage = list[i].cells[10].innerHTML;
  let serviceType = list[i].cells[11].innerHTML;
  let duplicate = list[i].cells[12].innerHTML; //
  let meterInstalled = list[i].cells[13].innerHTML;
  let hasMeter = list[i].cells[14].innerHTML;
  let pnmStatus = list[i].cells[15].querySelector("div").innerHTML;
  let nmgStatus = list[i].cells[16].querySelector("div").innerHTML;
  let nmgImportedOn = list[i].cells[17].innerHTML;
  let nmgRecord = list[i].cells[18].innerHTML;
  let nmgMap = list[i].cells[19].innerHTML;
  let nmgPermit = list[i].cells[20].innerHTML;
  let open = list[i].cells[21].innerHTML; //
  let greenTags = list[i].cells[22].innerHTML;
  let favorite = list[i].cells[23].innerHTML;
  let spotsNotExpired = list[i].cells[24].innerHTML;
  let spot = list[i].cells[25].innerHTML;
  let spotStatus = list[i].cells[26].querySelector("span").textContent; //
  let builder = list[i].cells[27].innerHTML;
  let builderPhone = list[i].cells[28].innerHTML;

  //CTRL+D +C
  //ALT +> CTRL+V ALT+<

  billTo = ifnbsp(billTo);
  client = ifnbsp(client);
  dateReceived = ifnbsp(dateReceived);
  customerName = ifnbsp(customerName);
  priority = ifnbsp(priority);
  lineInstalled = ifnbsp(lineInstalled);
  lineFootage = ifnbsp(lineFootage);
  meterInstalled = ifnbsp(meterInstalled);
  nmgStatus = ifnbsp(nmgStatus);
  nmgImportedOn = ifnbsp(nmgImportedOn);
  nmgRecord = ifnbsp(nmgRecord);
  nmgMap = ifnbsp(nmgMap);
  nmgPermit = ifnbsp(nmgPermit);
  spot = ifnbsp(spot);
  builder = ifnbsp(builder);
  builderPhone = ifnbsp(builderPhone);

  if (duplicate === "&nbsp;") {
    duplicate = false;
  } else {
    duplicate = true;
  }
  if (hasMeter === "&nbsp;") {
    hasMeter = false;
  } else {
    hasMeter = true;
  }
  if (nmgPermit === "&nbsp;") {
    nmgPermit = false;
  } else {
    nmgPermit = true;
  }
  if (open === "&nbsp;") {
    open = false;
  } else {
    open = true;
  }
  if (greenTags === "&nbsp;") {
    greenTags = false;
  } else {
    greenTags = true;
  }
  if (favorite === "&nbsp;") {
    favorite = false;
  } else {
    favorite = true;
  }
  if (spotsNotExpired === "&nbsp;") {
    spotsNotExpired = false;
  } else {
    spotsNotExpired = true;
  }

  let obj = {
    address,
    created,
    area,
    billTo,
    client,
    dateReceived,
    customerName,
    priority,
    lineInstalled,
    lineInstalled,
    lineFootage,
    serviceType,
    duplicate,
    meterInstalled,
    hasMeter,
    pnmStatus,
    nmgStatus,
    nmgImportedOn,
    nmgRecord,
    nmgMap,
    nmgPermit,
    open,
    greenTags,
    favorite,
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

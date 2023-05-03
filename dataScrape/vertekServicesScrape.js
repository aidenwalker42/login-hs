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
  let node = list[i].cells[2].textContent;
  let location = list[i].cells[3].innerHTML;
  if (location === "&nbsp;") {
    location = "";
  }
  let created = list[i].cells[4].textContent;
  let area = list[i].cells[5].textContent;
  let billTo = list[i].cells[6].textContent;
  let client = list[i].cells[7].textContent;
  let phone = list[i].cells[8].textContent;
  let customerName = list[i].cells[9].textContent;
  let dueDate = list[i].cells[10].textContent;
  let dropDate = list[i].cells[11].textContent;
  let cableType = list[i].cells[12].textContent;
  let completed = list[i].cells[13].textContent;
  let lineFootage = list[i].cells[14].textContent; //
  let boreFootage = list[i].cells[15].textContent; //
  let pedestal = list[i].cells[16].textContent; //
  let expedite = list[i].cells[17].textContent; //
  let rushApproved = list[i].cells[18].textContent; //
  let serviceType = list[i].cells[19].textContent;
  let status = list[i].cells[20].textContent;
  let expireStatus = list[i].cells[21].textContent;
  let work = list[i].cells[22].textContent;
  let jobPhotos = list[i].cells[23].textContent;
  let material = list[i].cells[24].textContent;
  let materialLoss = list[i].cells[25].textContent;
  let feedbackRating = list[i].cells[26].textContent;
  let spotsNotExpired = list[i].cells[27].textContent;
  let spot = list[i].cells[28].textContent;
  let spotStatus = list[i].cells[29].textContent;
  let damages = list[i].cells[30].textContent;

  billTo = ifnbsp(billTo);
  client = ifnbsp(client);
  phone = ifnbsp(phone);
  customerName = ifnbsp(customerName);
  dueDate = ifnbsp(dueDate);
  dropDate = ifnbsp(dropDate);
  completed = ifnbsp(completed);
  pedestal = checkmark(pedestal);
  expedite = checkmark(expedite);
  rushApproved = checkmark(rushApproved);
  serviceType = ifnbsp(serviceType);
  expireStatus = ifnbsp(expireStatus);
  expireStatus = checkmark(expireStatus);
  work = checkmark(work);
  jobPhotos = checkmark(jobPhotos);
  feedbackRating = checkmark(feedbackRating);
  spotsNotExpired = checkmark(spotsNotExpired);
  spot = ifnbsp(spot);
  spotStatus = ifnbsp(spotStatus);
  damages = checkmark(damages);

  let isnum = /^\d+$/.test(cableType);
  if (cableType.length === 1 && isnum === false) {
    cableType = "";
  }
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
    location,
    created,
    area,
    billTo,
    client,
    phone,
    customerName,
    dueDate,
    dropDate,
    cableType,
    completed,
    lineFootage,
    boreFootage,
    pedestal,
    expedite,
    rushApproved,
    serviceType,
    status,
    expireStatus,
    work,
    jobPhotos,
    material,
    materialLoss,
    feedbackRating,
    spotsNotExpired,
    spot,
    spotStatus,
    damages,
  };
  users.push(obj);
}
copy(users);
console.log(users);

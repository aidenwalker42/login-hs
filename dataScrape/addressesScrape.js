////
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
  let address = list[i].querySelector("a").innerHTML;
  address = ifnbsp(address);
  let created = list[i].cells[2].innerHTML;
  let city = list[i].cells[3].innerHTML;
  let state = list[i].cells[4].innerHTML;
  let zip = list[i].cells[5].innerHTML;
  let location = list[i].cells[6].innerHTML;
  let type = list[i].cells[7].innerHTML;
  type = ifnbsp(type);
  let foreman = list[i].cells[8].innerHTML;
  foreman = ifnbsp(foreman);
  let client = list[i].cells[9].innerHTML;
  client = ifnbsp(client);
  let schedule = list[i].cells[10].innerHTML;
  schedule = ifnbsp(schedule);
  let area = list[i].cells[11].innerHTML;
  let issues = list[i].cells[12].innerHTML; //need to scrape issue data
  if (issues === "&nbsp;") {
    issues = false;
  } else {
    issues = true;
  }
  let pnmStatus = list[i].cells[13].querySelector("div").innerHTML;
  pnmStatus = ifnbsp(pnmStatus);
  let nmgStatus = list[i].cells[14].querySelector("div").innerHTML;
  nmgStatus = ifnbsp(nmgStatus);
  let sparklightStatus = list[i].cells[15].querySelector("div").innerHTML;
  sparklightStatus = ifnbsp(sparklightStatus);
  let comcastStatus = list[i].cells[16].querySelector("div").innerHTML;
  comcastStatus = ifnbsp(comcastStatus);
  let centuryLinkStatus = list[i].cells[17].querySelector("div").innerHTML;
  centuryLinkStatus = ifnbsp(centuryLinkStatus);
  let cablecomStatus = list[i].cells[18].querySelector("div").innerHTML;
  cablecomStatus = ifnbsp(cablecomStatus);
  let node = list[i].cells[19].innerHTML;
  node = ifnbsp(node);
  let vertekStatus = list[i].cells[20].querySelector("div").innerHTML;
  vertekStatus = ifnbsp(vertekStatus);
  let obj = {
    address,
    created,
    city,
    state,
    zip,
    location,
    type,
    foreman,
    client,
    schedule,
    area,
    issues,
    pnmStatus,
    nmgStatus,
    sparklightStatus,
    comcastStatus,
    centuryLinkStatus,
    cablecomStatus,
    node,
    vertekStatus,
  };
  users.push(obj);
}
copy(users);
console.log(users);

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
  let issue = list[i].querySelector("a").innerHTML;
  let address = list[i].cells[2].textContent;
  let client = list[i].cells[3].textContent;
  let admin = list[i].cells[4].textContent;
  let service = list[i].cells[5].textContent;
  let priority = list[i].cells[6].textContent;
  let status = list[i].cells[7].textContent;
  let resolved = list[i].cells[8].textContent;
  let needsAttention = list[i].cells[9].textContent;
  let lastUpdated = list[i].cells[10].textContent;

  if (issue === "&nbsp;") {
    issue = "";
  }

  address = ifnbsp(address);
  client = ifnbsp(client);
  admin = ifnbsp(admin);
  service = ifnbsp(service);
  priority = ifnbsp(priority);
  status = ifnbsp(status);
  lastUpdated = ifnbsp(lastUpdated);
  resolved = checkmark(resolved);
  needsAttention = checkmark(needsAttention);

  let obj = {
    issue,
    address,
    client,
    admin,
    service,
    priority,
    status,
    resolved,
    needsAttention,
    lastUpdated,
  };
  users.push(obj);
}
copy(users);
console.log(users);

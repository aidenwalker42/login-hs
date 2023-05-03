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
  let client = list[i].cells[2].textContent;
  let lineman = list[i].cells[3].textContent;
  let pnmStatus = list[i].cells[4].textContent;
  let meterType = list[i].cells[5].textContent;
  let meter = list[i].cells[6].textContent;
  let meterReading = list[i].cells[7].textContent;
  let volts = list[i].cells[8].textContent;
  client = ifnbsp(client);
  lineman = ifnbsp(lineman);
  meter = ifnbsp(meter);
  let isnum = /^\d+$/.test(meterReading);
  if (meterReading.length === 1 && isnum === false) {
    meterReading = "";
  }
  let isnum2 = /^\d+$/.test(volts);
  if (volts.length === 1 && isnum2 === false) {
    volts = "";
  }

  let obj = {
    address,
    client,
    lineman,
    pnmStatus,
    meterType,
    meter,
    meterReading,
    volts,
  };
  users.push(obj);
}
copy(users);
console.log(users);

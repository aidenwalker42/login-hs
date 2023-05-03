let dataObj = [
  { username: "Aiden", password: "hif121" },
  { username: "Aiden", password: "hif121" },
  { username: "bitchass", password: "lol" },
];
let account = {
  username: "bitchass",
  password: "lol",
};

const user = dataObj.find((user) => user.username === account.username);

console.log(user);

account.uuid = "ioudsfhgijsdhoiujasdhrdiugnadfnbvisuodfnbipusdnuifghtnhposdh";
console.log("session added");
console.log(account);
const index = dataObj.findIndex((user) => user.username === account.username);
console.log(index);
dataObj[index].uuid = account.uuid;
console.log("new data obj:");
console.log(dataObj);

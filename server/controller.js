const database = require("./db.json");
const registerCodes = require("./registerCodes.json");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  createAccount: function (req, res) {
    let dataFile = fs.readFileSync(__dirname + "/db.json");
    let dataObj = JSON.parse(dataFile);
    console.log(req.body);
    const { username, password } = req.body;
    const salt = bcrypt.genSaltSync(5);
    const passHash = bcrypt.hashSync(password, salt);
    let account = {
      username,
      passHash,
      roles: [],
    };
    if (dataObj.find((user) => user.username === account.username)) {
      console.log("already exists");
      res.status(200).send("That username is taken.");
    } else {
      dataObj.push(account);
      fs.writeFile(
        __dirname + "/db.json",
        JSON.stringify(dataObj, null, 2),
        (err) => {
          if (err) throw err;
          console.log("done writing...");
        }
      );
      res.status(200).send(database); //success
      console.log(database);
    }
  },
  loginServer: function (req, res) {
    let dataFile = fs.readFileSync(__dirname + "/db.json");
    let dataObj = JSON.parse(dataFile);
    const { username, password } = req.body;
    let account = {
      username,
      password,
    };
    const user = dataObj.find((user) => user.username === account.username); //returns user object where the statement is true
    console.log(req.body);
    if (user && bcrypt.compareSync(account.password, user.passHash)) {
      const uuid = uuidv4();
      account.uuid = uuid;
      console.log("session added");
      console.log(account);
      const index = dataObj.findIndex(
        (user) => user.username === account.username
      );
      dataObj[index].uuid = account.uuid;
      res.status(200).send([true, uuid]);
    } else {
      res.status(200).send(false);
    }
  },
  generateCode: function (req, res) {
    console.log(req.body);
    const { selectedRole } = req.body;
    let dataFile = fs.readFileSync(__dirname + "/registerCodes.json");
    let dataObj = JSON.parse(dataFile);
    const uuid = uuidv4();
    let regCode = {
      code: uuid,
      selectedRole,
    };
    dataObj.push(regCode);
    fs.writeFile(
      __dirname + "/registerCodes.json",
      JSON.stringify(dataObj, null, 2),
      (err) => {
        if (err) throw err;
        console.log("done writing...");
      }
    );
  },
};

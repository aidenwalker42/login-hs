const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.static("public"));
const cors = require("cors");
const ctrl = require("./controller");

const { createAccount, loginServer, generateCode } = ctrl;

app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
let port = process.env.PORT || 5501;
server.listen(port, () => {
  console.log("Server running on port: " + port);
});

app.post("/api/createAccount", createAccount);
app.post("/api/login", loginServer);
app.post("/api/admin/generateCode", generateCode);

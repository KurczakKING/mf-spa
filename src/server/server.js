const express = require("express");
const port = 9000;
const app = express();

app.get("/", function (request, response) {
  console.log("Ahoj!");
  response.end("Ahoj2");
});

app.listen(port, (error) => {
  if (error) {
    return console.log(
      "Jejda! Serwer NIE działa z powodu błędu ",
      error,
      " :("
    );
  }
  console.log("Serwer działa na porcie ", port);
});
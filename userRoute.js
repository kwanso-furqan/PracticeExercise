var express = require("express");
var router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
    try {
      res.send(response.data);
      //   console.log(response.data);
    } catch (ex) {
      console.log(ex);
    }
  });
});

module.exports = router;

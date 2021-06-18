const fetch = require("node-fetch");
const express = require('express');
const router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/fetch_tabla", async(req, res) => {
  const url = `https://inventario-7fb44-default-rtdb.firebaseio.com/articulos.json`;
  const options = {
    "method": "GET",
  };
  const response = await fetch(url, options)
  .then(res => res.json())
  .catch(e =>{
    console.error({
      "message": "oh noes",
      error:e,
    });
  });
  console.log("RESPONSE: ", response);
  res.send(response);
});

module.exports = router;

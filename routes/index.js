const fetch = require("node-fetch");
const express = require('express');
const router = express.Router();
const cors = require("cors")

const app1 = express(); //crear al servidor
const port = process.env.PORT || 3080;

app1.use(cors())


app1.use(express.urlencoded());
app1.use(express.json());


app1.use(express.static(process.cwd()+"/my-app/dist/ProyectoAngular/"));

app1.get('/', (req,res) => {
    res.sendFile(process.cwd()+"/my-app/dist/ProyectoAngular/index.html");
});

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


app1.listen(port, () => {
  console.log(`hola servidor ejecucion en http://localhost:${port}`);
})
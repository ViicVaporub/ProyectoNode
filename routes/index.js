var express = require('express');
var router = express.Router();
const cors = require("cors");



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
const app = express(); //crear al servidor
const port = process.env.PORT || 3080;
app.use(cors())

app.use(express.urlencoded());
app.use(express.json());


module.exports = router;


app.listen(port, () => {
  console.log(`hola servidor ejecucion en http://localhost:${port}`);
})

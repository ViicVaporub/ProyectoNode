const fetch = require("node-fetch");
const express = require('express');
const router = express.Router();
const functions = require("firebase-functions");



const admin = require('firebase-admin')

const {Router} = require('express')
const router = Router()

admin.initializeApp({
    credential: admin.credential.cert('./permissions.json'),
    databaseURL: 'https://inventario-7fb44-default-rtdb.firebaseio.com'
})
const db= admin.firestore()

router.post("/api/cosas", async (req,res)=>{
    await db.collection("cosas")
    .doc("/" + req.body.id + "/")
    .create({name:req.body.name})
    return res.status(204).json();
});

router.get('/api/cosas', async (req, res)=>{
    try{
        const query = db.collection("cosas");
        const querySnapshot = await query.get();
        const docs = querySnapshot.docs
    
       const response = docs.map((doc) => ({
            id:doc.id,
            name: doc.data().name,
           
        }));
    
        return res.status(200).json(response);
    } catch(error){
        return res.status(500).json();


    }
   
});

router.get('/api/articulos', async (req, res)=>{
    try{
        const query = db.collection('articulos');
        const querySnapshot = await query.get();
        const docs = querySnapshot.docs
    
       const response = docs.map((doc) => ({
            id:doc.id,
            codigo: doc.data().codigo,
            departamento: doc.data().departamento,
            nombre: doc.data().nombre,
            proveedor: doc.data().proveedor,
            stock: doc.data().stock,
            tipo: doc.data().tipo,
            valoractivo: doc.data().valoractivo,
            valorcompra: doc.data().valorcompra,
        }));
    
        return res.status(200).json(response);
    } catch(error){
        return res.status(500).json();


    }
   
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

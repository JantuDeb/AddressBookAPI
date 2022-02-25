const express = require("express");
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const {readAddresses, createAdress, deleteAddress, updateAddress} = require("../controller/address")

//Swagger
const swaggerDocument = YAML.load('./swagger.yaml');
router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup(swaggerDocument));

router.get("/addresses",readAddresses)
router.post("/addresses",createAdress)
router.delete("/addresses/:id",deleteAddress)
router.patch("/addresses/:id",updateAddress)

module.exports = router
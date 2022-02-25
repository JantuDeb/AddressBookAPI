const express = require("express");
const router = express.Router();
const {readAddresses, createAdress, deleteAddress, updateAddress} = require("../controller/address")

router.get("/addresses",readAddresses)
router.post("/addresses",createAdress)
router.delete("/addresses/:id",deleteAddress)
router.patch("/addresses/:id",updateAddress)

module.exports = router
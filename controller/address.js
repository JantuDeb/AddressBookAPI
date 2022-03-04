const { v4 } = require("uuid");
const { fakeAdress } = require("../fakeData");
//Adress

let addresses = [...fakeAdress];

//GET ADRESSES
exports.readAddresses = (req, res) => {
  res.json({ status: "success", error: "", addresses });
};

// SAVE ADRESSES
exports.createAdress = (req, res) => {
  const { name, phone, pincode, state, city, addressLine1 } = req.body;
  if (!name || !city || !phone || !pincode || !state || !addressLine1) {
    return res.status(400).json({
      status: "fail",
      error: "Provide all the fields",
      address: req.body,
    });
  }
  const address = { id: v4(), name, city };
  addresses.push(address);
  res.status(201).json({ status: "success", error: "", address });
};

//DELETE ADDRESS
exports.deleteAddress = (req, res) => {
  const { id } = req.params;
  const address = addresses.find((adds) => adds.id === id);
  if (!address) {
    return res.status(404).json({
      status: "fail",
      error: "No address found with this id",
      data: "",
    });
  }
  addresses = addresses.filter((adds) => adds.id !== id);
  res.status(200).json({ status: "success", error: "", address });
};

//UPDATE ADDRESS
exports.updateAddress = (req, res) => {
  const { id } = req.params;
  const { name, phone, pincode, state, city, addressLine1 } = req.body;

  if (!name || !id || !city || !phone || !pincode || !state || !addressLine1) {
    return res.status(400).json({
      status: "fail",
      error: "Provide name and city",
      data: "",
    });
  }

  const address = addresses.find((adds) => adds.id === id);
  if (!address) {
    return res.status(404).json({
      status: "fail",
      error: "No address found with this id",
      data: "",
    });
  }

  addresses = addresses.map((adds) =>
    adds.id === id
      ? { ...address, name, phone, pincode, state, city, addressLine1 }
      : adds
  );

  res.status(200).json({
    status: "success",
    error: "",
    address: { ...address, name, phone, pincode, state, city, addressLine1 },
  });
};

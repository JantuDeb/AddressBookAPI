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
  const { name, city } = req.body;
  if (!name || !city) {
    return res.status(400).json({
      status: "fail",
      error: "Provide all the fields",
      data: req.body,
    });
  }
  const address = { id: v4(), name, city };
  addresses.push(address);
  res.status(201).json({ status: "success", error: "", data: address });
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
  res.status(200).json({ status: "success", error: "", data: address });
};

//UPDATE ADDRESS
exports.updateAddress = (req, res) => {
  const { id } = req.params;
  const { name, city } = req.body;

  if (!name || !city || !id) {
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
    adds.id === id ? { ...address, name, city } : adds
  );

  res
    .status(200)
    .json({ status: "success", error: "", data: { ...address, city, name } });
};

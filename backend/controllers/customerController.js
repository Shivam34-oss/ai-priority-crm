const Customer = require("../models/Customer");

exports.getCustomers = async (req, res) => {
  const list = await Customer.find().sort({ createdAt: -1 });
  res.json(list);
};

exports.addCustomer = async (req, res) => {
  const c = await Customer.create(req.body);
  res.json(c);
};

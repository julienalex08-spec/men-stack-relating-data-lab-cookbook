const User = require("../models/user.js");

const getFoods = async (req, res) => {
  const currentUser = await User.findById(req.session.user._id);

  res.render("foods/index.ejs", {
    pantry: currentUser.pantry,
  });
};

const addFoods = (req, res) => {
  res.render("foods/new.ejs");
};

const createItem = async (req, res) => {
  const currentUser = await User.findById(req.session.user._id);
  currentUser.pantry.push(req.body);
  await currentUser.save();

  res.redirect("/foods");
};

const itemDetails = async (req, res) => {
  const currentUser = await User.findById(req.session.user._id);
  const pantryData = currentUser.pantry.id(req.params.pantryId);

  res.render("foods/show.ejs", {
    pantryItem: pantryData,
  });
};

const deleteItem = async (req, res) => {
  const currentUser = await User.findById(req.session.user._id);
  currentUser.pantry.id(req.params.pantryId).deleteOne();

  await currentUser.save();

  res.redirect("/foods");
};

const getEditFormPage = async (req, res) => {
  const currentUser = await User.findById(req.session.user._id);
  const pantryData = currentUser.pantry.id(req.params.pantryId);
  res.render("foods/edit.ejs", {
    pantryItem: pantryData,
  });
};

const updateItem = async (req, res) => {
  const currentUser = await User.findById(req.session.user._id);
  const pantryItem = currentUser.pantry.id(req.params.pantryId);
  pantryItem.set(req.body);
  await currentUser.save();
  res.redirect(`/foods/${req.params.pantryId}`);
};

module.exports = {
  getFoods,
  addFoods,
  createItem,
  itemDetails,
  deleteItem,
  getEditFormPage,
  updateItem,
};

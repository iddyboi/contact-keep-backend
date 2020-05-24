const express = require("express");

const router = express.Router();

//@route  Post api/contacts
//@desc   get all users contacts
//@access private
router.get("/", (req, res) => {
  res.send("Get all users");
});

//@route  Post api/contacts
//@desc   gadd new contact
//@access private
router.post("/", (req, res) => {
  res.send("Add a contact");
});

//@route  Post api/contacts
//@desc   get all users contacts
//@access private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

//@route  Post api/contacts
//@desc   delete contact
//@access private
router.delete("/:id", (req, res) => {
  res.send("delete contact");
});

module.exports = router;

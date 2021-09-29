const express = require("express");
const { addProject } = require("../controllers/admin.controllers");

const router = express.Router();

router.post("/admin", addProject);

module.exports = {
  routes: router,
};

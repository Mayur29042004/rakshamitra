const express = require("express");
const router = express.Router();
const { createRequest, confirmDispatch } = require("../controllers/ambulance.controller");
const upload = require("../middleware/upload");
const auth = require("../middleware/auth");

router.post("/request", auth, upload.single("file"), createRequest);
router.post("/confirm/:id", auth, confirmDispatch);

module.exports = router;
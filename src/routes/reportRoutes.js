const express = require("express");
const router = express.Router();

const reportController = require("./../controllers/reportController");

//Rota para o PDF
router.get("/report/pdf", reportController.exportPostPDF);


module.exports = router;
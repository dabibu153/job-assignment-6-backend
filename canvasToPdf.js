const express = require("express");
const router = express.Router();
const ImageDataURI = require("image-data-uri");
const imagesToPdf = require("images-to-pdf");
const fs = require("fs");

router.post("/canvasToPdf", async (req, res) => {
  await ImageDataURI.outputFile(req.body.canvas, "./processedData/image.png");
  await imagesToPdf(["./processedData/image.png"], "./pdfs/final.pdf");

  const data = await fs.createReadStream("./pdfs/final.pdf");
  data.pipe(res);
});

module.exports = router;

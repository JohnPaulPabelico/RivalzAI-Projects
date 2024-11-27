import fs from "fs";
import PDFDocument from "pdfkit";
import { context } from "./context";

const doc = new PDFDocument();

const writeStream = fs.createWriteStream("context-output.pdf");

doc.pipe(writeStream);

doc.fontSize(18).text("Context Information", { align: "center" });
doc.moveDown(2);

context.forEach((entry, index) => {
  doc.fontSize(12).text(`Entry #${index + 1}`, { underline: true });
  doc.fontSize(12).text(`Name: ${entry.name}`);
  doc.fontSize(12).text(`Location: ${entry.location}`);
  doc.fontSize(12).text(`Timestamp: ${entry.timestamp}`);
  doc.moveDown(1);
});

doc.end();

writeStream.on("finish", () => {
  console.log("PDF created successfully from JSON data!");
});

// Generates a clean one-page résumé PDF from Nitesh's real backend résumé content.
// Run with:  node scripts/make-resume-pdf.mjs   →  public/Nitesh-Kadve-Resume.pdf
//
// This is an accurate text résumé. You can still replace the output file with a
// custom-designed PDF any time — the site just serves whatever sits at that path.
import PDFDocument from "pdfkit";
import { createWriteStream, mkdirSync } from "node:fs";

const NAVY = "#172650";
const INK = "#1f2430";
const GRAY = "#52606d";
const RULE = "#cdd3dd";

const out = new URL("../public/Nitesh-Kadve-Resume.pdf", import.meta.url);
mkdirSync(new URL("../public", import.meta.url), { recursive: true });

const doc = new PDFDocument({ size: "A4", margin: 48 });
doc.pipe(createWriteStream(out));

const LEFT = doc.page.margins.left;
const RIGHT = doc.page.width - doc.page.margins.right;
const WIDTH = RIGHT - LEFT;

// ---- Header -------------------------------------------------------------
doc.font("Helvetica-Bold").fontSize(22).fillColor(NAVY).text("Nitesh Kadve");
doc
  .font("Helvetica")
  .fontSize(11.5)
  .fillColor(INK)
  .text("Node.js Backend Developer", { paragraphGap: 2 });
doc
  .font("Helvetica")
  .fontSize(9)
  .fillColor(GRAY)
  .text(
    "Pune, India  |  niteshpawar97@gmail.com  |  +91 8821861409",
    { paragraphGap: 1 },
  )
  .text("linkedin.com/in/niteshkadve  |  github.com/niteshpawar97");

doc.moveDown(0.5);
rule();

// ---- Sections -----------------------------------------------------------
section("Profile Summary");
body(
  "Backend Developer with 3+ years of experience building server-side applications using Node.js and Express.js. Experienced in developing REST APIs, implementing authentication, and handling asynchronous backend logic. Worked with MySQL and MongoDB databases to support scalable backend systems and resolve production issues.",
);

section("Technical Skills");
skill("Back-End", "Node.js, Express.js, JavaScript (ES6+), TypeScript, REST API, JWT, OAuth, WebSockets, MQTT");
skill("Database", "MySQL, MongoDB, Sequelize, Prisma, Redis");
skill("Libraries", "bcrypt, Joi, Multer, Nodemailer, Axios, Mongoose, Node-cron");
skill("DevOps & Tools", "Docker (Basic), AWS (EC2, S3), Git, Postman, Swagger, Nginx, Jest, Mocha");

section("Work Experience");
roleHeader("Backend Developer  ·  Niket Group (Independent)", "Jan 2022 – Present");
bullet("Built and maintained scalable REST APIs using Node.js and Express.js for SaaS and internal business applications.");
bullet("Worked with MySQL and MongoDB databases for data storage; wrote and optimized slow queries.");
bullet("Implemented real-time features using WebSockets for live data updates in software applications.");
bullet("Developed IoT backend integration using the MQTT protocol for device communication.");
bullet("Debugged and fixed production issues; improved API performance through code optimization and security best practices.");
bullet("Set up Docker containers for local development and deployment on AWS EC2.");
bullet("Wrote unit tests using Jest and Mocha; documented APIs using Swagger.");
bullet("Collaborated with frontend teams to integrate backend APIs.");

section("Key Projects");
project("ERP Billing System", "Role-based access control with JWT, PDF invoice generation, GST calculation module, and Redis caching for optimized API performance.");
project("PumpSathi — GSM Motor Controller (IoT Platform)", "Backend for remote motor control over MQTT and WebSockets — acknowledged commands, real-time monitoring, and OTA firmware updates for connected devices.");
project("Water Delivery Management", "Node.js/Express API over MySQL for routes, deliveries, customers, and payments, with per-customer running balances derived from the ledger.");
project("SahuBandhan — Community Platform", "Backend for a community and matrimonial platform — verified member profiles, preference-based search, matchmaking, and Firebase push notifications.");
project("Notification Service", "Email notification system using Nodemailer with queue-based delivery, template support, and a retry mechanism for failed emails.");

section("Education");
roleHeader(
  "Bachelor of Computer Applications (BCA)  ·  Makhanlal Chaturvedi University, Bhopal",
  "Expected May 2026",
);

section("Certifications");
bullet("Node.js, Express, MongoDB & More: The Complete Bootcamp — Udemy (2022)");
bullet("Backend Development with Node.js & RESTful APIs — Udemy (2023)");

doc.end();
console.log("Wrote public/Nitesh-Kadve-Resume.pdf");

// ---- Helpers ------------------------------------------------------------
function rule() {
  doc
    .moveTo(LEFT, doc.y)
    .lineTo(RIGHT, doc.y)
    .lineWidth(0.8)
    .strokeColor(RULE)
    .stroke();
}

function section(title) {
  doc.x = LEFT;
  doc.moveDown(0.7);
  doc
    .font("Helvetica-Bold")
    .fontSize(10.5)
    .fillColor(NAVY)
    .text(title.toUpperCase(), LEFT, doc.y, { characterSpacing: 0.6 });
  doc.moveDown(0.15);
  rule();
  doc.moveDown(0.3);
}

function body(text, gap = 4) {
  doc
    .font("Helvetica")
    .fontSize(9.5)
    .fillColor(INK)
    .text(text, LEFT, doc.y, { width: WIDTH, align: "left", lineGap: 1.5, paragraphGap: gap });
}

function skill(label, value) {
  doc.font("Helvetica-Bold").fontSize(9.5).fillColor(INK).text(`${label}:  `, LEFT, doc.y, {
    continued: true,
  });
  doc.font("Helvetica").fillColor(GRAY).text(value, { lineGap: 1.5, paragraphGap: 3 });
}

function roleHeader(left, right) {
  const y = doc.y;
  doc.font("Helvetica-Bold").fontSize(10).fillColor(INK).text(left, LEFT, y, {
    width: WIDTH - 110,
  });
  const endY = doc.y;
  doc
    .font("Helvetica-Oblique")
    .fontSize(9)
    .fillColor(GRAY)
    .text(right, RIGHT - 110, y, { width: 110, align: "right" });
  doc.y = Math.max(endY, doc.y);
  doc.x = LEFT;
  doc.moveDown(0.25);
}

function bullet(text) {
  doc.font("Helvetica").fontSize(9.5).fillColor(INK);
  doc.text("•", LEFT, doc.y, { continued: false, width: 12 });
  doc.moveUp();
  doc.text(text, LEFT + 14, doc.y, {
    width: WIDTH - 14,
    lineGap: 1.2,
    paragraphGap: 2.5,
  });
  doc.x = LEFT;
}

function project(name, desc) {
  doc.font("Helvetica-Bold").fontSize(9.5).fillColor(INK).text(`${name}:  `, LEFT, doc.y, {
    continued: true,
  });
  doc.font("Helvetica").fillColor(GRAY).text(desc, {
    width: WIDTH,
    lineGap: 1.2,
    paragraphGap: 3.5,
  });
  doc.x = LEFT;
}

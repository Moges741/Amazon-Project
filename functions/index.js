const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/https");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

setGlobalOptions({ maxInstances: 10 });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Backend is working 🚀",
  });
});

exports.api = onRequest(app);

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors({ origin: true })); // Allows requests from any origin (adjust if needed)
app.use(express.json()); // Parses JSON bodies

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Backend is working 🚀",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;

  if (total > 0) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Number(total), // Ensure it's a number (Stripe expects cents)
        currency: "USD",
      });

      res.status(201).json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(403).json({
      message: "Total should be greater than 0",
    });
  }
});





module.exports = app;
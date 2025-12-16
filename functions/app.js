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

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "USD",
    });
    // console.log(paymentIntent);
    // res.status(201).json(paymentIntent);//to the client_secret
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  }else{
    res.status(403).json({
      message: "Total is should be greater than 0"

    })
  }
});

exports.api = onRequest(app);

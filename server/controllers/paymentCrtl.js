// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// import stripe from "stripe";
// stripe(process.env.STRIPE_SECRET_KEY);

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const paymentConroller = {
  async processPayment(req, res, next) {
    try {
      const myPayment = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: "usd",
        metadata: {
          company: "Ecommerce",
        },
      });
      res
        .status(200)
        .json({ success: true, client_secret: myPayment.client_secret });
    } catch (error) {
      return next(error);
    }
  },
  async sendStripeApiKey(req, res, next) {
    try {
      res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
    } catch (error) {
      return next(error);
    }
  },
};

export default paymentConroller;

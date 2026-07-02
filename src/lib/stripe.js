import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const PLANS_PRICE_ID = {
  2: "price_1ToarNKjJEPnfISIqMWqZQRc",
  3: "price_1Tobb4KjJEPnfISI4MrWhu0b"
};

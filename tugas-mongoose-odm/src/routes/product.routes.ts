import { Router } from "express";
import Product from "../models/product.model";

const router = Router();

// Find all products with category populated
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find().populate("category");
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

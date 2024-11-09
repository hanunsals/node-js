import { Request, Response } from "express";
import ProductsModel from "../models/products.model";
import CategoriesModel from "../models/categories.model"; 

export default {
  // Create product
  async create(req: Request, res: Response) {
    try {
      const result = await ProductsModel.create(req.body);
      // Populate categoryId with category details
      const populatedResult = await result.populate('categoryId');
      
      res.status(201).json({
        data: populatedResult,
        message: "Success create product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed create product",
      });
    }
  },

  // Get all products
  async findAll(req: Request, res: Response) {
    try {
      // Populate categoryId with category details
      const result = await ProductsModel.find().populate('categoryId');
      
      res.status(200).json({
        data: result,
        message: "Success get all products",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get all products",
      });
    }
  },

  // Get one product
  async findOne(req: Request, res: Response) {
    try {
      // Populate categoryId with category details
      const result = await ProductsModel.findOne({
        _id: req.params.id,
      }).populate('categoryId');

      res.status(200).json({
        data: result,
        message: "Success get one product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get one product",
      });
    }
  },

  // Update product
  async update(req: Request, res: Response) {
    try {
      const result = await ProductsModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
        }
      ).populate('categoryId'); // Populate after update
      
      res.status(200).json({
        data: result,
        message: "Success update product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed update product",
      });
    }
  },

  // Delete product
  async delete(req: Request, res: Response) {
    try {
      const result = await ProductsModel.findOneAndDelete({
        _id: req.params.id,
      });

      res.status(200).json({
        data: result,
        message: "Success delete product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed delete product",
      });
    }
  },
};
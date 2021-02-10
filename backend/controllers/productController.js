import express from 'express'
import asyncHandler from 'express-async-handler'
const router =express.Router()
import Product from '../models/productModel.js'

// @ descr fetch all products
// @ route GET /api/products
// @ acess Public
const getProducts = asyncHandler (async (req,res) => {
    const products = await Product.find({})
    res.json(products)  
})


// @ descr fetch single product
// @ route GET /api/products/:id
// @ acess Public
const getProductById = asyncHandler (async (req,res) => {
    const product= await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }else{
            res.status(404)
            throw new Error('Product not found')
        }
})


// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
  
    if (product) {
      await product.remove()
      res.json({ message: 'Product removed' })
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })

export {
    getProducts,
    getProductById,
    deleteProduct
}
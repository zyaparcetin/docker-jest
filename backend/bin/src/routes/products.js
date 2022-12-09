const express = require('express')
const Product = require('../models/product')
const User = require('../models/user')
// const Review = require('../models/review')

const router = express.Router()

/* GET products listing. */
router.get('/', async (req, res) => {
  const query = {}
  res.send(await Product.find(query).catch(error => console.log('Products not found, error: ', error)))
})

/* POST product */
router.post('/', async (req, res) => {
  const createdProduct = await Product.create(req.body)
  res.status(201).send(createdProduct)
})

module.exports = router

/* from my project

router.get('/:productId', (req, res, next) => {
  const product = products[req.params.productId]
  if (!product)
    return res.render('error', {
      error: { status: 404 },
      message: `No product with id ${req.params.id} found`,
    })
  return res.send(product)
}) */

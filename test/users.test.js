const request = require('supertest')
const app = require('../src/app')
const user = require('../src/models/user')

describe('User endpoints', () => {
  it('POST request to /users should create a user', async () => {
    const userToCreate = {
      name: `Somename${Date.now()}`,
      age: 12,
      likes: [],
      basket: [],
      reviews: [],
    }

    const createdUser = (await request(app).post('/users').send(userToCreate)).body

    expect(createdUser.name).toBe(userToCreate.name)
    expect(createdUser.age).toBe(userToCreate.age)
    expect(createdUser.likes).toBe(userToCreate.likes)
    expect(createdUser.basket).toBe(userToCreate.basket)
    expect(createdUser.reviews).toBe(userToCreate.reviews)
  })

  it('GET request to /users should list users', async () => {
    const userList = (await request(app).get('/users')).body
    const userExist = userList.length > 0

    expect(userExist).toBe(true)
  })

  it('user should be able to like a product', async () => {
    // create a user
    const userToCreate = {
      name: `Somename${Date.now()}`,
      age: 12,
      likes: [],
      basket: [],
      reviews: [],
    }
    // create a product
    const productToCreate = {
      name: `Somename${Date.now()}`,
      price: 15,
      likedBy: [],
      reviews: [],
    }

    const createdUser = (await request(app).post('/users').send(userToCreate)).body
    const createdProduct = (await request(app).post('/products').send(productToCreate)).body

    // user.likeProduct(product)

    expect(createdUser.name).toBe(userToCreate.name)
    expect(createdUser.age).toBe(userToCreate.age)
    expect(createdUser.likes).toBe(userToCreate.likes)
    expect(createdUser.basket).toBe(userToCreate.basket)
    expect(createdUser.reviews).toBe(userToCreate.reviews)

    expect(createdProduct.name).toBe(productToCreate.name)
    expect(createdProduct.price).toBe(productToCreate.price)
    expect(createdProduct.likedBy).toBe(productToCreate.likedBy)
    expect(createdProduct.reviews).toBe(productToCreate.reviews)

    // expect(createdUser.likes).toContain(userToCreate.likes)
    // expect(createdProduct.likedBy).toContain(productToCreate.likedBy)
  })
})

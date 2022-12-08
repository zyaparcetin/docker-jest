const request = require('supertest')
const app = require('../src/app')

describe('User endpoints', () => {
  it('POST request to /users should create a user', async () => {
    const userToCreate = {
      name: `Somename${Date.now()}`,
      age: 12,
    }

    const createdUser = (await request(app).post('/users').send(userToCreate)).body

    expect(createdUser.name).toBe(userToCreate.name)
    expect(createdUser.age).toBe(userToCreate.age)
  })

  it('GET request to /users should list users', async () => {
    const userList = (await request(app).get('/users')).body
    const userExist = userList.length > 0

    expect(userExist).toBe(true)
  })

  it('Add a product to basket', async () => {
    const userToCreate = {
      name: `Somename${Date.now()}`,
      age: 12,
    }
    const productToCreate = {
      name: 'Somename',
      price: 15,
    }

    const createdUser = (await request(app).post('/users').send(userToCreate)).body
    const createdProduct = (await request(app).post('/products').send(productToCreate)).body

    expect(createdUser.name).toBe(userToCreate.name)
    expect(createdUser.age).toBe(userToCreate.age)

    expect(createdProduct.name).toBe(productToCreate.name)
    expect(createdProduct.price).toBe(productToCreate.price)
  })
})

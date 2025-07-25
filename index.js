const Joi = require('joi');
const express = require('express');
const app = express();
const loginRouter = require('./src/login');
const signupRouter = require('./src/signup');
const productsRouter = require('./src/products');

app.use(express.json());
app.use('/login', loginRouter);
app.use('/signup', signupRouter)
app.use('/products', productsRouter);

const port = process.env.PORT || 3000;

app.get('/getProducts/:id', (req, res) => {
  res.send(req.params.id);
})

app.post('/addProduct', (req, res) => {
  const schema = Joi.object({
    productName: Joi.string().min(1).required(),
    price: Joi.number().min(0).required()
  })
  const { error } = schema.validate(req.body);

  if (error) res.status(400).send(error.details[0].message)
  else res.status(200).send('Product added sucessfully');
})

app.listen(port, () => {
  console.log(`Main index file: Server running on port ${port}`);
});
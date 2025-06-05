const express = require('express');
const app = express();
const loginRouter = require('./login/login');

app.use(express.json());
app.use('/login', loginRouter);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
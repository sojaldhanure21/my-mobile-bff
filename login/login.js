const express = require('express');
const cors = require('cors');
const router = express.Router();

router.use(cors());
router.use(express.json()); // Make sure this is before your routes

// Dummy user for demonstration
const user = {
  email: 'test@example.com',
  password: 'password123'
};

router.post('/', (req, res) => {
    const { email, password } = req.body;


    // Check credentials
    if (email === user.email && password === user.password) {
        return res.status(200).json({ message: 'Login successful.' });
    } else {
        return res.status(200).json({ message: 'Invalid email or password.' });
    } 
});

module.exports = router;
const express = require('express');
const cors = require('cors');

const router = express.Router();
router.use(cors());
router.use(express.json());

// For demo: in-memory user store
const users = [];

// POST /signup
router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email, and password are required.' });
    }

    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(409).json({ message: 'User already exists.' });
    }

    users.push({ name, email, password });
    return res.status(200).json({ message: 'User registered successfully.' });
});

module.exports = router;
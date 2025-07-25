const express = require('express');
const cors = require('cors');
const { products } = require('../utility/constants');
const router = express.Router();

router.use(cors());
router.use(express.json());

// GET /products - return all products
router.get('/', (req, res) => {
    res.json({
        status: "success",
        products: products
    });
});

module.exports = router;
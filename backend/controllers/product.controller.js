const productService = require('../services/product.service')


const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.status(201).send(product);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productService.deleteProduct(productId);
        res.status(201).send(product);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productService.updateProduct(productId, req.body);
        res.status(201).send(product);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}

const findProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productService.findProductById(productId);
        res.status(201).send(product);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProduct(req.query);
        res.status(200).send(products);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}

const createMultipleProduct = async (req, res) => {
    try {
        const product = await productService.createMultipleProducts(req.body);
        res.status(201).send({ message: 'Product created successfully' });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    findProductById,
    getAllProducts,
    createMultipleProduct,
};
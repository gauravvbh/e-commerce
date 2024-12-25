const productService = require('../services/product.service')


const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        return res.status(201).send(product);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productService.deleteProduct(productId);
        return res.status(201).send(product);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productService.updateProduct(productId, req.body);
        return res.status(201).send(product);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
}

const findProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productService.findProductById(productId);
        return res.status(201).send(product);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
}




const getAllProducts = async (req, res) => {
    console.log("Request received");
    try {
        const products = await productService.getAllProduct(req.query);
        console.log("Sending products response");
        return res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error); // Use console.error for errors
        return res.status(500).send("Error fetching products"); // Send error response ONLY ONCE
    }
};

const createMultipleProduct = async (req, res) => {
    try {
        const product = await productService.createMultipleProducts(req.body);
        return res.status(201).send({ message: 'Product created successfully' });
    }
    catch (error) {
        return res.status(500).send(error.message);
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
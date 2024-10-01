const Product = require('../models/product.model')
const Category = require('../models/category.model')



async function createProduct(reqData) {
    const requiredFields = ['topLevelCategory', 'secondLevelCategory', 'thirdLevelCategory', 'title', 'price', 'quantity'];
    for (let field of requiredFields) {
        if (!reqData[field]) {
            throw new Error(`Missing required field: ${field}`);
        }
    }

    let topLevel = await Category.findOne({ name: reqData.topLevelCategory });
    if (!topLevel) {
        topLevel = new Category({
            name: reqData.topLevelCategory,
            level: 1,
        });
        await topLevel.save();
    }

    let secondLevel = await Category.findOne({
        name: reqData.secondLevelCategory,
        // parentCategory: topLevel._id,
    });
    if (!secondLevel) {
        secondLevel = new Category({
            name: reqData.secondLevelCategory,
            parentCategory: topLevel._id,
            level: 2,
        });
        await secondLevel.save();
    }

    let thirdLevel = await Category.findOne({
        name: reqData.thirdLevelCategory,
        // parentCategory: secondLevel._id,
    });
    if (!thirdLevel) {
        thirdLevel = new Category({
            name: reqData.thirdLevelCategory,
            parentCategory: secondLevel._id,
            level: 3,
        });
        await thirdLevel.save();
    }

    const product = await Product.create({
        title: reqData.title,
        color: reqData.color,
        description: reqData.description,
        discountedPrice: reqData.discountedPrice,
        discountPercent: Math.round(((reqData.price - reqData.discountedPrice) / reqData.price) * 100),
        imageUrl: reqData.imageUrl,
        brand: reqData.brand,
        price: reqData.price,
        sizes: reqData.sizes,
        quantity: reqData.quantity,
        category: thirdLevel._id,
    });
    return product;
}

async function deleteProduct(productId) {
    const product = await findProductById(productId);
    await Product.findByIdAndDelete(productId);
    return "Product deleted successfully";
}

async function updateProduct(productId, reqData) {
    const updateProduct = await Product.findByIdAndUpdate(productId, reqData, {
        new: true,
    });
    if (!updateProduct) {
        throw new Error("Product not found");
    }
    return updateProduct;
}

async function findProductById(productId) {
    const product = await Product.findById(productId).populate("category");
    if (!product) {
        throw new Error("Product not found");
    }
    return product;
}

async function getAllProduct(reqQuery) {
    let {
        category,
        color,
        size,
        minPrice,
        maxPrice,
        minDiscount,
        sort,
        stock,
        pageNumber = 1, // Default to 1 if not provided
        pageSize = 10   // Default to 10 if not provided
    } = reqQuery;
    // Convert to appropriate types and ensure non-negative values
    minPrice = minPrice ? parseFloat(minPrice) : undefined;
    maxPrice = maxPrice ? parseFloat(maxPrice) : undefined;
    minDiscount = minDiscount ? parseFloat(minDiscount) : undefined;
    pageNumber = Math.max(parseInt(pageNumber, 10), 1); // Ensure pageNumber is at least 1
    pageSize = Math.max(parseInt(pageSize, 10), 1); // Ensure pageSize is at least 1
    let query = Product.find();

    if (category) {
        const existingCategory = await Category.findOne({ name: category });
        if (existingCategory) {
            query = query.where("category").equals(existingCategory._id);
        }
        else {
            return []
        }
    }
    // if (color) {
    //     const colorSet = new Set(color.split(",").map(color => color.trim().toLowerCase()));
    //     if (colorSet.size > 0) {
    //         const colorRegex = new RegExp([...colorSet].join("|"), "i");
    //         query = query.where("color").regex(colorRegex);
    //     }
    // }
    // if (sizes) {
    //     const sizeSet = new Set(sizes.split(",").map(size => size.trim().toLowerCase()));
    //     if (sizeSet.size > 0) {
    //         const sizeRegex = new RegExp([...sizeSet].join("|"), "i");
    //         query = query.where("sizes").regex(sizeRegex);
    //     }
    // }
    if (color) {
        const colorArray = color.split(",").map(c => c.trim().toLowerCase());
        if (colorArray.length > 0) {
            // Use regex to match colors in a case-insensitive way
            const colorRegex = new RegExp(`^(${colorArray.join("|")})$`, "i");
            query = query.where("color").regex(colorRegex);
        }
    }

    if (size) {
        const sizeArray = size.split(",").map(s => s.trim().toUpperCase());
        if (sizeArray.length > 0) {
            // Match sizes where the name field in the sizes array matches any of the specified sizes
            query = query.where("sizes").elemMatch({ name: { $in: sizeArray } });
        }
    }

    if (minPrice || maxPrice) {
        if (minPrice) query = query.where("discountedPrice").gte(minPrice);
        if (maxPrice) query = query.where("discountedPrice").lte(maxPrice);
    }
    if (minDiscount) {
        query = query.where("discountPercent").gte(minDiscount);
    }
    if (stock) {
        if (stock === "in_stock") {
            query = query.where("quantity").gt(0);
        } else if (stock === "out_of_stock") {
            query = query.where("quantity").lte(0);
        }
    }
    if (sort) {
        const sortDirection = sort === "price_high" ? -1 : 1;
        query = query.sort({ discountedPrice: sortDirection });
    }

    // Count total documents matching the query
    const totalProducts = await Product.countDocuments(query);

    // Calculate skip value and apply it to the query
    const skip = (pageNumber - 1) * pageSize;
    query = query.skip(skip).limit(pageSize);

    // Execute the query and get the products
    const products = await query.exec();
    const totalPages = Math.ceil(totalProducts / pageSize);

    // Return the results
    return { content: products, currentPage: pageNumber, totalPages };
}

// async function getAllProduct(reqQuery) {
//     let { category, color, sizes, minPrice, maxPrice, minDiscount, maxDiscount, sort, stock, pageNumber, pageSize } = reqQuery;

//     pageSize = pageSize || 10;
//     pageNumber = Math.max(parseInt(pageNumber, 10), 1);
//     minPrice = minPrice ? parseFloat(minPrice) : undefined;
//     maxPrice = maxPrice ? parseFloat(maxPrice) : undefined;
//     minDiscount = minDiscount ? parseFloat(minDiscount) : undefined;
//     pageNumber = Math.max(parseInt(pageNumber, 10), 1); // Ensure pageNumber is at least 1
//     pageSize = Math.max(parseInt(pageSize, 10), 1); // Ensure pageSize is at least 1
//     let query = Product.find();

//     if (category) {
//         const existingCategory = await Category.findOne({ name: category });
//         if (existingCategory) {
//             query = query.where("category").equals(existingCategory._id);
//         }
//     }
//     if (color) {
//         const colorSet = new Set(color.split(",").map(color => color.trim().toLowerCase()));
//         if (colorSet.size > 0) {
//             const colorRegex = new RegExp([...colorSet].join("|"), "i");
//             query = query.where("color").regex(colorRegex);
//         }
//     }
//     if (sizes) {
//         const sizeSet = new Set(sizes.split(",").map(size => size.trim().toLowerCase()));
//         if (sizeSet.size > 0) {
//             const sizeRegex = new RegExp([...sizeSet].join("|"), "i");
//             query = query.where("sizes").regex(sizeRegex);
//         }
//     }
//     if (minPrice || maxPrice) {
//         if (minPrice) query = query.where("discountedPrice").gte(minPrice);
//         if (maxPrice) query = query.where("discountedPrice").lte(maxPrice);
//     }
//     if (minDiscount) {
//         query = query.where("discountedPercent").gte(minDiscount);
//     }
//     if (stock) {
//         if (stock === "in_stock") {
//             query = query.where("quantity").gt(0);
//         }
//         else if (stock === "out_of_stock") {
//             query = query.where("quantity").lte(0);
//         }
//     }
//     if (sort) {
//         const sortDirection = sort === "price_high" ? -1 : 1;
//         query = query.sort({ discountedPrice: sortDirection });
//     }
//     const totalProducts = await Product.countDocuments(query);
//     const skip = (pageNumber - 1) * pageSize;
//     query = query.skip(skip).limit(pageSize);
//     const products = await query.exec();
//     const totalPages = Math.ceil(totalProducts / pageSize);

//     return { content: products, currentPage: pageNumber, totalPages };
// }

async function createMultipleProducts(products) {
    for (let product of products) {
        await createProduct(product);
    }
}

module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    findProductById,
    getAllProduct,
    createMultipleProducts,
};
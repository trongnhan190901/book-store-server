import {
    getProducts,
    getProductByCategory,
    addProduct,
    deleteProduct,
    updateProduct,
    getProductById,
} from '../controllers/product.controller.js';

import productSchema from '../models/product.model.js';

const productRoutes = [
    {
        url: '/products',
        method: 'GET',
        schema: productSchema,
        handler: getProducts,
    },
    {
        url: '/products/:id',
        method: 'GET',
        schema: productSchema,
        handler: getProductById,
    },
    {
        url: '/category=:category',
        method: 'GET',
        schema: productSchema,
        handler: getProductByCategory,
    },
    {
        url: '/products/add',
        method: 'POST',
        schema: productSchema,
        handler: addProduct,
    },
    {
        url: '/products/delete/:id',
        method: 'DELETE',
        schema: productSchema,
        handler: deleteProduct,
    },
    {
        url: '/products/update/:id',
        method: 'PUT',
        schema: productSchema,
        handler: updateProduct,
    },
];

export default productRoutes;

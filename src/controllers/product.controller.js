import productModel from '../models/product.model.js';

export const getProducts = async () => {
    return await productModel.find();
};

export const getProductById = async (req) => {
    return await productModel.findById(req.params.id);
};

export const getProductByCategory = async (req) => {
    return await productModel.find({ category: req.params.category });
};

export const addProduct = async (req, res) => {
    const newProduct = new productModel({
        name: req.body.name,
        price: req.body.price,
        episode: req.body.episode,
        image: req.body.image,
        category: req.body.category,
        description: req.body.description,
        quantity: req.body.quantity,
    });

    await newProduct.save();

    res.code(201).send(newProduct);
};

export const updateProduct = async (req, res) => {
    try {
        await productModel.findByIdAndUpdate(req.params.id, {
            $set: { price: req.body.price, quantity: req.body.quantity },
        });
        res.code(204).send();
    } catch (err) {
        res.code(500).send();
        console.log(err);
    }
};

export const deleteProduct = async (req, res) => {
    await productModel.findByIdAndDelete(req.params.id);
    res.code(204).send();
};

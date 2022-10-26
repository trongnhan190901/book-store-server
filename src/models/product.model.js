import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
    {
        name: { type: String, require: true },
        price: { type: Number, require: true },
        image: { type: String, require: true },
        episode: { type: Number },
        category: { type: String, require: true },
        description: { type: String },
        quantity: { type: Number, require: true },
    },
    {
        timestamps: true,
    },
);

const productModel = mongoose.model('Product', productSchema);

export default productModel;

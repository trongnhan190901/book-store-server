import mongoose from 'mongoose';

export const dbConnection = () => {
    mongoose
        .connect('mongodb://localhost:27017/book-store-server')
        .then(() => console.log('Connected'))
        .catch((err) => console.log(err));
};

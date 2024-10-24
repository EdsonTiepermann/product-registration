import Product from '../models/product-registration-model.js';

export const store = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(201).json(product);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const index = async (req, res) => {
    try {
        const product = await Product.find().exec();
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const update = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const destroy = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id).exec();
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};
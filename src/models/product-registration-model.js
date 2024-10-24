import db from "../config/db.js";

const productSchema = new db.Schema({
    product_name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    date_expiration: {
        type: Date,
        required: true
    }
});

const Product = db.model("Product", productSchema);

export default Product;

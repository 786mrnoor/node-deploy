const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: String,
    price: { type: Number, min: [0, 'wrong price'] },
    discountPercentage: { type: Number, min: [0, 'wrong min discount'], max: [50, 'wrong min discount'] },
    rating: { type: Number, min: [0, 'wrong min rating'], max: [5, 'wrong min rating'], default: 0 },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    thumbnail: { type: String, required: true },
    images: [String]
});

exports.Product = mongoose.model('Product', productSchema);
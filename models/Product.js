// First Require Mongoose
const mongoose = require('mongoose');


// Build Product Schema 
const productSchema = mongoose.Schema({

    productName: {
        type: String,
        required: true,
        maxlength: [100, "Product name exceeds character limit"]

    },
    productPrice: {
        type: Number,
        required: true

    },
    productDescription: {
        type: String,
        required: true,
        maxlength: [1000, "Product description exceeds character limit (1000 chars)"]

    },
    productStock: {
        type: Number,
        required: true

    },
    productImageUrls: [{
        type: String,
        maxLength: [500, "Product image URL exceeds character limit (500 chars)"]
    }],
    productBestsellerImage: {
        type: String,
        maxLength: [500, "Bestseller image URL exceeds character limit (500 chars)"]
    },
    productSourceType: {
        type: String,
        required: true
    },
    productMediaFormat: {
        type: String,
        required: true
    },
    productSource: {
        type: String,
        maxlength: [100, "Creator name exceeds character limit (100 chars)"]
    },
    productAudio: {
        type: String,
    },
    productSampleName: {
        type: String,
        maxLength: [100, "Audio sample name must be 100 characters or less"]
    },
    productSampleArtist: {
        type: String,
        maxLength: [100, "Audio sample artist name must be 100 characters or less"]
    },
    hasVariant: {
        type: Boolean,
        required: true
    },
    productVariants: [{
        type: String,
        maxLength: [100, "Variant description must be 100 chars or less"] 
    }],
    // variantStock: [{
    //     type: Number
    // }],
    unitsSold: {
        type: Number,
        default: 0
    }


},
{
    timestamps: true // createdAt and updatedAt etc
});


// Initializing Product Model
const Product = mongoose.model("Product", productSchema);



module.exports = {Product};
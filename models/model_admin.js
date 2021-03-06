const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const admin = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    addedBy: {
        type: String,
        required: true
    },
    addedDate: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
    
})
const Admin = mongoose.model('Admin',admin);
module.exports = Admin;
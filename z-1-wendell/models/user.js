const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'O nome é obrigatório'],
        trim: true,
        minlength: [3, 'O nome deve ter pelo menos 3 caracteres']
    },
    email: {
        type: String,
        required: [true, 'O e-mail é obrigatório'],
        unique: true,      
        lowercase: true,   
        trim: true,
    },
    phone: {
        type: String,
        trim: true
    },   
    createdAt: { type: Date, default: Date.now }
})

const User = mongoose.model('User', userSchema)
module.exports = User;
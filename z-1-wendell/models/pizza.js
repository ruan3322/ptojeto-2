const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'O nome é obrigatório'],
        minlength: [3, 'O nome deve ter pelo menos 3 letras'],
        trim: true
    },
    preco: {
        type: Number,
        required: [true, 'O preço é obrigatório'],
        min: [5, 'O preço mínimo deve ser R$ 5,00']
    },
    
    createdAt: { type: Date, default: Date.now }
});

const Pizza = mongoose.model('Pizza', pizzaSchema);
module.exports = Pizza;
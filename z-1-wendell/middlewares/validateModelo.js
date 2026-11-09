const validatePizza = (req, res, next) => {
    const { nome, preco, } = req.body;

    if (!nome || typeof nome !== "string" || nome.trim().length < 3) {
        return res.status(400).json({ error: "O nome é obrigatório e deve ter pelo menos 3 caracteres." });
    }


    if (preco === undefined || typeof preco !== "number" || preco < 5) {
        return res.status(400).json({ error: "O preço é obrigatório e deve ser um número maior ou igual a 5." });
    }
    
    req.body.nome = nome.trim();

    next();
};

module.exports = validatePizza;
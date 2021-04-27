module.exports = (req, res, next) => {
    const token = req.headers.authorization

    if (token !== "XYZFGH")
        return res.status(400).send("Erro na chave")

    next()
}
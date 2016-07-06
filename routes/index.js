module.exports = app => {
    /**
     * @api {get} / API status
     * @apiGroup Status
     * @apiSuccess {String} status Mensagem de status da API
     * @apisuccessExample {Json} Sucesso
     *      Http/1.1 200 OK
     *      {"status":"NTask API"}
     */
    app.get('/', (req, res) => res.json({ status: "NTask API" }));
};
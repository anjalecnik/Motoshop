var express = require('express');
var router = express.Router();

const knexfile = require('../knexfile').development;
const knex = require('knex')(knexfile);
const bookshelf = require('bookshelf')(knex);
const sport_izdelki = bookshelf.Model.extend({
    tableName: "sportIzdelki",
    idAttribute: 'id'
});

router.get('/', async (req, res, next) => {
    try {
        const najdeni_sport_izdelki = await new sport_izdelki().fetchAll();
        res.status(200).json(najdeni_sport_izdelki.toJSON());
    }
    catch (error) {
        res.status(500).json(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        let novIzdelek = {
            naziv: req.body.naziv,
            cena: req.body.cena,
            povezavaSlike: req.body.fotografija,
            povezavaDoIzdelka: req.body.stran,
            popust: req.body.popust,
            opis: ''
        };
        const model = new sport_izdelki(novIzdelek);
        const dodaj = await model.save();

        const izdelki = await sport_izdelki.fetchAll();
        res.json({status:"added", novIzdelek: dodaj, izdelki: izdelki.toJSON()});
    }
    catch (error) {
        res.status(500).json(error);
    }
});

router.delete('/:id', async(req, res, next) => {
    try {
        let id = req.params.id;
        await new sport_izdelki({ id: id }).destroy();
        res.json({ status: "deleted" });
    } 
    catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
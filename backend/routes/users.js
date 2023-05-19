var express = require('express');
var router = express.Router();

const knexfile = require('../knexfile').development;
const knex = require('knex')(knexfile);
const bookshelf = require('bookshelf')(knex);
const uporabniki = bookshelf.Model.extend({
  tableName: "uporabniki",
  idAttribute: 'id'
});

router.get('/', async (req, res, next) => {
  try {
    const najdeniUporabniki = await new uporabniki().fetchAll();
    res.status(200).json(najdeniUporabniki.toJSON());
  }
  catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  const uporabniskoIme = req.body.uporabnisko_ime;
  const geslo = req.body.geslo;

  try {
    const uporabnik = await new uporabniki({ uporabnisko_ime: uporabniskoIme, geslo: geslo }).fetch();
    if (uporabnik) {
      res.status(200).json(uporabnik.toJSON());
    } else {
      res.status(401).json({ message: 'Not found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/registracija/', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  console.log(username, password);

  try {
    const newUporabnik = new uporabniki({ uporabnisko_ime: username, geslo: password}).save();
    console.log(newUporabnik);
    res.status(200).json(newUporabnik.toJSON());
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

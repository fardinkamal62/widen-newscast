const api = module.exports

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const db = require('../db');
const fetcher = require('../fetcher');

app.use(bodyParser.urlencoded({extended: false}));

api.getNews = async (req, res) => {
    const page = req.query.page || 0;
    const limit = req.query.limit || 10;
    try {
        const response = await db.find({}, limit, page, {date: -1});
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

api.fetchNews = async (req, res) => {
    try {
        await fetcher.init();
        res.status(200).json({message: 'fetching news...'});
    }
    catch (err) {
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

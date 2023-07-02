const route = module.exports

const express = require("express");
route.router = express.Router();

const api = require('../api')

route.router.route('/').get(api.getNews);
route.router.route('/fetch').get(api.fetchNews);

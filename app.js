const express = require('express')
const app = express();

const parser = require('body-parser')
const cors = require('cors')

const indexRoute = require('./route/index');
const db = require('./db');

require('dotenv').config();

app.use(cors())
app.use(parser.urlencoded({
    extended: true
}));
app.use(parser.json());

//router
app.use('/', indexRoute.router)

const PORT = process.env.PORT || 8000;
app.listen(PORT, async (error) => {
    if (!error) console.log("Server is Successfully Running on port " + PORT);
    else console.log("Error occurred, server can't start", error);

    console.log("Connecting to database...")
    await db.init();
})
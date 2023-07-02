const {Worker} = require('worker_threads');
const path = require('path');

const db = require('../db');

const fetcher = module.exports;

fetcher.init = async () => {
    // Prothom Alo
    createWorker('./extensions/prothomalo.js', '', async (data) => {
        if (data && data.length > 0) {
            await db.insertMany(data);
            console.log("Prothom Alo news fetching done");
        }
    });

    // bdnews24
    createWorker('./extensions/bdnews24.js', '', async (data) => {
        if (data && data.length > 0) {
            await db.insertMany(data);
            console.log("bdnews24 news fetching done");
        }
    });
};

function createWorker(workerScriptPath, message, callback) {
    const worker = new Worker(path.resolve(__dirname, workerScriptPath));

    worker.on('message', callback);

    if (message) {
        worker.postMessage(message);
    }

    return worker;
}

const {parse} = require("node-html-parser");
const {parentPort} = require('worker_threads');

async function init() {
    console.log("bdnews24 Extension Loaded");
    try {
        const news = await scrape();
        parentPort.postMessage(news);
    } catch (err) {
        console.log(err);
        return err;
    }
}

async function scrape() {
    try {
        const url = "https://bdnews24.com/recent";
        const site = await fetch(url);
        const html = await site.text();
        const parsed = parse(html);
        const latestNews = [];

        const a = parsed.querySelectorAll("[data-test-id='headline']");
        a.forEach((item) => {
            latestNews.push({
                link: item.firstChild.getAttribute("href"),
                title: item.text,
                provider: "bdnews24",
                category: "latest",
                timestamp: new Date().getTime(),
            });
        });
        return latestNews;
    } catch (err) {
        console.log(err);
        return err;
    }
}


init();

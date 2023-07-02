const {parse} = require("node-html-parser");
const {parentPort} = require("worker_threads");

async function init() {
    console.log("Prothom Alo Extension Loaded");
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
        const url = "https://www.prothomalo.com/collection/latest";
        const site = await fetch(url);
        const html = await site.text();
        const parsed = parse(html);
        const latestNews = [];

        const a = parsed.getElementsByTagName("a");
        a.forEach((item) => {
            const className = item.getAttribute("class");

            if (className && className.includes('card-with-image-zoom')) {
                latestNews.push({
                    link: item.getAttribute("href"),
                    title: item.getAttribute("aria-label"),
                    provider: "Prothom Alo",
                    category: "latest",
                    timestamp: new Date().getTime(),
                });
            }
        });
        return latestNews;
    } catch (err) {
        console.log(err);
        setInterval(scrape, 5000);
        return err;
    }
}

init();
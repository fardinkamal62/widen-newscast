<div align="center"><h1>Widen Newscast</h1></div>

<div align="center">A news aggregator that allows users to view news from multiple sources in one place.</div>


## Available sources

---
- [Prothom Alo](https://www.prothomalo.com/collection/latest)
- [bdnews24](https://bdnews24.com/recent)


## Backstory

---
Random day in 2020, my friend Azfar Labib gave me this idea of creating a news portal, on which we will get news from different news sites.

He had the idea, I had the skills(somewhat). So, I started working on it. Spent late nights trying out Python, Ruby(yes, Ruby, I started learning Ruby for it) scraping sites. But I was getting frustrated.

With zero progress & luck, we gave up. Totally forgot about this project.

After many years have passed. In **DeepThought** I've developed **CPaaS**, using the concept of extension, just like how VSCode works.

One fine day I was thinking about CPaaS then I remembered about this project. I thought about the extension concept of CPaaS, then I thought, why not use it for this project.

So, I started working on it. I've developed the core of the project just in 6 hours! With Prothom Alo extension, which gives the latest news from Prothom Alo.

Thus, revival of Widen Newscast.

## Routes

---

**GET** `/` - Gives you the latest news  
**GET** `/fetch` - Initiates data fetching from sources

## Tech

---
- JavaScript Worker Threads
- Express JS
- MongoDB

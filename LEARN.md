<div align="center"><h1>Widen Newscast</h1></div>


## Learnings

---

- [x] JavaScript Worker Threads

In this project I focused on learning & learning by creating a project with JavaScript Worker Threads.
Rest of the thing are basic Node JS stuff.



## Eagle Eye View

---

    Widen --> JavaScript Worker Threads-|-> Prothom Alo Extension
                                        |-> bdnews24 extension
                                        |-> ...




## Snake Eye View

---

### Getting News

Getting the news from `/` endpoint is a simple Express JS server giving you data from MongoDB.

### Fetching News


Fetching news uses JavaScript Worker Threads to fetch data from different sources. 
 
- Each source is an extension
- Each extension is a JavaScript Worker Thread
- Each extension is a separate file

So that we can use that file as a module in the main thread


#### Steps

1. When we hit `/fetch` endpoint, main thread initiates the worker threads
2. Each worker thread fetches data from their respective sources
3. Each worker thread sends the data to the main thread
4. Main thread sends the data to MongoDB

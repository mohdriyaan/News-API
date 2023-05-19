# News-API
The News API is a powerful and easy-to-use API that allows developers to access and retrieve news articles and headlines from various sources worldwide. This README provides an overview of the News API, its features, and how to get started with integrating it into your applications.

<h2>Features</h2>
<ul>
  <li>Extensive News Coverage: The News API provides access to a vast collection of news articles from a wide range of sources, including major news organizations, blogs, and local publications.</li>
  <li>Search and Filtering: You can search for specific news articles based on keywords, phrases, or specific criteria such as source, category, language, date range, and more.</li>
  <li>Categorized News: The News API categorizes news articles into various categories such as business, entertainment, sports, health, technology, and more, making it easier to filter and access relevant news content.</li>
  <li>Customizable Response: Retrieve news articles in various formats such as JSON, RSS, or Atom. Customize the response to include specific fields or metadata based on your application's requirements.</li>
</ul>

<h2>Getting Started</h2>
To start using the News API, follow these steps:

1. Sign up: Create an account on the News API website and obtain your API key.

2. API Documentation: Review the comprehensive API documentation provided by the News API. Understand the available endpoints, parameters, and response formats.

3. Integrate API: Choose your preferred programming language or framework and integrate the News API into your application. You can make HTTP requests to the API endpoints using libraries or tools like axios, fetch, or curl.

4. Authenticate: Include your API key in each API request by adding it as a query parameter or in the request headers. This ensures proper authentication and access to the API resources.

5. Make API Requests: Start making API requests to retrieve news articles based on your desired search criteria, filters, or categories. Process the API response in your application to display or utilize the retrieved news content.

<h2>Usage</h2>
<p>Here's an example of using the News API to fetch the latest technology news articles:</p>

```javascript
import express from "express"
import config from "config"
import axios from "axios"

const PORT = config.get("PORT")
const newsAPI = config.get("NEWS_API")
const app = express()

app.get("/",(req,res)=>{
    res.status(200).json({message:"Home Page"})
})

app.get("/:country",async(req,res)=>{
    try {
        const country = req.params.country
        const newsData = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${newsAPI}`)
        res.status(200).json(newsData.data)
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
})

app.listen(PORT,()=>{
    console.log(`Server Listening At Port ${PORT}`)
})
```
<h2>Client Tools</h2>
We are using PostMan as a Client Tool to test our application and its routes requests.

<h2>Rate Limiting and Pricing</h2>
The News API enforces rate limits on API requests to ensure fair usage. Different plans are available, including free and premium options, with varying limits and features. Refer to the News API website or documentation for details on pricing and rate limits.

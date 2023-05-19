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
        // res.status(200).json(newsData.data)
        let data = newsData.data.articles
        let articles = data.slice(0,5).map((x)=>(x.title))
        res.status(200).json({"The Top 5 Articles are" : articles})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
})

app.use((req,res)=>{
    res.status(404).json({message:"Invalid Route"})
})

app.listen(PORT,()=>{
    console.log(`Server Listening At Port ${PORT}`)
})





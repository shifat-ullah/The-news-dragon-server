const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
app.use(express.json());
app.use(cors());

const catagorys = require('./data/categories.json');
const news = require('./data/news.json');
const { configDotenv } = require('dotenv');


app.get('/catagory', (req, res) => {
  res.send(catagorys)
})
app.get('/news', (req, res) => {
  res.send(news)
})
app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  const newsData = news?.find(n => n._id === id)
  res.send(newsData)
})

app.get('/catagory/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id)
  if (id === 0) {
    res.send(news)
  } else {
    const catagoryNews = news?.filter(c => parseInt(c.category_id) === id)
    res.send(catagoryNews)
  }

})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
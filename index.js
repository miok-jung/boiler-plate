const express = require('express')
const app = express()
const port = 5000 // 벡서버

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://miok:tpzy591@boilerplate.7efpi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false // 미사용시 에러발생
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))
  
app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`) // 5000번 포트에서 실행
})
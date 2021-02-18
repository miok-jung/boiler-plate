const express = require('express')
const app = express()
const port = 5000 // 벡서버

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`) // 5000번 포트에서 실행
})
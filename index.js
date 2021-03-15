const express = require('express')
const app = express()
const port = 5000 // 벡서버
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');
// app. post값을 하기 위해 user모델을 가져오는 것
const {User} = require("./models/User");

//application/x-www-form-urlencode의 데이터를 분석하여 가져오는 것
app.use(bodyParser.urlencoded({extended: true}));

//application/json타입으로 된 것을 분석하여 가져오는 것을 해주기 위해 입력
app.use(bodyParser.json());
app.use(cookieParser());


const mongoose = require('mongoose');

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false // 미사용시 에러발생
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))
  
app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요. 실시간 업데이트!')
})

app.post('/register', (req, res) => {
  //회원 가입할 때 필요한 정보들을 client에서 가져오면, 그것들을 데이터 베이스에 넣어준다.

  // User을 가져와 instance를 만든다?
  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({ //성공하였을 때 전달내용
      success: true
    })
  }) //mongodb 메소드
})

app.post('/login', (req, res) => {
  //1. 요청된 이메일을 데이터베이스에서 있는지 찾아본다.
  User.findOne({ email: req.body.email }, (err, user) => {
    if(!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다."
      })
    }
    //2. 요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인한다.
    user.comparePassword(req.body.password, (err, isMatch) => {
      if(!isMatch)
        return res.json({loginSuccess: false, message: "비밀번화 틀렸습니다."})

      //3. 비밀번호까지 맞다면 토큰을 생성한다.
      user.generateToken((err, user) => {
        if(err) return res.status(400).send(err);
        
        //토큰을 쿠키/로컬스토리지에 저장할 수 있다. 여기에는 현재 쿠키로 진행할 예정
        res.cookie("x_auth", user.token)
          .status(200)
          .json({loginSuccess: true, userId: user._id})

      })
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`) // 5000번 포트에서 실행
})
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = mongoose.Schema({ // 스키마 생성
    name: { // 필드 작성
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // 스페이스를 없애주어 인식하는 기능
        unique: 1 // 같은 이메일을 사용하지 않게 유니크 하게 지정한다.
    },
    password: {
        type: String,
        minlength: 5
    },
    firstname: {
        type: String,
        maxlength: 50
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { // 관리자, 유저 관리
        type: Number, // 관리자와 유저 구별을 숫자로 한다.
        default: 0 // 임의로 role을 지정하지 않는 경우 기본값 0으로 지정한다.
    }, 
    image: String,
    token: {
        type: String,
    },
    tokenExp:{ // 토큰 유효기간
        type: Number
    }
})

userSchema.pre('save', function(next){
    let user = this;
    
    if(user.isModified('password')){
        //비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(err)

            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err)
                user.password = hash
                next()
            })
       
        })
    }
})
// 스키마를 모델로 감싸준다.
const User = mongoose.model('User', userSchema)

// 모델을 다른 파일에서도 쓸 수 있게 설정
module.exports = { User }
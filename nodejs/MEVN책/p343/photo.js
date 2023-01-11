const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PhotoSchema = new Schema({
  albumId: Number, // 객체 생성후 객체의 종류를 정의함. // albumId는 숫자다.
  id: Number,
  title: String,
  url: String,
  thumbnailUrl: String
})

module.exports = mongoose.model('Photo', PhotoSchema)
// 3번째 매개변수로 collection 이름 고정

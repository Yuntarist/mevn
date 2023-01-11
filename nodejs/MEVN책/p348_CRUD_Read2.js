const Photo = require('./p346_CRUD_Ori.js')

const main = async () => {
  const t = await Photo.findOne({
    $or: [
      {
        title: {
          $eq: 'ㅇㅅㅇ' // DB안에서 자료를 찾을때 좋다
        }
      },
      {
        url: {
          $eq: 'https://naver.com'
        }
      }
    ]
  }).lean()
  console.log(t)
}
main()

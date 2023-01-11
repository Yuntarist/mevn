const Photo = require('./p346_CRUD_Ori.js')

const main = async () => {
  const t = await Photo.findOne(
    {
      title: { $eq: 'ㅇㅅㅇ' } // mevn책 351p 참고 지정된 값과 같은 값을 찾는다. 비교연산자 참고
    },
    { _id: 0, title: 1, url: 1 }
  ).lean()
  console.log(t)
}
main()

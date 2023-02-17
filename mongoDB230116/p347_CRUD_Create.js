const dtd = 123456
const { Photo } = require('./p346_CRUD_Ori.js')
const main = async () => {
  const _data = {
    albumId: dtd,
    id: 230112,
    title: 'ㅇㅅㅇ',
    url: 'google.com',
    thumbnailUrl: 'https://naver.com'
  }
  const new_photo = new Photo(_data)
  const t = await new_photo.save()
  console.log(t)
}
main()

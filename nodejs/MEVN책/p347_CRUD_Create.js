const { Photo } = require('./p346_CRUD_Ori.js')
const main = async () => {
  const _data = {
    albumId: 12010,
    id: 12010,
    title: 'ㅇㅅㅇ',
    url: 'google.com',
    thumbnailUrl: 'https://naver.com'
  }
  const new_photo = new Photo(_data)
  const t = await new_photo.save()
  console.log(t)
}
main()

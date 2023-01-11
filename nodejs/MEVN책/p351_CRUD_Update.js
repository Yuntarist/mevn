const Photo = require('./p346_CRUD_Ori')
const main = async () => {
  const t = await Photo.updateMany(
    {
      title: {
        $eq: 'ㅇㅅㅇ'
      }
    },
    {
      $set: {
        url: 'https://google.com'
      }
    },
    {
      upsert: true,
      multi: true,
      new: true
    }
  ).lean()
  console.log(t)
}
main()

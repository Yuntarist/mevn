const Photo = require('./p346_CRUD_Ori.js')
const main = async () => {
  const t = await Photo.updateMany(
    {
      title: {
        $in: ['^오^', 'ㅇㅅㅇ', 'ㅇㅁㅇ', 'ㅇ_ㅇ']
      }
    },
    {
      $push: {
        something: {
          $each: [1, 2, 3]
        }
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

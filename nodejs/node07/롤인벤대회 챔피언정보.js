const axios = require('axios')
const cheerio = require('cheerio')

const url =
  'https://lol.inven.co.kr/dataninfo/match/champTotal.php?iskin=lol&category=LCK2022&category2=&shipcode=&shipgroup=&teamName=&startDate=&endDate='

axios.get(url).then((res) => {
  let rank = [],
    champion = [],
    banpick = [],
    winrate = []
  let $ = cheerio.load(res.data)
  $('.rank').each(function () {
    rank.push($(this).text())
  })
  //   console.log(rank)
  $('td.left').each(function () {
    champion.push($(this).text())
  })
  //   console.log(champion)
  $('td:nth-child(10)').each(function () {
    banpick.push($(this).text())
  })
  //   console.log(banpick)
  $('td:nth-child(13)').each(function () {
    winrate.push($(this).text())
  })
  //   console.log(winrate)
  for (i = 0; i <= 126; i++) {
    console.log(
      `${rank[i]} ` +
        `챔피언 이름: (${champion[i]}) ` +
        `밴픽률: (${banpick[i]}) ` + // 밴픽률 순으로 정렬해보기 현재 챔피언 수 127
        `승률: (${winrate[i]}) `
    )
  }
})

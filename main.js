let str = `dddd
010-12=34-5678
thesecon@gmail.com
https://www.naver.com
Theasdasdq foxwetheas.
abbcc fcddddog
http://localhost:1234ddd
d
동해물과_백두산이 마르고 닳도록
`

// const regexp = new RegExp('the','gi')
// // console.log(regexp)


// console.log(str.match(regexp))
// console.log(regexp.test(str))
// str = str.replace(regexp,'AAA')

// console.log(str)
// console.log(
//   str.match(/\.$/g)
//   )
// 특수기호들을 기능에서벗어나게 \ 를 붙임
// $ 문장이 끝나는부분에 일치한것들을 찾음

// console.log(
//   str.match(/d$/gm)
// )
// console.log(
//   str.match(/^t/gim)
// )
// console.log(
//   str.match(/./g)
// )
// console.log(
//   str.match(/h..p/g)
// )
// console.log(
//   str.match(/dog|fox/)
// )
// 먼저 일치하는것 하나만 반환
// console.log(
//   str.match(/https?/g)
// )
// ? 바로앞에 글자가있을 수 도 있고 없을수도있음
// console.log(
//   str.match(/\b\w{2,3}\b/g)
//   // \w 모든숫자 알파벳

// )
// console.log(
//   str.match(/[fox]/g)
// )
// // f, o , x 전부 찾아냄
// console.log(
//   str.match(/[0-9]/g)
// )
// // 0-9 까지전부찾음
// console.log(
//   str.match(/[0-9]{1,}/g)
// )
// console.log(
//   str.match(/[가-힣]{4}/g)
// )
// console.log(
//   str.match(/\bf\w{1,}\b/g)
// )
// console.log(
//   str.match(/\d{1,}/g)
// )
// const h = `  the hello  world   !

// `
// console.log(
//   h.replace(/\s/g,'')
// )
console.log(
  str.match(/.{1,}(?=@)/g)
)
console.log(
  str.match(/(?<=@).{1,}/g)
)
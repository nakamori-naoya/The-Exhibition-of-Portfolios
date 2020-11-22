export const dataSet  =[
  {name: "naoya", lesson: "React", paycheck: 5000},
  {name: "takashi", lesson: "数学", paycheck: 2000 },
  {name: "masaki", lesson: "英語", paycheck: 3000 },
  {name: "Jin", lesson: "Vue", paycheck: 4000},
  {name: "Joe", lesson: "Angular", paycheck: 4000},
  {name: "Jack", lesson: "Rails", paycheck: 3000},
  {name: "Maki", lesson: "PHP", paycheck: 2500},
  {name: "Mami", lesson: "Python", paycheck: 3000},
  {name: "yuuma", lesson: "Java", paycheck: 3000},
  {name: "taita", lesson: "TypeScript", paycheck: 4000},
  {name: "kei", lesson: "JavaScript", paycheck: 3000},
  {name: "Sou", lesson: "Next.js", paycheck: 2200},
]

// const sliceByNumber = (array , number) => {
//   const length = Math.ceil(array.length / number)
//   //配列の要素が10で、numberが3のときは、ceilで切り上げするので、lengthは4で新たな配列の要素数が4になる。

//   return new Array(length).fill()
//     .map((_, i) =>array.slice(i * number, (i + 1) * number)
//      //slice(begin, end)で使い、endのindexは含まない
//   )
// }
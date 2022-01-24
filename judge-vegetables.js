function judgeVegetable(veggies, met) {
  let currentWinner = 0;
  let winnerName = "";
  for (let elem of veggies) {
    if (elem[met] > currentWinner) {
      currentWinner = elem[met];
      winnerName = elem.submitter;
    }
  } 
  return winnerName;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));
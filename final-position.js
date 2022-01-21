const finalPosition = function (moves) {
  let coordinates = [0, 0];
  for (let move of moves) {
    if (move === 'north') {
      coordinates[1] += 1;
    } else if (move === 'east') {
      coordinates[0] += 1;
    } else if (move === 'south') {
      coordinates[1] -= 1;
    } else if (move === 'west') {
      coordinates[0] -= 1;
    }
  }
  return coordinates;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

finalPosition(moves);
const merge = function(arr1, arr2) {
  let mergedArr = arr1.concat(arr2);
  for (let i = 0; i < mergedArr.length; i++) {
    for (let j = i + 1; j < mergedArr.length; j ++) {
      let temp = 0;
      if (mergedArr[i] > mergedArr[j]) {
        temp = mergedArr[i];
        mergedArr[i] = mergedArr[j];
        mergedArr[j] = temp;
      }
    }
  }
  return mergedArr;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
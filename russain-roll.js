/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    const sorted_envelopes = envelopes.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      }
      return a[0] - b[0];
    })
    // 2 ,5,6,6
    // 3 ,4 ,4,7
    // [[4,5],[6,7],[2,3]]
    let sum = 1;

    console.log(sorted_envelopes);
    for (let i = 0; i < sorted_envelopes.length - 1; i++) {
      for (let n = i + 1; n < sorted_envelopes.length; n++) {
        console.log(sorted_envelopes[i], sorted_envelopes[n]);
        if (sorted_envelopes[i][0] < sorted_envelopes[n][0] &&
          (sorted_envelopes[i][1] < sorted_envelopes[n][1])) {
          sum +=1;
            break;
        }
      }
    }
    return sum;
};
// [2,3] [3,1]

 // + [2,3] => [3,1]

// Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
// sort envelopes
// [2,3] [5,4] [6,4] [6,7]

// Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
// Output: 3
// Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).

// Input: envelopes = [[1,1],[1,1],[1,1]]
// Output: 1

// const result = maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]);
const result = maxEnvelopes([[4,5],[4,6],[6,7]]);
console.log(result);

//[ [ 6, 4 ], [ 6, 7 ], [ 5, 4 ], [ 2, 3 ] ]

// [ [ 2, 3 ], [ 5, 4 ], [ 6, 7 ], [ 6, 4 ] ]
// [ [ 2, 3 ], [ 5, 4 ], [ 6, 7 ], [ 6, 4 ] ]


// [ [ 2, 3 ], [ 5, 4 ], [ 6, 4 ], [ 6, 7 ] ]

// expected result
// [ [ 2, 3 ], [ 5, 4 ], [ 6, 4 ], [ 6, 7 ] ]
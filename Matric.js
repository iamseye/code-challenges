/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const n = mat.length;

    if (n === 1 ){
        return mat[0][0];
    }

    let total = 0;

    for(let i = 0, j=n-1; i < n; ++i, --j) {
        total += mat[i][i] + mat[i][j];

    }
    if (n%2!==0) {
        const centerIndex = Math.floor(n/2);
        total -= mat[centerIndex][centerIndex];
    }


    return total;
};


// console.log(diagonalSum([[1,2,3],
//               [4,5,6],
//               [7,8,9]]));

//console.log(diagonalSum([[5]]));

console.log(diagonalSum([[7,9,8,6,3],[3,9,4,5,2],[8,1,10,4,10],[9,5,10,9,6],[7,2,4,10,8]]));
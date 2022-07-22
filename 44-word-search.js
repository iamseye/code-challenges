/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const totalRow = board.length;
    const totalColumn = board[0].length;

    let visit = new Set();

    function dfs(row, column, i) {
        if(row < 0 || column < 0 || row === totalRow
            || column === totalColumn || visit.has(`${row}-${column}`)
            ||i === word.length || board[row][column] !== word[i]) {
            return false;
        }

        visit.add(`${row}-${column}`);

        if(i === word.length-1) {
            return true;
        }

        i++;

        const result =  dfs(row + 1, column, i) ||
            dfs(row -1 , column, i) ||
            dfs(row, column -1 , i) ||
            dfs(row, column + 1, i);

        visit.delete(`${row}-${column}`);

        return result;
    }

    for ( let i = 0; i < totalRow; i++) {
        for (let j = 0 ; j < totalColumn; j++) {
            if(dfs(i, j, 0)){
                return true;
            }
        }
    }

    return false;
};
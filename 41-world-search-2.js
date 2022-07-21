
// Time: m*n*4^(mn)
// space: O(n) O is total number of vocabs in the dictionary
class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }

    addWord(word) {
        let curr = this;

        for(const char of word) {
            if(!curr.children[char]) {
                curr.children[char] = new TrieNode()
            }
            curr = curr.children[char]
        }
        curr.endOfWord = true;
    }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const root = new TrieNode();

    for (const word of words) {
        root.addWord(word);
    }

    const totalRow = board.length;
    const totalColumn = board[0].length;

    let result = new Set();
    let visit = new Set();

    function dfs(row, column, node, word) {
        if(row < 0 || column < 0 || row === totalRow || column === totalColumn || visit.has(`${row}-${column}`) || !node.children[board[row][column]]) {
            return;
        }

        visit.add(`${row}-${column}`);

        node = node.children[board[row][column]];
        word += board[row][column];

        if(node.endOfWord) {
            result.add(word);
        }


        dfs(row + 1, column, node, word);
        dfs(row -1 , column, node, word);
        dfs(row, column -1 , node, word);
        dfs(row, column + 1, node, word);

        visit.delete(`${row}-${column}`)
    }

    for ( let i = 0; i < totalRow; i++) {
        for (let j = 0 ; j < totalColumn; j++) {
            dfs(i, j, root, "");
        }
    }

    return Array.from(result);
};
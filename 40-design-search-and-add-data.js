class TrieNode{
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

var WordDictionary = function() {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let curr = this.root;

    for(const char of word) {
        if(!curr.children[char]) {
            curr.children[char] = new TrieNode();
        }
        curr = curr.children[char]
    }
    curr.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */

WordDictionary.prototype.search = function(word) {
    const dfs = (index, node) => {
        let cur = node

        for (let i = index; i < word.length; i++) {
            const char =  word[i];

            if (char === '.') {
                for (const child of Object.values(cur.children)) {
                    if (dfs(i + 1, child)) {
                        return true;
                    }
                }

                return false;
            } else {
                if(!cur.children[char]) {
                    return false;
                }

                cur = cur.children[char]
            }
        }

        return cur.endOfWord
    }

    return dfs(0, this.root)
};


/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
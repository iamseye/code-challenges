/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = serializeIterativeBFS;

function  serializDFS(root) {
    if(!root) {
        return '';
    }

    let res = [];

    function dfs(root) {
        let curr = root;

        if (!curr) {
            res.push('N');
            return;
        }

        res.push((curr.val).toString());
        dfs(curr.left);
        dfs(curr.right);
    }

    dfs(root);
    console.log(res)
    return res.join(',');
};

function serializeIterativeBFS(root) {
    if(!root) {
        return '';
    }

    // FIFO
    let queue = [root];

    let strs = [root.val];

    while(queue.length) {
        let node = queue.shift();
        if(!node.left) {
            strs.push('N');
        } else {
            queue.push(node.left);
            strs.push(node.left.val);
        }

        if(!node.right) {
            strs.push('N');
        } else {
            queue.push(node.right);
            strs.push(node.right.val);
        }
    }

    console.log(strs)
    console.log(strs.join())
    return strs.join();

}
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = deserializeIterativeBFS

function deserializeDFS(data) {
    if(!data) {
        return null;
    }

    const preorder = data.split(',');
    let i = 0;

    function dfs() {
        if(preorder[i] === 'N') {
            i += 1;
            return null;
        }

        let node = new TreeNode(Number(preorder[i]));
        i +=1;

        node.left = dfs();
        node.right = dfs();
        return node;
    }

    return dfs();
    // [1,2,3,null,null,4,5]

}
//  ro r l/r l
// 1,2,3,N,N,4,5,N,N,N,N
//[1,2,3,null,null,4,5]

function deserializeIterativeBFS(data) {
    if(!data) {
        return null;
    }

    const queue = data.split(',');
    let root = new TreeNode(queue.shift());

    let bfs = [root];

    while(queue.length) {
        const curr = bfs.shift();

        let left = queue.shift();
        let right = queue.shift();

        curr.left = left!=='N' ? new TreeNode(left) : null;
        curr.right = right!=='N' ? new TreeNode(right) : null;

        if (curr.left !== null) {
            bfs.push(curr.left);
        }

        if (curr.right !== null){
            bfs.push(curr.right);
        }

    }

    return root;

}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
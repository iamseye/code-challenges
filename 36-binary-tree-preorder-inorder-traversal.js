/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// Time: O(n^2) -> unbalanced, O(N)-> balanced
// space: O(N)
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) {
        return null;
    }

    let root = new TreeNode(preorder[0], null, null);

    const index = inorder.indexOf(preorder[0]);

    const leftInorder = inorder.slice(0,index);
    const rightInorder = inorder.slice(index+1);

    const leftPreorder = preorder.slice(1,leftInorder.length+1);
    const rightPreorder = preorder.slice(leftInorder.length+1);


    root.left =  buildTree(leftPreorder, leftInorder);
    root.right =  buildTree(rightPreorder, rightInorder);

    return root;

};

//preorder = [3,9,20,15,7] 
//3 is root 
// inorder = [9,3,15,20,7]
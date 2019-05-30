/*
 * @Author: hf 
 * @Date: 2019-05-30 14:13:41 
 * @Last Modified by: hf
 * @Last Modified time: 2019-05-30 14:46:53
 */
//二叉树翻转
//思路：如果根节点不为空，那么将左右子结点交换，然后将左右子结点进行递归调用。

{
  function invertTree(root) {
    if (root !== null) {
      var temp = root.left;
      root.left = root.right;
      root.right = temp;
      invertTree(root.left);
      invertTree(root.right)
    }
    return root
  }
  let root = {
    id: 4,
    left: {
      id: 2,
      left: {
        id: 1,
        left: null,
        right: null
      },
      right: {
        id: 3,
        left: null,
        right: null
      }
    },
    right: {
      id: 7,
      left: {
        id: 6,
        left: null,
        right: null
      },
      right: {
        id: 9,
        left: null,
        right: null
      }
    }
  }

  let roots = invertTree(root)
  console.log(roots)
}

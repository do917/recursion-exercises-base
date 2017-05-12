
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  const children = node.childNodes;

  if (children) {
    for (let i = 0; i < children.length; i++) {
      visitAllNodes(children[i], callback);
    }
  }

  callback(node);
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  const sizeArray = [];
  visitAllNodes(node, (childNode) => {
    sizeArray.push(childNode);
  });
  return sizeArray;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};

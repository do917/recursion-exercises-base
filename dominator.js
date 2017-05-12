const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  const flattenedRoot = flattenTreeToArray(root);
  return _.filter(flattenedRoot, docObject => docObject.id === id)[0];
};

const getElementsByClassName = function(root, className) {
  const flattenedRoot = flattenTreeToArray(root);
  return _.filter(flattenedRoot, docObject => {
    const currentClass = docObject.className;
    return currentClass !== undefined && currentClass.includes(className);
  });
};

const getElementsByTagName = function(root, tagName) {
  const flattenedRoot = flattenTreeToArray(root);
  return _.filter(flattenedRoot, docObject => docObject.tagName === tagName);
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};


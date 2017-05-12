const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...



const stringify = function(obj) {
  const type = typeof obj;

  if (type === 'number') {
    return obj.toString();
  }

  if (obj === null) {
    return 'null';
  }

  if (type === 'boolean') {
    return obj ? 'true' : 'false';
  }

  if (type === 'string') {
    return '\"' + obj + '\"';
  }

  if (Array.isArray(obj)) {
    let stringifiedArray = '';

    _.each(obj, (item, index) => {
      stringifiedArray += stringify(item);
      if (index !== obj.length - 1) {
        stringifiedArray += ',';
      }
    });

    return '[' + stringifiedArray + ']'; 
  }

  

};

module.exports = {
  stringify: stringify
};
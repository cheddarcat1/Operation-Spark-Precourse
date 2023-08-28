const stringifyJSON = (obj) => {
  //if obj is a string:
  if (typeof obj === 'string') {
    //return '"' + escapeSpecialCharacters(obj) + '"'
    return '"' + escapeSpecialCharacters(obj) + '"';
  }
  //if obj is a number or boolean or null:
  //return string representation of obj
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return String(obj);
  }
  
  //if obj is an array:
  //elements = []
  if (Array.isArray(obj)) {
    //for each item in obj:
    //add stringifyJSON(item) to elements
    const elements = obj.map(item => stringifyJSON(item));
    //return '[' + join elements with ',' + ']'
    return '[' + elements.join(',') + ']';
  }

  //if obj is an object:
  if (typeof obj === 'object') {
    //properties = []
    const properties = [];
    //for each key-value pair in obj:
    for (const key in obj) {
      const value = obj[key];
      //if value is not undefined and typeof value is not function:
      if (value !== undefined && typeof value !== 'function') {
        //add '"' + key + '":' + stringifyJSON(value) to properties
        properties.push('"' + key + '":' + stringifyJSON(value));
      }
    }
    //return '{' + join properties with ',' + '}'
    return '{' + properties.join(',') + '}';
  }
};

//function escapeSpecialCharacters(str):
const escapeSpecialCharacters = (str) => {
  //Replace special characters in str with their escaped versions
  const specialChars = {
    '\\': '\\\\',
    '"': '\\"',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t'
  };

  return str.replace(/[\\"\b\f\n\r\t]/g, char => specialChars[char]);
};



// Export the function if being used in a module
// module.exports = stringifyJSON;

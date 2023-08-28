
/*
Write a function called result() that takes in an object, a property, and a default value(optional) that returns a value depending on these conditions:

  If the value of the named property is a function then return the value of the function call.
  
  If a default value is provided and the property doesn't exist or is undefined then the default will be returned. If the default is a function its result will be returned.
  
  
  If the property does not exit in the object and there is no default value then the entire object will be returned.
*/


const result = (object, property, defaultValue) => {
  
  const propValue = object[property];

  //if the propValue 
  if (propValue !== undefined) {
    //is a function 
    if (typeof propValue === 'function') {
      //return value of function call 
      return propValue.call(object);
    } else {
      return propValue;
    }
  } else {
    //if defaultValue !== undefined 
    if (defaultValue !== undefined) {
      //if the defaultValue is a function 
      if (typeof defaultValue === 'function') {
        //its result will be returned 
        return defaultValue.call(object);
      } else {
        return defaultValue;
      }
    } else {
      //return object 
      return object;
    }
  }
};





/*

What should it do:

should exist

should be a function

should return the property value if it is NOT a function 

should return the result of the function if the property value type is a function 

should return the default value when the property doesn't exist in the object 

should return the value of the default's function call when the property doesn't exist in the object 

should return the object when the property doesn't exist in the object and there's no default value 
*/

//function getElementsByClassName(className):
const getElementsByClassName = (className) => {
  //elements = []
  const elements = [];

  //function traverse(element):
  function traverse(element) {
    //The classList property returns the CSS classnames of an element.
    //The className property sets or returns an element's class attribute.
    
    //if element has classList and element contains className:
    if (element.classList && element.classList.contains(className)) {
      //add element to elements
      elements.push(element);
    }
    
    //for each child in element.childNodes:
    //The childNodes property returns a collection (list) of an elements's child nodes
    for (let i = 0; i < element.childNodes.length; i++) {
      const child = element.childNodes[i];
      //if child is an element node:
      if (child.nodeType === Node.ELEMENT_NODE) {
        //recursively call traverse(child)
        traverse(child);
      }
    }
  }

  traverse(document.body);

  return elements;
};


/*
traverse function is used to recursively traverse the DOM, checking each element for the specified class name and adding it to the elements array if it matches. The recursion continues for each child node of the current element. Finally, the traverse function is called on the document.body, and the elements array is returned as the result.
*/





// Export the function if being used in a module
// module.exports = getElementsByClassName;

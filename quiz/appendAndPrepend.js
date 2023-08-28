/*
1. appendElements

    Implement the function, appendElements. 
    
    Its parameter will be an array of strings. 
    
    Using that array, create new tags for each string. 
    
    Then append each new element to an element with the id of test-zone. 
    
    test-zone has already been created for you.
*/


// Function to append elements to #test-zone
function appendElements(stringsArray) {

    



}

//function appendElements with para ArrofStrings
function appendElements(array) {
  
  const $testZone = $(`#test-zone`);
  
  // create new tags for each string. 
  for (const text of array){
    const $newTag = $(`<p>`).text(text);
    
    //append each new element to an element with the id of test-zone.
    $testZone.append($newTag);
  }
  
}



/*
2. prependImage

    Implement the function prependImage. 
    
    Its parameter will be a string which is a link to a picture of the Jquery logo. 
    
    Using that string create a new tag.
    
    Prepend the image to to the element with an id of test-zone (test-zone is already created)
    
    Give the image a click handler that when clicked, removes the image.
*/

// Function to prepend an image to #test-zone
function prependImage(src) {
  
  
}





//ANSWERS!!!!


function appendElements(array) {
  const $testZone = $(`#test-zone`);
  for (const text of array){
    const $newElement = $(`<p>`).text(text);
    $testZone.append($newElement);
  }
  
}



function prependImage(src) {
const $img = $(`<img>`).attr('src', src + '/');
  $img.on(`click`, function(){
    $(this).toggle();
  });
  
  $(`#test-zone`).prepend($img); 
}





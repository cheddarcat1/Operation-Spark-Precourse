const onReady = (data) => {
  // YOUR CODE BELOW HERE //

  // Uncomment this to inspect all available data; delete when done //
  // EXAMPLE: Looping over top rated recordings; replace with your code //
  // const topRated = data.discography.topRated;
  // topRated.forEach((recording) => {
  //   console.log(recording);
  // });
  // $('.heading-article').css('color', 'red');

  /* eslint-enable */

  //PART 3: Add Style with jQuery
  $('#section-bio').css('color', 'blue').css('background-color', 'beige');

  $('#section-quotes').css('color', 'red').css('background-color', '');
  
  
  
  

  //PART 4: Populate the Top Rated List
  let topRated = data.discography.topRated;
  topRated.map(function (recording) {
    return $('#list-top-rated').append('<li class="recording top-rated" id=' + recording.art + '><span class="title">title: ' + recording.title + '</span><br /><span>artist: ' + recording.artist + '<span><br /><span>release: ' + recording.release + '<span><br /><span>year: ' + recording.year + '</span><br /><br /></li>');
  });
  

  //PART 5: Populate the General Recordings List
  
  // Create a recordings <section id="section-recordings">
  var $newSection = $('<section id="section-recordings" class="recordings">');
  
  
  // Create a <ul id="list-recordings" class="list-recordings">, style it, and add it to the <section id="section-recordings">.
  
  //Create a new heading element
  //let underTopRated = $($newSection).append();

  var $heading = $('<h2>Recordings</h2>');
  
   //Create a new unordered list element with an ID and class
  var $ul = $('<ul id="list-recordings" class="list-recordings">');
  
  //Append the unordered list to the new section
  var newNew = $($newSection).append($ul);
  var appendHeading = $($newSection).prepend($heading);
  
  //Append the new section to the element with the ID "sidebar"
  $('#sidebar').append(newNew);
  
  // Get the recordings from the 'data.discography' object
  let recordings = data.discography.recordings;

  //Add a styled <li class="recording"> for every recording in the recordings Array. 
  recordings.map(function(recording) {
    
        /*
    STEPS:
    -Create a new list item element with a class and ID based on recording attributes
    -Create and append a <div> for the title 
    -Create and append a <div> for the artist
    -Create and append a <div> for the release
    -Create and append a <div> for the year
    -Add a line break after the <li> element
    -Append the <li> element to the <ul> element
    */
    return $($ul).append($('<li class="recording" id=' + recording.art + '><div class="title">title: ' + recording.title + '</div><div class="artist">artist: ' + recording.artist + '<div><div class="release">release: ' + recording.release + '<div><div class="year">year: ' + recording.year + '</div><br /></li>'));
  });
  
  
  
  
  //PART 6: Create Images for Recording Lists
  
  /*STEPS!
  -add an image to the top of the sections for top rated and recordings.
  - Each <img> should be the child of a <div> with the id “image-container-xxx”, where “xxx” is either “top-rated” or “recording”. 
  -show the image that corresponds to the first recording in each list.
  */
  $('#section-top-rated').prepend('<div id="image-container-top-rated"><img src=' + topRated[0].art + ' class="image" /></div>');
  $($newSection).prepend('<div id="image-container-recording"><img src=' + recordings[0].art + ' class="image" /></div>');
  
  
  
  
  
  
  //PART 7:
  var billyImage = data.images.billy;
  
  //jQuery click() Method: $(selector).click()
  
  //jQuery attr() Method: $(selector).attr(attribute)
  
  //jQuery on() Method: 
  
  //$(selector).on(event,childSelector,data,function,map)
  
  
  $('#image-billy').on('click', function() {
    if (billyImage[0] === $('#image-billy').attr('src')) {
      $('#image-billy').attr('src', billyImage[1]);
    } else if (billyImage[1] === $('#image-billy').attr('src')) {
      $('#image-billy').attr('src', billyImage[2]);
    } else if (billyImage[2] === $('#image-billy').attr('src')) {
      $('#image-billy').attr('src', billyImage[3]);
    } else if (billyImage[3] === $('#image-billy').attr('src')) {
      $('#image-billy').attr('src', billyImage[0]);
    }
  });
  
  
  
  
  //PART 8: Dynamically Swap Recording Images
  
  /*STEPS!
  -top rated and recordings lists 
  - user clicks on one of the <li>,
  -gets swaped 
  */
  
  //jQuery closest() Method
  //$(selector).closest(filter)
  
  $('li').on('click', function() {
    $(this).closest('.list-recordings').closest('.recordings')
      .find('img').attr('src', this.id);
  });
  
  
  
  
  
  
  
  //PART 9: Build a Table using jQuery
  var rider = data.rider;

  var cTable = function(entry) {
    var cRow = function(val) {
      var $row = $('<tr>');
      var $type = $('<td>').text(val.type);
      var $desc = $('<td>').text(val.desc);
      $row.append($type, $desc);
      return $row;
    };
    var $table = $('<table>');
    var $rows = entry.map(cRow);
    $table.append($rows);
    return $table;
  };


  cTable(rider).appendTo('#sections');

  // YOUR CODE ABOVE HERE //
};








/* eslint-disable */
const onFail = (error) => {
  console.error("getJSON on discography failed!");
};

$(document).ready(() => {
  $.getJSON("/src/data.json", onReady).fail(onFail);
});

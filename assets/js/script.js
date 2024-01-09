//var eventText = $('#hour-9 .description'
var saveButton = $('.saveBtn');
var currentTime = dayjs();
var todayIs = dayjs().format('dddd');


// Displays the current day at the top of the page.
$('#currentDay').text('Today is ' + todayIs);

// This function checks what the current time is, and then uses a for loop to
// add classes to every hour block in the html file (relative to current time).
$(function () {
  for (let i = 9; i < 18; i++) {
    console.log(i)
    console.log($('#hour-'+i))
  if(i < currentTime.hour()) {
    $('#hour-'+i).addClass('past');
  } else if(i === currentTime.hour()) {
    $('#hour-'+i).addClass('present');
  } else {
    $('#hour-'+i).addClass('future');
  }
  }
  var i=0;

// This for loop checks for hours that have a text value and then
  for(let i = 9; i < 18; i++) {
    var textValue = localStorage.getItem(i);
    if (localStorage.getItem(i)) {
      $('#hour-'+i +' .description').val(textValue);
      console.log(i)
    }
  }
});

// Listens for a click event, which will save the text and hour.
saveButton.on('click', function(){
  
  // 'this' is the button you clicked
  const text = $(this).parent().find(".description").val();
  const hour = $(this).parent().attr("id").split("-")[1];

  // Runs the saveAppointment function once the value of the description and
  // the hour have been found.
  saveAppointment(text, hour);
  getAppointment();
});

// Takes text and hour data and saves them to local storage. 
function saveAppointment(text, hour) {
  localStorage.setItem(hour, text);

};

// Gets text and hour data from local storage and displays it
function getAppointment(text, hour) {
  localStorage.getItem(hour, text);
};





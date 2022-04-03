// Step 1 - Use moment.js to display current date at top of page

// Step 2 - Create html block for standard business hours
// Step 2a - will use textarea element for timeblocks

// Step 3 - Use CSS to colorcode business hours for past/present/future

// Step 4 - Allow user to enter data in time block

// Step 5 - When usaer clicks save button, save entered data(step 4) to localStorage

// Step 6 - Make sure saved data persists on page, even when refreshed


//Global Variable Declarations
var saveBtn = $(".btn");
var nineAm = $("#9");
var tenAm = $("#10");
var elevenAm = $("#11");
var twelvePm = $("#12");
var onePm = $("#13");
var twoPm = $("#14");
var threePm = $("#15");
var fourPm = $("#16");
var fivePm = $("#17");

//Get today's date from moment
var today = moment().format('MMMM Do YYYY');
var currentHour = moment().hour();


//save user-entered data in <textarea> element to the localStorage
$(saveBtn).on("click", function() {
    console.log(this);
    
    var text = $(this).siblings(".description").val();
    console.log(text);

    var time = $(this).parent().attr("id");
    console.log(time);

    localStorage.setItem(time, text);
});

//reload any saved data from the local storage
$('#9 .description').val(localStorage.getItem("9"));
$('#10 .description').val(localStorage.getItem("10"));
$('#11 .description').val(localStorage.getItem("11"));
$('#12 .description').val(localStorage.getItem("12"));
$('#13 .description').val(localStorage.getItem("13"));
$('#14 .description').val(localStorage.getItem("14"));
$('#15 .description').val(localStorage.getItem("15"));
$('#16 .description').val(localStorage.getItem("16"));
$('#17 .description').val(localStorage.getItem("17"));


// var timeBlocks = [nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm,threePm,fourPm,fivePm];




//style the timeblocks according to what time it is (gray if past, red if current hour, and green if future)
$(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id"));

    console.log(blockHour);

    if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    } 
    else if (blockHour===currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    } 
    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
});


//styling the timeblocks according to past, present, or future

// $(".btn").on("click", function() {
//     userInput = $(this).siblings(".description").val().trim();
//     console.log(userInput);
//     hourSpan = $(this).siblings(".input-group").text().trim();
//     console.log(hourSpan);
//     localStorage.setItem(hourSpan, JSON.stringify(userInput));
// });

//Display current date in header
$('#currentDay').text("Today is: " + today);
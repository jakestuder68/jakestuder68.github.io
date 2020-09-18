// DATA

var answer1 = "Dependable";
var answer2 = "Dependable";
var answer3 = "Dependable";
var answer4 = "Self-disciplined";
var answer5 = "Self-disciplined";
var answer6 = "Self-disciplined";
var answer7 = "Conscientious";
var answer8 = "Conscientious";
var answer9 = "Conscientious";
var answer10 = "Open-minded";
var answer11 = "Open-minded";
var answer12 = "Open-minded";
var answer13 = "Collaborative";
var answer14 = "Collaborative";
var answer15 = "Collaborative";

var emptyMessage = "Room for growth";
               



// WHEN SUBMIT BUTTON IS PRESSED

$( '#submit' ).on( "click", function() { 
  checkInputs(); //run this function which checks to see if user didn't forget to answer one of the questions, then shows the answer
});




// PERFORMS CHECKS THEN DISPLAYS ANSWERS

function checkInputs(){

//q1 *******************
      if(!$('#q1_0').is(':checked') ) { //if radio button 1, 2 and 3 is not selected (user forgot to make a choice),
       $('#ans1').html(emptyMessage); // display this message in the feedback column for question 1 letting the user know they forgot to make a choice
     }
     else { //but if a button was selected
      $('#ans1').html(answer1); //go ahead and display the answer
     }

//q2 *******************
      if(!$('#q2_0').is(':checked') ) {
       $('#ans2').html(emptyMessage); 
     }   
     else { 
      $('#ans2').html(answer2); 
     }

//q3 *******************
      if(!$('#q3_0').is(':checked') ) {
       $('#ans3').html(emptyMessage); 
     }   
     else { 
      $('#ans3').html(answer3); 
     }

//q4 *******************
      if(!$('#q4_0').is(':checked') ) {
       $('#ans4').html(emptyMessage); 
     }   
     else { 
      $('#ans4').html(answer4); 
     }

//q5 *******************
      if(!$('#q5_0').is(':checked') ) {
       $('#ans5').html(emptyMessage); 
     }   
     else { 
      $('#ans5').html(answer5); 
     }

//q6 *******************
      if(!$('#q6_0').is(':checked') ) {
       $('#ans6').html(emptyMessage); 
     }   
     else { 
      $('#ans6').html(answer6); 
     }


//q7 *******************
      if(!$('#q7_0').is(':checked') ) {
       $('#ans7').html(emptyMessage); 
     }   
     else {
      $('#ans7').html(answer7); 
     }

//q8 *******************
      if(!$('#q8_0').is(':checked') ) {
       $('#ans8').html(emptyMessage); 
     }   
     else { 
      $('#ans8').html(answer8); 
     }

//q9 *******************
      if(!$('#q9_0').is(':checked') ) {
       $('#ans9').html(emptyMessage); 
     }   
     else { 
      $('#ans9').html(answer9); 
     }

//q10 *******************
      if(!$('#q10_0').is(':checked') ) {
       $('#ans10').html(emptyMessage); 
     }   
     else { 
      $('#ans10').html(answer10); 
     }

//q11 *******************
      if(!$('#q11_0').is(':checked') ) {
       $('#ans11').html(emptyMessage); 
     }   
     else { 
      $('#ans11').html(answer11); 
     }

//q12 *******************
      if(!$('#q12_0').is(':checked') ) {
       $('#ans12').html(emptyMessage); 
     }   
     else { 
      $('#ans12').html(answer12); 
     }

//q13 *******************
      if(!$('#q13_0').is(':checked') ) {
       $('#ans13').html(emptyMessage); 
     }   
     else { 
      $('#ans13').html(answer13); 
     }

//q14 *******************
      if(!$('#q14_0').is(':checked') ) {
       $('#ans14').html(emptyMessage); 
     }   
     else { 
      $('#ans14').html(answer14);
     }

//q15 *******************
      if(!$('#q15_0').is(':checked') ) {
       $('#ans15').html(emptyMessage); 
     }   
     else { 
      $('#ans15').html(answer15); 
     }

} //end of checkInputs function






// clears last column text when a radio button is selected as there may still be the emptyMessage displaying in it.

$( "input[name=q1]").change(function() { 
  $('#ans1').html(""); 
});

$( "input[name=q2]").change(function() {
  $('#ans2').html(""); 
});

$( "input[name=q3]").change(function() {
  $('#ans3').html(""); 
});

$( "input[name=q4]").change(function() {
  $('#ans4').html(""); 
});

$( "input[name=q5]").change(function() {
  $('#ans5').html(""); 
});

$( "input[name=q6]").change(function() {
  $('#ans6').html(""); 
});

$( "input[name=q7]").change(function() {
  $('#ans7').html(""); 
});

$( "input[name=q8]").change(function() {
  $('#ans8').html(""); 
});

$( "input[name=q9]").change(function() {
  $('#ans9').html(""); 
});

$( "input[name=q10]").change(function() {
  $('#ans10').html(""); 
});

$( "input[name=q11]").change(function() {
  $('#ans11').html(""); 
});

$( "input[name=q12]").change(function() {
  $('#ans12').html(""); 
});

$( "input[name=q13]").change(function() {
  $('#ans13').html(""); 
});

$( "input[name=q14]").change(function() {
  $('#ans14').html(""); 
});

$( "input[name=q15]").change(function() {
  $('#ans15').html(""); 
});



  

  
// set variables
var randomNumber;
var fail = 0;
var victory = 0;
var totalscore = 0;

// game function
var crystalgame = function () {

	$(".crystals").empty();
// images: I saw that the assignment wanted these images hosted in the images folder, will reorder that later!
	var images = [
			'https://cdn3.iconfinder.com/data/icons/fatcow/32x32_0760/ruby.png', 
			'https://cdn4.iconfinder.com/data/icons/free-game-icons/64/Diamond.png', 
			'https://cdn2.iconfinder.com/data/icons/bitsies/128/Jewel-256.png', 
			'https://cdn2.iconfinder.com/data/icons/business-finance-vol-1-53/30/Untitled-1-38-256.png'];
		
// random number between 19-120 for computer guess
	randomNumber = Math.floor(Math.random() * 101 ) + 19; 

// this will tag the randomNumber value to the randomNumber id in the html
	$("#randomNumber").html(randomNumber);

// here's the variable on the index being less than 4 counting up 1

	for(var i = 0; i < 4; i++){

// crystal values random between 1-11
		var random = Math.floor(Math.random() * 10) + 1;
// Not sure what this is doing
		var crystal = $("<div>");
// Give crystal attribute class and crystal
			crystal.attr({
				"class": "crystal",
				"randomCrystal": random
			});
// Looking back at line 12 I think I complicated this a bit, but it works...
			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"
			});
// Let's throw .crystals on crystal
		$(".crystals").append(crystal);
	}
// Let's put the total score display on
	$("#totalscore").html(totalscore);

}
// Let's run it in the game!
crystalgame();


// Runs click event
$(document).on('click', ".crystal", function () {
// Jumps to random crystal on line 34
	var num = parseInt($(this).attr('randomCrystal'));

	totalscore += num;

	$("#totalscore").html(totalscore);

// Runs if fail
	if(totalscore > randomNumber){

		fail++;

		$("#fail").html("Failures: " + fail);

		totalscore = 0;

		crystalgame();
	} 

// Runs is victory
	else if(totalscore === randomNumber){

		victory++;

		$("#victory").html("Victories: " + victory);

		totalscore = 0;

		crystalgame();
	}

});
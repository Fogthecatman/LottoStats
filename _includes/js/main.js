$('document').ready(function() {


	var powerBallURL = 'http://data.ny.gov/resource/d6yy-54nr.json';
	var latest = {
		"draw_date": "",
		"winning_numbers": [],
		"multiplier": ""
	}
	$.getJSON(powerBallURL, function(data){
		latest.draw_date = data[0].draw_date;
		latest.winning_numbers = data[0].winning_numbers.split(" ");
		latest.multiplier = data[0].multiplier;
		console.log(latest);
	});

	var draw_date_html = "<h1>" + latest.draw_date + "</h1>";
	var winning_numbers_html = "<h2> ";

	latest.winning_numbers.forEach(function(number){
		winning_numbers_html += number + " ";
	});
	winning_numbers_html += "</h2>";

	var multiplier_html = "<h3> " + latest.multiplier + "</h3>";
	$('#draw_date').html(draw_date_html);
	$('#winning_numbers').html(winning_numbers_html);
	$('#multiplier').html(multiplier_html);


});

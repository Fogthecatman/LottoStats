var powerBallURL = 'http://data.ny.gov/resource/d6yy-54nr.json';
var latest = {
	"draw_date": "",
	"winning_numbers": [],
	"multiplier": ""
};

$('document').ready(function() {

	$.getJSON(powerBallURL, function(data){
		latest.draw_date = data[0].draw_date.substring(0, 10);
		latest.winning_numbers = data[0].winning_numbers.split(" ");
		latest.multiplier = data[0].multiplier;
		console.log(latest);
		setContent();
	});
});

function setContent() {
	var draw_date_html = "<h5>" + latest.draw_date + "</h5>";
	var winning_numbers_html = "<h5> ";
  //console.log(latest.draw_date);
	latest.winning_numbers.forEach(function(number){
		winning_numbers_html += number + " ";
	});
	winning_numbers_html += "</h5>";

	var multiplier_html = "<h5> " + latest.multiplier + "</h5>";
	console.log(draw_date_html);
	$('#draw_date').html(draw_date_html);
	$('#winning_numbers').html(winning_numbers_html);
	$('#multiplier').html(multiplier_html);
}

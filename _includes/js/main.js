$('document').ready(function() {

	//Powerball API url
	var url_powerball = 'http://data.ny.gov/resource/d6yy-54nr.json';

	//Holds data retrieved from api
	var dataAPI = getData(url_powerball);
	var latest = setLatest(dataAPI);
	console.log(latest);

	$('#winning_numbers h5').text(latest.winning_numbers.join(" ") +" "+ latest.last_number);
	$('#multiplier h5').text(latest.multiplier);
	$('#draw_date h5').text(latest.draw_year + " " + latest.draw_month + " " + latest.draw_day);

});

function getData(url){
	var jsonData;
	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		async: false,
		success: function(data){
			jsonData = data;
		}
	});
	return jsonData;
};

function setLatest(data){
	var date = data[0].draw_date;
	date = date.split("-");
	var year = date[0];
	var month = date[1];
	var day = (date[2].split("T"))[0];
	return {
		"draw_year": year,
		"draw_month": month,
		"draw_day": day,
		"winning_numbers": data[0].winning_numbers.split(" ").splice(0, 5),
		"last_number": data[0].winning_numbers.split(" ").splice(5, 1).join(""),
		"multiplier": data[0].multiplier
	}
}

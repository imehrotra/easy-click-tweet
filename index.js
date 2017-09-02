
	$(document).ready(function() {

	    var text_max = 140;
	    $('#textarea_feedback').html(text_max + ' characters remaining');
	    $('#textarea_feedback').attr("style", "font-size:16px; color:white;");
	    $('#textarea').keyup(function() {
	        var text_length = $('#textarea').val().length;
	        var text_remaining = text_max - text_length;
	        $('#textarea_feedback').html(text_remaining + ' characters remaining');
	    // console.log(document.getElementById("textarea").value);
	    });
	});



// on click event...or rather submit form...

$(document).on('click', '#click', function() {
	var string = document.getElementById("textarea").value;
	// console.log(string);
	var res = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(string);
	console.log(res);
	urlshort(res);
});


//retweet functionality

//url shortener
function urlshort(res) {
$.ajax({
        url: 'https://www.googleapis.com/urlshortener/v1/url?shortUrl=http://goo.gl/fbsS&key=AIzaSyBFmYcn3yahS8ao6Zabkc7kaRbfEs_sIhE',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        data: '{ longUrl: "' + res +'"}',
        dataType: 'json',
        success: function(response) {
            // console.log(response);
            console.log(response.id);
            var out = document.getElementById("out");
            out.color="white";
            out.innerHTML=response.id;
        }
     });
}
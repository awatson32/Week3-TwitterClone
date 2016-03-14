$(document).ready(function(){
/*Using document ready runs code only after the DOM is ready for js code to run more on that here: https://learn.jquery.com/using-jquery-core/document-ready */
	function postData() {
        $('#send').on('click', function() {
            var post = $('.status-box').val();
            $('.posts').prepend('<li>' + post + '</li>');
        });
        
		/*This function should create a post request using jquery. When posted it should:
			1) Add tweets to the 'database'
			2) After posted prepend message to list of messages and clear input box */
            
	}

	function getData() {
           
		/*This function should make a get request from 'database', parse the data and prepend each to the page*/
        $.get('/messages', function(data) {
            var tweet = data;
            var text = tweet.split('\n');
            for (var i in text) {
                $('.posts').append('<li>' + text[i] + '</li>');
                $('.posts').append('</br>');
            }
        });
	}

	/*Calls function once page loaded to display tweets to page*/
	getData();
});
$(document).ready(function(){
/*Using document ready runs code only after the DOM is ready for js code to run more on that here: https://learn.jquery.com/using-jquery-core/document-ready */
	function postData() {
		/*This function should create a post request using jquery. When posted it should:
			1) Add tweets to the 'database'
			2) After posted prepend message to list of messages and clear input box */
	}

	function getData() {
		/*This function should make a get request from 'database', parse the data and prepend each to the page*/
        $.getJSON('messages.txt', function(data){
            console.log(data);
            
            var messages = data.messages.map(function (message) {
                return message.userName + ': ' + message.text;
            });
            
            posts.empty();
            
            if (messages.length) {
                var content = '<li>' + messages.join('</li><li>') + '</li>';
                posts.append(content);
            }            
        });
	}

	/*Calls function once page loaded to display tweets to page*/
	getData();
});
// $('.messages').text('wooooo. I am alive!!!');

/*


element[s].on(eventName, callBackFunction);

*/

var listElements = $('li');
var pElements = $('p');

$('li').on('mouseover', function (event) {
	$(this).addClass('stripe');
});

$('li').on('mouseout', function (event) {
	$(this).removeClass('stripe');
});

pElements.on('click', function (event) {
	$(this).hide();
});

$('#reset').on('click', function (event) {
	pElements.show();
});

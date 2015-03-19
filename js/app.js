/**
 * Created by Eduardo Barros on 29/11/2014.
 */

$('.block .nav .item').distinct({
	selfAction: [
		{
			action: function(el) {
				console.log(el);
			},
			index: [1, 3]
		}
	],
	plusOne: true,
	prefix: 'item',
	target: '.block'
});
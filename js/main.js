//Initialize function
var init = function() {
	// TODO:: Do your initialization job
	console.log('init() called');

	document.addEventListener('visibilitychange', function() {
		if (document.hidden) {
			// Something you want to do when hide or exit.
		} else {
			// Something you want to do when resume.
		}
	});

	// add eventListener for keydown
	document.addEventListener('keydown', function(e) {
		switch (e.keyCode) {
		case 37: // LEFT arrow
			console.log('Key code : ' + e.keyCode);
			break;
		case 38: // UP arrow
			console.log('Key code : ' + e.keyCode);
			break;
		case 39: // RIGHT arrow
			console.log('Key code : ' + e.keyCode);
			break;
		case 40: // DOWN arrow
			console.log('Key code : ' + e.keyCode);
			break;
		case 13: // OK button
			console.log('Key code : ' + e.keyCode);
			break;
		case 10009: // RETURN button
			// elimina la pestaña del navegador
			tizen.application.getCurrentApplication().exit();
			console.log('Key code : ' + e.keyCode);
			break;
		default:
			console.log('Key code : ' + e.keyCode);
			break;
		}
	});

//	window.location.href = 'http://192.168.240.65/dolphin/ads-web/dev';
};
// window.onload can work without <body onload="">
window.onload = init;

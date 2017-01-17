'use strict';

require.config({
	baseUrl: "js/",
	paths: {
		'text':'lib/text',
		'zepot':'lib/Zepot',
		'signup':'modular/sign.up',
		'sign':'modular/sign',
		'success':'modular/success',
		'signupH':'text!view/signup.html',
		'signH':'text!view/sign.html',
		'successH':'text!view/success.html',
	}
});

require(['text','zepot'], function(util) {

});
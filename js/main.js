'use strict';

require.config({
	baseUrl: "js/",
	paths: {
		'text':'lib/text',
		'zepot':'lib/Zepot',
		'touch':'lib/touch',
		'fastclick':'lib/fastclick',
		'layer':'lib/layer.m/layer.m',
		'layerC':'lib/layer.m/need/layer.css',
		'signUpJ':'modular/sign.up',
		'signUpH':'../view/sign.up.html',
		'signUpC':'../style/sign.up.css',
		'success':'modular/success',
		'signJ':'modular/sign',
		'signH':'../view/sign.html',
		'signC':'../style/sign.css',
	},
	shim: {
		touch :{
			deps:['zepot']
		}
	}
});

require(['text','zepot','touch','fastclick','signUpJ'], function(text,$) {

});
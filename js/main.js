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
		'successJ':'modular/success',
		'successH':'../view/success.html',
		'successC':'../style/success.css',
		'signJ':'modular/sign',
		'signH':'../view/sign.html',
		'signC':'../style/sign.css',
	},
	shim: {
		touch :{
			deps:['zepot']
		},
		fastclick :{
			deps:['zepot']
		},
		signUpJ :{
			deps:['zepot']
		}
	}
});

require(['text','zepot','touch','fastclick','layer','text!layerC','signUpJ'], function(text,zepot,touch,fastclick,layer,layerC,signUpJ) {
		$(".layer").html(layerC);
		signUpJ.init();
});
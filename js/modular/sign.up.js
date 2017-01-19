'use strict';
require(['text!signUpH', 'text!signUpC', 'layer', 'text!layerC', 'signJ'],function(signUpH,signUpC,layer,layerC,signJ){

	var up = {
		init: function () {
			var _this = this;
			$(".style").html(signUpC);
			$("#entrance").html(signUpH);
			$(".layer").html(layerC);

			$("#signup").on("click",function(){
				_this.judge();
			});
		},
		//判断
		judge: function () {
			var _this = this;
			_this.name  = $("#name").val();
			_this.pasword = $("#pasword").val();
			if(!_this.name||!_this.pasword){
				var tips = "请输入您的名字！";
				if(_this.pasword)
					tips = "请输入您的密码！";
				layer.open({
					content:tips,
					skin:"msg",
					time:2
				});
				return;
			}

			_this.register();
		},
		//注册
		register: function () {
			var _this = this;
			localStorage.setItem("name",_this.name);
			localStorage.setItem("pwasword",_this.pwasword);
			signJ.init();
		}
	}

	$(function(){
		up.init();
	});

});
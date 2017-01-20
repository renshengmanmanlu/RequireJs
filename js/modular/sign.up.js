'use strict';

define(['text!signUpH', 'text!signUpC','signJ'], function (signUpH, signUpC,signJ) {
	return {
		init: function () {
			var _this = this;
			$(".style").html(signUpC);
			$("#entrance").html(signUpH);

			$("#signup").on("click", function () {
				_this.judge();
			});
		},
		//判断
		judge: function () {
			var _this = this;
			_this.name = $("#name").val();
			_this.pasword = $("#pasword").val();
			if (!_this.name || !_this.pasword) {
				var tips = "请输入您的名字！";
				if (_this.pasword)
					tips = "请输入您的密码！";
				layer.open({
					content: tips,
					skin: "msg",
					time: 2
				});
				return;
			}
			_this.register();
		},
		//注册
		register: function () {
			var _this = this;
			localStorage.setItem("name", _this.name);
			localStorage.setItem("pasword", _this.pasword);
			signJ.init();
		}
	}
});
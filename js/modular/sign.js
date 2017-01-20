'use strict';

define(['text!signH', 'text!signC','successJ'], function (signH, signC,successJ) {
	 return{
		init: function () {
			var _this = this;
			$(".style").html(signC);
			$("#entrance").html(signH);

			$("#name").val(localStorage.getItem("name"));
			$("#pasword").val(localStorage.getItem("pasword"));

			$(".s-btn").on("click",function(){
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
			successJ.inin();
		}
	}
});

'use strict';

require(['text!signH', 'text!signC', 'layer', 'text!layerC',], function (signH, signC, layer, layerC) {
	 return {
		init: function () {
			var _this = this;
			$(".style").html(signC);
			$("#entrance").html(signH);
			$(".layer").html(layerC);

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

		}
	}
});

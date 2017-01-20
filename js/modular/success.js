'use strict';
define(['text!successH', 'text!successC'],function(successH,successC){
	return{
		inin:function(){
			$(".style").html(successC);
			$("#entrance").html(successH);
		}
	}
});
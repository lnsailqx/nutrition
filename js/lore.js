jQuery(document).ready(function($) {
	$('.swi-log').click(function(){
		$(".logiframe").css("display","block");
		$(".regiframe").css("display","none");
		$(".swi-log").css("color","#0f88eb");
		$(".swi-log").css("border-bottom","2px solid #0f88eb");
		$(".swi-reg").css("color","black");
		$(".swi-reg").css("border-bottom","2px solid #000");

	});
	$('.swi-reg').click(function(){
		$(".logiframe").css("display","none");
		$(".regiframe").css("display","block");
		$(".swi-log").css("color","black");
		$(".swi-log").css("border-bottom","2px solid #000");
		$(".swi-reg").css("color","#0f88eb");
		$(".swi-reg").css("border-bottom","2px solid #0f88eb");
	});
});
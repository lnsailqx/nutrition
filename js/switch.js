jQuery(document).ready(function($) {
	$('#swi-index').click(function(){
		$(".screen").css("display","none");
		$('.nav-btn').css("background","none");
		$('#swi-index').css("background-color","rgba(255,255,255,0.2)");
		if($(window).width()<800){
			$(".nav").css("display","none");
			$(".blank").css("display","none");
			$("#index").fadeIn(200);
			$('.screen,.blank').unbind("touchmove");
		}
		$("#index").css("display","block");


	});
	$('#swi-focus').click(function(){
		$(".screen").css("display","none");
		$('.nav-btn').css("background","none");
		$('#swi-focus').css("background-color","rgba(255,255,255,0.2)");
		if($(window).width()<800){
			$(".nav").css("display","none");
			$(".blank").css("display","none");
			$("#focus").fadeIn(200);
			$('.screen,.blank').unbind("touchmove");
		}
		$("#focus").css("display","block");


	});
	$('#swi-fans').click(function(){
		$(".screen").css("display","none");
		$('.nav-btn').css("background","none");
		$('#swi-fans').css("background-color","rgba(255,255,255,0.2)");
		if($(window).width()<800){
			$(".nav").css("display","none");
			$(".blank").css("display","none");
			$("#fans").fadeIn(200);
			$('.screen,.blank').unbind("touchmove");

		}
		$("#fans").css("display","block");


	});
	$('#swi-share').click(function(){
		$(".screen").css("display","none");
		$('.nav-btn').css("background","none");
		$('#swi-share').css("background-color","rgba(255,255,255,0.2)");
		if($(window).width()<800){
			$(".nav").css("display","none");
			$(".blank").css("display","none");
			$("#share").fadeIn(200);
			$('.screen,.blank').unbind("touchmove");


		}
		$("#share").css("display","block");


	});
	$('#swi-message').click(function(){
		$(".screen").css("display","none");
		$('.nav-btn').css("background","none");
		$('#swi-message').css("background-color","rgba(255,255,255,0.2)");
		if($(window).width()<800){
			$(".nav").css("display","none");
			$(".blank").css("display","none");
			$("#message").fadeIn(200);
			$('.screen,.blank').unbind("touchmove");

		}
		$("#message").css("display","block");


	});
	$('#hand-header-logo').click(function(){
		$(".nav").fadeIn(200);
		$(".blank").css("display","block");
		$('.screen,.blank').bind("touchmove",function(e){
		e.preventDefault();
});
	});
	$('.blank').click(function(){
		$(".nav").css("display","none");
		$(".blank").css("display","none");
		$('.screen,.blank').unbind("touchmove");
	});

	$('.cancel-selete').click(function(){
			alert("123");

			});
	
	$('#swi-record').click(function(){
		$(".screen").css("display","none");
		$('.nav-btn').css("background","none");
		$('#swi-record').css("background-color","rgba(255,255,255,0.2)");
		if($(window).width()<800){
			$(".nav").css("display","none");
			$(".blank").css("display","none");
			$("#record").fadeIn(200);

		}
		$("#record").css("display","block");


	});


	$('#swi-news').click(function(){
		$(".screen").css("display","none");
		$("#news").css("display","block");
		$('.nav-btn').css("background","none");
		$('#swi-news').css("background-color","rgba(255,255,255,0.2)");
		if($(window).width()<800){
			$(".nav").css("display","none");
			$(".blank").css("display","none");

		}


	});
	$('#swi-set').click(function(){
		$(".screen").css("display","none");
		$("#set").css("display","block");
		$('.nav-btn').css("background","none");
		$('#swi-set').css("background-color","rgba(255,255,255,0.2)");
		if($(window).width()<800){
			$(".nav").css("display","none");
			$(".blank").css("display","none");

		}


	});
	// $('.screen-record-switch-show').click(function(){
	// 	$(".screen-record-subject-train").css("display","none");
	// 	$(".screen-record-subject-diet").css("display","none");
	// 	$(".screen-record-subject-show").css("display","block");
	// 	$('.screen-record-switch-train').css("background","#ffffff");
	// 	$('.screen-record-switch-diet').css("background","#ffffff");
	// 	$('.screen-record-switch-show').css("background","rgba(36,61,89,0.25)");

	// });
	// $('.screen-record-switch-diet').click(function(){
	// 	$(".screen-record-subject-train").css("display","none");
	// 	$(".screen-record-subject-show").css("display","none");
	// 	$(".screen-record-subject-diet").css("display","block");
	// 	$('.screen-record-switch-train').css("background","#ffffff");
	// 	$('.screen-record-switch-show').css("background","#ffffff");
	// 	$('.screen-record-switch-diet').css("background","rgba(36,61,89,0.25)");
	// });
	// $('.screen-record-switch-train').click(function(){
	// 	$(".screen-record-subject-show").css("display","none");
	// 	$(".screen-record-subject-diet").css("display","none");
	// 	$(".screen-record-subject-train").css("display","block");
	// 	$('.screen-record-switch-show').css("background","#ffffff");
	// 	$('.screen-record-switch-diet').css("background","#ffffff");
	// 	$('.screen-record-switch-train').css("background","rgba(36,61,89,0.25)");
	// });



	$(".screen-share-subject-wrap-reset").click(function(){
 			$(".preview").attr("src","");
		}) ;
	$("form").bind(

　　"submit", 

　　function() { 

　　　　return false;

　　 }

);
	
	$('#swi-logout').click(function(){
		$(".screen").css("display","none");
		$("#logout").css("display","block");
		$('.nav-btn').css("background","none");
		$('#swi-logout').css("background","rgba(36,61,89,0.25)");
		$.ajax({
					url:'../php/logout.php',
					method:'post',
					data:{
						

					},
					success:function(result){
						window.location.href ="../html/index.html";

					}
				});
		});


});

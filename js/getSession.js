
jQuery(document).ready(function($) {
	if($(window).width()<800){
			$("#dshare").attr("src","../img/appicon.png");

		}else{
			$("#dshare").attr("src","../img/icon.png");
		}
	$.ajax({
					url:'../php/getSession.php',
					method:'post',
					data:{
						

					},
					success:function(result){
						$json=eval("("+result+")");
						// $("#nav-pic").attr("src","http://119.29.15.43/userhead/"+$json.username+".jpg");
						
						$(".nav-pic").attr("src","../headimg/"+$json.username+".jpg");
						$(".nav-nick").append($json.name);
						$(".nav-id").append($json.username);
						$(".re-lin").html($json.username);




						if(result=="nologin"){
							window.location.href ="../html/index.html";
						}


					}
				});





});
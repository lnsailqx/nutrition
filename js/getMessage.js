



jQuery(document).ready(function($) {
	var strnum=0;

	// $.ajax({
	// 				url:'../php/searchMessage.php',
	// 				method:'post',
	// 				data:{
	// 					sum:strnum

	// 				},
	// 				success:function(result){
	// 					$json=eval("("+result+")");
	// 					// console.log($json);
	// 					for(var i=0;i<$json.length;i++){
	// 						var content = document.getElementById('html_template_message').innerHTML;
	// 						content = content.replace("re-sender",$json[i].sender);
	// 						content = content.replace("re-movement",$json[i].type);
	// 						content = content.replace("re-receiver",$json[i].receiver);
	// 						content = content.replace("re-posttime",$json[i].time);
	// 						$("#message").append(content);
							
	// 					}

	// 				}
	// 			});
	});

 $(window).scroll(function() {
 		var sum=$('#message').children(".screen-message-subject").length;
 		var display =$('#message').css('display');
        if ($(document).scrollTop() >= $(document).height() - $(window).height()-20&&display == 'block') {
        	
	$.ajax({
					url:'../php/searchMessage.php',
					method:'post',
					data:{
						sum:sum

					},
					success:function(result){
						$json=eval("("+result+")");
						
						for(var i=0;i<$json.length;i++){
							var content = document.getElementById('html_template_message').innerHTML;
							content = content.replace("re-sender",$json[i].sender);
							content = content.replace("re-movement",$json[i].type);
							content = content.replace("re-receiver","你");
							content = content.replace("re-posttime",$json[i].time);
							$("#message").append(content);
							
						}

					}
				});
        }
    });


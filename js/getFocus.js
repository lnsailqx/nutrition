



jQuery(document).ready(function($) {
	var strnum=0;

	// $.ajax({
	// 				url:'../php/searchFocus.php',
	// 				method:'post',
	// 				data:{
	// 					sum:strnum

	// 				},
	// 				success:function(result){
	// 					$json=eval("("+result+")");
	// 					// console.log($json);
	// 					for(var i=0;i<$json.length;i++){
	// 						var content = document.getElementById('html_template_focus').innerHTML;
	// 						content = content.replace("re-photo","http://119.29.15.43/userhead/"+$json[i].userid+".jpg");
	// 						content = content.replace("nickname",$json[i].name);
	// 						content = content.replace("nickid",$json[i].username);
	// 						$("#focus").append(content);
							
	// 					}

	// 				}
	// 			});
	});

 $(window).scroll(function() {
 		var sum=$('#focus').children(".screen-focus-subject").length;
 		var display =$('#focus').css('display');
        if ($(document).scrollTop() >= $(document).height() - $(window).height()-20&&display == 'block') {
	$.ajax({
					url:'../php/searchFocus.php',
					method:'post',
					data:{
						sum:sum

					},
					success:function(result){
						$json=eval("("+result+")");
						// console.log($json);
						for(var i=0;i<$json.length;i++){
							// $json[i].name=$json[i].name.substring(0,8); 
							// $json[i].username=$json[i].username.substring(0,8); 
							var content1 = document.getElementById('html_template_focus').innerHTML;
							content1 = content1.replace("re-photo","../headimg/"+$json[i].username+".jpg");
							content1 = content1.replace("nickname",$json[i].name);
							content1 = content1.replace("nickid",$json[i].username);
							content1 = content1.replace("re-username",$json[i].username);
							$("#focus").append(content1);
						}

					}
				});
        }
    });


jQuery(document).ready(function($) {


	var strnum=0;

	$.ajax({
					url:'../php/searchFans.php',
					method:'post',
					data:{
						sum:strnum

					},
					success:function(result){
						$json=eval("("+result+")");
						// console.log($json);
						for(var i=0;i<$json.length;i++){
							var content = document.getElementById('html_template_fans').innerHTML;
							content = content.replace("re-photo","../headimg/"+$json[i].username+".jpg");
							content = content.replace("nickname",$json[i].name);
							content = content.replace("nickid",$json[i].username);
							$("#fans").append(content);
							
						}

					}
				});
	});

 $(window).scroll(function() {
 		var sum=$('#fans').children(".screen-fans-subject").length;
 		var display =$('#fans').css('display');
        if ($(document).scrollTop() >= $(document).height() - $(window).height()-20&&display == 'block') {
	$.ajax({
					url:'../php/searchFans.php',
					method:'post',
					data:{
						sum:sum

					},
					success:function(result){
						$json=eval("("+result+")");
						// console.log($json);
						for(var i=0;i<$json.length;i++){
							var content1 = document.getElementById('html_template_fans').innerHTML;
							content1 = content1.replace("re-photo","../headimg/"+$json[i].username+".jpg");
							content1 = content1.replace("nickname",$json[i].name);
							content1 = content1.replace("nickid",$json[i].username);
							$("#fans").append(content1);
						}

					}
				});
        }
    });
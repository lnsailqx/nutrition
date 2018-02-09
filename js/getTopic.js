



jQuery(document).ready(function($) {
	var strnum=0;
	$.ajax({
					url:'../php/searchTopic.php',
					method:'post',
					data:{
						sum:strnum

					},
					success:function(result){
						$json=eval("("+result+")");
						for(var i=0;i<$json.length;i++){
							var content = document.getElementById('html_template').innerHTML;
							content = content.replace("re-photo","../headimg/"+$json[i].userid+".jpg");
							content = content.replace("昵称",$json[i].name);
							content = content.replace("re-dingwei",$json[i].id);
							content = content.replace("时间啊",$json[i].posttime);
							content = content.replace("一段文章",$json[i].message);
							if($json[i].hasimage==0){
							  	content = content.replace("<div class=\"screen-index-subject-pic\"><div class=\"index-img\"><img src=\"r-photo\" alt=\"\"></div></div>","");
							}else{
							content = content.replace("r-photo",$json[i].photo);
						     }
							content = content.replace("sb",$json[i].liker);
							content = content.replace("nnnnum",$json[i].commentcount);
							content = content.replace("re-topicid",$json[i].id);
							$("#index").append(content);
						}

					}
				});
	$.ajax({
					url:'../php/searchNews.php',
					method:'post',
					data:{
						sum:strnum

					},
					success:function(result){
						$json=eval("("+result+")");
						// console.log($json);
						for(var i=0;i<$json.length;i++){
							var content = document.getElementById('html_template_news').innerHTML;
							content = content.replace("re-src",$json[i].coverphoto);
							content = content.replace("re-title",$json[i].title);
							content = content.replace("re-time",$json[i].posttime);
							content = content.replace("re-like",$json[i].likecount);
							content = content.replace("re-newsid",$json[i].newsid);
							$("#news").append(content);
							
						}

					}
				});
	$.ajax({
					url:'../php/searchFocus.php',
					method:'post',
					data:{
						sum:strnum

					},
					success:function(result){
						$json=eval("("+result+")");
						// console.log($json);
						for(var i=0;i<$json.length;i++){
							var content = document.getElementById('html_template_focus').innerHTML;
							content = content.replace("re-photo","../headimg/"+$json[i].username+".jpg");
							content = content.replace("nickname",$json[i].name);
							content = content.replace("nickid",$json[i].username);
							content = content.replace("re-username",$json[i].username);
							$("#focus").append(content);
							
						}

					}
				});
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
	$.ajax({
					url:'../php/searchMessage.php',
					method:'post',
					data:{
						sum:strnum

					},
					success:function(result){
						$json=eval("("+result+")");
						// console.log($json);
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
	});
     var lock=false;

 $(window).scroll(function() {
 		
 		var display =$('#index').css('display');
 		if($(document).scrollTop()>100){
 			
 			$(".fixheader").css("filter","alpha(opacity=0.8)");
 			$(".fixheader").css("-moz-opacity","0.8");
 			$(".fixheader").css("opacity","0.8");
 			
 		}else{
 			$(".fixheader").css("filter","alpha(opacity=1)");
 			$(".fixheader").css("-moz-opacity","1");
 			$(".fixheader").css("opacity","1");
 		}
        if ($(document).scrollTop() >= $(document).height() - $(window).height()-20&&display == 'block'&&lock==false) {
        	lock=true;
        	var sum=$('#index').children(".screen-index-subject").length;
        	
	$.ajax({
					url:'../php/searchTopic.php',
					method:'post',
					data:{
						sum:sum

					},
					success:function(result){
						
						$json=eval("("+result+")");
						for(var i=0;i<$json.length;i++){
							var content = document.getElementById('html_template').innerHTML;
							content = content.replace("re-photo","../headimg/"+$json[i].userid+".jpg");
							content = content.replace("re-dingwei",$json[i].id);
							content = content.replace("昵称",$json[i].name);
							content = content.replace("时间啊",$json[i].posttime);
							content = content.replace("一段文章",$json[i].message);
							if($json[i].hasimage==0){
							  	content = content.replace("<div class=\"screen-index-subject-pic\"><div class=\"index-img\"><img src=\"r-photo\" alt=\"\"></div></div>","");
							}else{
							content = content.replace("r-photo",$json[i].photo);
						     }
							content = content.replace("sb",$json[i].liker);
							content = content.replace("nnnnum",$json[i].commentcount);
							content = content.replace("re-topicid",$json[i].id);
							$("#index").append(content);
						}

					}
				});
			lock=false;
        }
    });






jQuery(document).ready(function($) {
	
	// $.ajax({
	// 				url:'../php/searchNews.php',
	// 				method:'post',
	// 				data:{
	// 					sum:strnum

	// 				},
	// 				success:function(result){
	// 					$json=eval("("+result+")");
	// 					// console.log($json);
	// 					for(var i=0;i<$json.length;i++){
	// 						var content = document.getElementById('html_template_news').innerHTML;
	// 						content = content.replace("re-src",$json[i].coverphoto);
	// 						content = content.replace("re-title",$json[i].title);
	// 						content = content.replace("re-time",$json[i].posttime);
	// 						content = content.replace("re-like",$json[i].likecount);
	// 						content = content.replace("re-newsid",$json[i].newsid);
	// 						$("#news").append(content);
							
	// 					}

	// 				}
	// 			});
	});

 $(window).scroll(function() {
 		var sum=$('#news').children(".screen-news-subject").length;
 		var display =$('#news').css('display');

        if ($(document).scrollTop() >= $(document).height() - $(window).height() - 30 &&display == 'block') {

	$.ajax({
					url:'../php/searchNews.php',
					method:'post',
					data:{
						sum:sum

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
        }
    });


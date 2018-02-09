function getComment(id){
	    var topicid=id;
	    
	   

		$.ajax({
					url:'../php/getComment.php',
					method:'post',
					data:{
						topicid:topicid

					},
					success:function(result){
						$json=eval("("+result+")");
						console.log($json);
						for(var i=0;i<$json.length;i++){
							var content = document.getElementById('comment-mod').innerHTML;
							content = content.replace("re-commentor",$json[i].commentatorid);
							if($json[i].becommentatorid==""){
								content = content.replace("re-type","");
							}else{
								content = content.replace("re-type","回复");
							}
							content = content.replace("re-becommentor",$json[i].becommentatorid);
							content = content.replace("re-message",$json[i].message);
							
							$(".screen-index-subject-right"+"."+topicid).append(content);
							

						}

					}
				});
	}




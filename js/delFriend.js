
	
	$(document).on('click','.deletefriend',function(){
		var username=$(this).attr("name");
		$.ajax({
					url:'../php/deleteFriend.php',
					method:'post',
					data:{
						username:username

					},
					success:function(result){
						alert(result);
						window.location.href="../html/content.html"; 
						}

					
				});

	})
	

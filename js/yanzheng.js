jQuery(document).ready(function($) {
	
 	$("#regsub").click(function(){
			var id=$("#id").val();
			var	password=$("#password").val();
			var repassword=$("#repassword").val();
			var name=$("#name").val();
			var sex=$("#sel-sex").val();
			var age=$("#age").val();
				if(id==""){
					alert("ID不能为空");
					return;
				}else if(password==""){
					alert("密码不能为空");
					return;
				}else if(password.length<8){
				 	alert("密码不能短于8");
				 	return;
				 }else if(password!=repassword){
				 	alert("密码不一致");
				 	return;
				 }else if(name==""){
				 	alert("昵称不能为空");
				 	return;
				 }else if(age<=0||age>=120){
				 	alert("请输入正确年龄");
				 	return;
				 }else{
				console.log(id);
				console.log(password);
				console.log(repassword);
				console.log(name);
				console.log(sex);
				console.log(age);
				$.ajax({
					url:'../php/register.php',
					method:'post',
					data:{
						username:id,
						password:password,
						name:name,
						sex:sex,
						age:age

					},
					success:function(result){
						if(result=="used"){
							alert("用户名已被占用");
							
						}else if(result=="failure"){
							alert("数据库连接失败");

						}else{							 
							 

						}
					}
				});
			}
			});

 	$("#logsub").click(function(){
			var username=$("#log-username").val();
			var	password=$("#log-password").val();
			var	vaild=$("#log-vaild").val();
				if(username==""){
					alert("ID不能为空");
					return;
				}else if(password==""){
					alert("密码不能为空");
					return;
				}else{
				$.ajax({
					url:'../php/login.php',
					method:'post',
					data:{
						username:username,
						password:password,
						vaild:vaild

					},
					success:function(result){
						if(result=="验证码错误"){
							alert("验证码错误");
						}
						else if(result=="wrong"){
							alert("用户名或密码出错");
							
						}else if(result=="failure"){
							alert("数据库连接失败");

						}else{							 
							 console.log(result);
							 window.location.href="../html/content.html"; 

						}
					}
				});
			}
			});
 	});
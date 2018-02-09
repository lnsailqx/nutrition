 $(function(){ 

            //异步提交表单  
            $("#share-form-submit").on("click",function(){ 
                var text=$("#screen-share-text").val();
                if(text.length<=15){
                    alert("输入内容长度不应少于15");
                    return;
                }else{

                $("#share-form-object").ajaxSubmit({  
                    type:'post',  
                    url:'../php/dietUpload.php',  
                    success:function(data){  
                        // console.log(data);
                        alert("分享成功");
                        $(".screen").css("display","none");
                        $("#index").fadeIn(200);
                        $('.nav-btn').css("background","none");
                        $('#swi-index').css("background-color","rgba(255,255,255,0.2)");

                    } 
                });  
            }
            });



        }); 
jQuery(document).ready(function($) {

	for(var i=1;i<=12;i++){
		$("#show-month").append("<option value="+i+">"+i+"</option>");
	}
	for(var i=1;i<=31;i++){
		$("#show-day").append("<option value="+i+">"+i+"</option>");
	}



	$('#swi-record').click(function(){
	var mydate = new Date();
	var year=mydate.getFullYear();
   	var month=mydate.getMonth()+1;
   	var day=mydate.getDate();
	var year_id="#show-year option[value='"+year+"']";
	var month_id="#show-month option[value='"+month+"']";
	var day_id="#show-day option[value='"+day+"']";
	$(month_id).attr("selected","selected");
	$(year_id).attr("selected","selected");
	$(day_id).attr('selected','selected');
	$('.screen-record-subject-show-datesel-sub').trigger("click");
	});

$('.screen-record-subject-show-datesel-sub').click(function(){
		var year= $('#show-year').val();
		var month= $('#show-month').val();
		var day= $('#show-day').val();
		var date=year+"-"+month+"-"+day;

		$.ajax({
					url:'../php/searchShowdiet.php',
					method:'post',
					data:{
						date:date

					},
					success:function(result){

						if(result=="nodata"){
							$(".subject-show-bre").text("暂无数据");
							$(".subject-show-lun").text("暂无数据");
							$(".subject-show-din").text("暂无数据");
							$(".subject-show-lingshi").text("暂无数据");
							$(".subject-show-dianxing").text("暂无数据");
							$(".subject-show-qita").text("暂无数据");
						}else{


						$json=eval("("+result+")");
						console.log($json);
						if($json[0].breakfast=="")
							$json[0].breakfast="暂无数据";
						if($json[0].lunch=="")
							$json[0].lunch="暂无数据";
						if($json[0].dinner=="")
							$json[0].dinner="暂无数据";
						if($json[0].snack=="")
							$json[0].snack="暂无数据";
						if($json[0].dessert=="")
							$json[0].dessert="暂无数据";
						if($json[0].others=="")
							$json[0].others="暂无数据";
						$(".subject-show-bre").text($json[0].breakfast);
						$(".subject-show-lun").text($json[0].lunch);
						$(".subject-show-din").text($json[0].dinner);
						$(".subject-show-lingshi").text($json[0].snack);
						$(".subject-show-dianxing").text($json[0].dessert);
						$(".subject-show-qita").text($json[0].others);
					}

			
						

							
						

					}
					
				});



		});
	});
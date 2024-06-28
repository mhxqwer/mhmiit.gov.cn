$(function(){
    $(".mnav a").first().text("首页");
   
	/*判断一级是否为一级*/
	if($(".ctree_title h1 span").hasClass("no-one")){}else{
		 $(".ctree_title h1").text($(".mnav a:eq(1)").text());
	}
	
	/*判断左侧是否为外链*/
	$(".ctree dl a").each(function(){
		//console.log($(this).attr("href").indexOf(window.location.host));
		if($(this).attr("href").indexOf("/") == 0 || $(this).attr("href").indexOf(window.location.host) != -1){}else{
			$(this).attr("target","_blank");
		}
	});
	
	/*领导介绍跳转*/
	$(".tsy-ldjs .ctree dl a:lt(2)").attr("taget","_blank");

	if($(".ctree-3").text().trim().length > 0){
		if($(".ctree-3 dd").hasClass("ctree3-p")){
			$(".ctree dl a").each(function(){
				if($(this).text()==$(".mnav a").last().text()){
					$(this).parent("dt").addClass("curr");
					$(this).parent("dt").after($(".ctree-3").html());
				}
			});
		}else{
			$(".ctree-3 a").each(function(){
				if($(this).text()=="» "+$(".mnav a").last().text()){
					$(this).addClass("on");
				}else if($(this).text() == $(".mnav a").last().text()){
					$(this).addClass("on");
				}
			});
			$(".ctree dl a").each(function(){
				if($(this).text()==$(".mnav a").last().prev().text()){
					$(this).parent("dt").addClass("curr");
					$(this).parent("dt").after($(".ctree-3").html());
				}
			});
		}
	}else{
		$(".ctree dl a").each(function(){
			if($(this).text()==$(".mnav a").last().text()){
				$(this).parent("dt").addClass("curr");
			}
		});
	}

});
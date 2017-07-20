$(".dai").click(function(){
	$(".kuan").show();
})
$(".kuan p").click(function(){
	$(".kuan").hide();
	$(".r").val($(".kuan p:eq("+$(this).index()+") span").eq(0).html())
})
$(".dai2").click(function(){
	$(".kuan2").show();
})
$(".kuan2 p").click(function(){
	$(".kuan2").hide();
	$(".r2").val($(".kuan2 p:eq("+$(this).index()+") span").eq(0).html())
	$(".date2").html($(".kuan2 p:eq("+$(this).index()+") span").eq(1).html())
})
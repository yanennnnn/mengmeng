$(document).ready(function() {
	$('form').submit(function(e){
		// e.preventDefault();
		alert('成功預訂，請等候服務人員通知');
	});
	$('.cancle').on('click',function(e){
		e.preventDefault();
		 $("input[type=text]").val(""); 
		 $("input[type=tel]").val(""); 
		 $("input[type=email]").val(""); 
		 $("input[type=number]").val(""); 
		 $("input[type=radio]").prop( "checked", false );

	});
});
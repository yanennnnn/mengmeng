$(document).ready(function(){
	$('.food-List ul li a').on('click',function(e){
		 e.preventDefault();
		 $(this).addClass('active');
		 $(this).parent().siblings().find('a').removeClass('active');
	})
})


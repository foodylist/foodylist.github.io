$(document).ready(function(){
	$button=$('.btn-mini');
	$main=$('#main');
	$about=$('#about');

	$button.on('click', function(e){
		e.preventDefault();
		$this=$(this);
		if($this.hasClass('closeIt')){
			// $this.removeClass('closeIt');
			// $about.css({'left':'-100%','display':'none'});
			 $about.animate(
			 	{left:'-100%'},'linear',
			 	function(){
			 		$about.css('display','none');
			 		$this.removeClass('closeIt');
			 	});
		}else{
			$about.css('display','block')
				.animate({left:'0'},function(){
			 							$this.addClass('closeIt');
			 						});


			// $about.animate(
			//  	{left:'0'},
			//  	function(){
			//  		$about.css('display','block');
			//  		$this.addClass('closeIt');
			//  	});
			// $about.css({'left': '0', 'display':'block'});
			// $about.css('left', '0');
			// $about.animate(
			// 	{'display':'block'},
			//  	function(){
			//  		$about.css('left','0');
			//  		$this.addClass('closeIt');
			//  	});


		}	
	});

	$('.video').fitVids();
})
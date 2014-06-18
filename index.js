
$(document).ready(function() {

	//alert('Ready');

});

// ================
// { Handlers

// { Flow steps
$('.flowStep').on({
	
	mouseenter:function() {
		
		$(this).animate({
			
			width:'120px',
			height:'120px',
			top:'-=10px',
			left:'-=10px'
			
		}, 250).children().first().animate({
			
			width:'60px',
			height:'60px'
			
		}, 300).next().fadeIn(100);
		
		$('#flowMainInfoText').html($(this).attr('text')).fadeIn(250);
		$('#flowMainInfoStar').fadeOut(250);
		$('#flowTag').fadeOut(250);
		
	},
	mouseleave:function() {
		
		$(this).animate({
			
			width:'100px',
			height:'100px',
			top:'+=10px',
			left:'+=10px'
			
		}, 250).children().first().animate({
			
			width:'50px',
			height:'50px'
			
		}, 300).next().fadeOut();
		
		$('#flowMainInfoText').hide();
		
	}
	
});

// } Flow steps

// } Handlers
// ================
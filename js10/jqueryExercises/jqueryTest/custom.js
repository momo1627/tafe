jQuery(document).ready(function() {
	$('a').click(function(){
		// alert('hello world')
		$('#orderedlist').addClass('red');
		$('#orderedlist>li').addClass('blue')
	})
	$('#orderedlist li:last').hover(function(){
		$(this).addClass('green');
	},function(){
		$(this).removeClass('green')
	}
)
	/* place your code here */
	$('li').not(':has(ul)').css('border','1px solid black');
	$('a[id]').css('background','#ff0');
	$('#faq').find('dd').hide().end().find('dt').click(function(){
		$(this).next().slideToggle()
	});
	$('a').hover(function(){
		$(this).parents('p').addClass('highlight')
	},function(){
		$(this).parents('p').removeClass('highlight')
	}
)
	$('#large').tablesorter();
});
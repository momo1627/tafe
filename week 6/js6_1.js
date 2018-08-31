
$(document).ready(function(){
	var links = $('#gallary a');
	links.click(function(){
		links.each(function(){
			text = $(this).attr('title');
			alert(text)
		})
		return false;
	})
})
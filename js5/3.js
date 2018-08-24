
function changeImage(){
	var source = document.getElementById('sl');
	var value = source.value;
	var placeholder = document.getElementById('placeholder');
	placeholder.src = value;
}
window.onload = function(){
	document.getElementById('sl').addEventListener('change',changeImage)
}
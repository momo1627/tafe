var myPix = ['images/DaVinci.jpg','images/flare.jpg','images/dude.gif','images/default.jpg']
function random(x){
	return Math.floor(Math.random() * x)
}
function showPic(){
	var num = random(myPix.length);
	var placeholder = document.getElementById('placeholder');
	placeholder.src = myPix[num]
}
window.onload = function(){
	showPic()
}
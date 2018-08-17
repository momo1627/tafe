function random(){
	var num = Math.floor(Math.random()*4);
	return num;
}
function colorsup(){
	var colors = new Array;
	colors[0] = 'ff0000';
    colors[1] = '00ff00';
    colors[2] = 'aaffaa';
    colors[3] = '0000ff';
    var boxes = document.getElementById('boxes').getElementsByTagName("div");
    for (var i=0;i<boxes.length;i++){
        var ass = colors.pop();
		boxes[i].style.backgroundColor = "#"+ass;
	};
}

function sequence(){

	var index = random();
	var boxes = document.getElementById('boxes').getElementsByTagName("div");
	boxes[index].style.backgroundColor = 'blue';
}
function clear(){
	var boxes = document.getElementById('boxes').getElementsByTagName("div");
	for (var i=0;i<boxes.length;i++){
		boxes[i].style.backgroundColor = "white"
	};
}
document.getElementById("color").addEventListener("click",function(){
	colorsup();
})
document.getElementById("clear").addEventListener("click",function(){
	clear();
})
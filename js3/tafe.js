function HelloWorld(name){
	alert('hello' + name)
}
function hello(){
	var links = document.getElementsByTagName('a');
	for (var i=0; i<links.length;i++){
		links[i].onclick = function() {
			var name = links[i].getAttribute('title');
			alert(name)
		}
	}
}
	function HelloWorld(){
		var name = prompt("enter your name");
		alert('hello' + name)
	}
	function average(a,b,c,d){
		var result = (a + b + c + d) / 4;
		return result;
	}
	window.onload = alert(average(1,2,3,4)) 

	function changeBoth(){
		document.body.style.backgroundColor = "#00ff00";
		document.getElementById('offImage').src = "http://via.placeholder.com/150x150"
	}

	function getBill(){
		var b = prompt("what is your bill?",'0.0');
		b = parseFloat(b);
		var t = prompt("what is your tip?","0.0%");
		t = parseFloat(t);
		var result = calculateTotal(b,t);
		alert(result)
	}
	function calculateTotal(b,t){
		return (b+b*t/100).toFixed(2);
	}
var name1 = "Fred";
  	var name2 = "Wilma";
  	function greet(who){
  		alert("Greetings, " + who);
  		name2 = 'Jack'
  	}

  	greet(name1);
	greet(name2);
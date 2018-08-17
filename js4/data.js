function findDay(){
	var ar = new Array();
	ar[0] = "Sunday";
	ar[1] = "Monday";
	ar[2] = "Tuesday";
	ar[3] = "Wednesday";
	ar[4] = "Thursday";
	ar[5] = "Friday";
	ar[6] = "Saturday"
	var yourDay = prompt("Enter your Birthday Using the Format Below \nJanuary 3,1978","Enter Date");
	if (yourDay == "" || yourDay == "Enter Date"){
		alert("You didn/t enter anything");
	} else {
		var birthDay = new Date(yourDay);
		var day = birthDay.getDay();
		alert('You were born on ' + ar[day]);
	}
}
function findMonth(){
	var name = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	var mn = new Array();
	for (var i = 0;i<12;i++){
		mn[i]=name[i];
	}
	m = new Date();
	var currentM = parseInt(m.getMonth());
	alert(mn[currentM]);
}
function daysLeft(){
	var day = new Date();
	var today = day.getDate();
	var month = day.getMonth();
	var year = day.getFullYear(); 
	var monthdays = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	if (((year%4 == 0) && (year%100 !=0)) || (year %400 ==0)) monthdays[1] = 29;
	alert("there are " + (monthdays[month]-today) + " days left in this month!")
}
function godate(){
	var daystuff = new Date();
	var ar = new Array();
	ar[0] = "Sunday";
	ar[1] = "Monday";
	ar[2] = "Tuesday";
	ar[3] = "Wednesday";
	ar[4] = "Thursday";
	ar[5] = "Friday";
	ar[6] = "Saturday";
	var monthname = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	var c_weekday = ar[daystuff.getDay()]+ ' ';
	var c_month = monthname[daystuff.getMonth()] + ' ';
	var c_day = daystuff.getDate()+ ', ';
	var c_year = daystuff.getFullYear()+ ' ';
	var c_hour = daystuff.getHours();
	var c_minute = daystuff.getMinutes();
	var c_second = daystuff.getSeconds();
	var c_part='';
	if (c_hour >12) {
		c_part = ' pm';
		c_hour -= 12;
	} else if (c_hour == 12){
		c_part = ' pm';
		c_hour = 12;
	} else{
		c_part = ' am';
	}
	if (c_minute<10){
		c_minute = "0" + c_minute;
	}
	if (c_second<10){
		c_second = "0" + c_second
	}
	/*text = document.createTextNode(c_weekday + c_month + c_day + c_year +
	c_hour + ":" + c_minute + ":" + c_second + c_part)
	document.getElementById("raw").appendChild(text)*/
	document.getElementById("raw").firstChild.nodeValue = c_weekday + c_month + c_day + c_year +
	c_hour + ":" + c_minute + ":" + c_second + c_part;
}
function simple(){
	setTimeout(godate,1000)

}
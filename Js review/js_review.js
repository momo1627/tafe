function showResult(question){
    var content  = question;
    document.getElementById('wrapper').innerHTML = content;
}
function show(answer){
    var result  = document.createElement('p');
    result.innerHTML = answer;
    document.getElementsByTagName('body')[0].appendChild(result);
}
// Q1
// function food(){
//     var food = prompt('what food do you want to eat');
//     result = 'I want to eat ' + food +' where the food is';
//     alert(result)
// }
//Q2
function fruitCost(cost){   
    return '$'+ cost*5
}
//Q3
function count(start,increment,end){
    var result = [];
    for (var i = start;i<=end;i+=increment){
        result.push(i);
    }
    return result;
}
//Q4
function checkCredit(income){
    if (income >= 100){
        return 'You earn a lot of money! You qualify for a credit card.'
    } else{
        return 'Alas you do not qualify for a credit card'
    }
}
//Q5
function isEven(input){
    if (isNaN(input)){
        return 'please enter a number'
    } else{
        if (input % 2 ===0){
            return true
        } else{
            return false
        }
    }
}
//Q6
function word(){
    var word =prompt('please enter a word');
    show(word)
}
//Q7
function addUp(){
    var total=0;
    for (var i = 1; i<=1000;i++){
        total += i;
    }
    show(total)
}
//Q8
function decrement(){
    for (var i = 20; i>=0 ;i=i-3){
        show(i);
    }
}
//Q9
function name(){
    var name = prompt('please enter your name');
    show([name.length,name.toUpperCase(),name.toLowerCase(),name[0],name.includes('a')])
}
//Q10
function table(){
    var table = document.createElement('table')
    document.getElementsByTagName('body')[0].appendChild(table);
    th1 = document.createElement('th');
    th2 = document.createElement('th');
    th1.innerHTML = 'kilometers';
    th2.innerHTML = 'miles'
    table.appendChild(th1);
    table.appendChild(th2);
    for (var i = 100;i<=1000;i+=50){
        var tr = document.createElement('tr');
        var col1 = document.createElement('td')
        var col2 = document.createElement('td')
        col1.innerHTML = i;
        col2.innerHTML = (i/1.6).toFixed(1)
        tr.appendChild(col1);
        tr.appendChild(col2);
        table.appendChild(tr);
    }
}
//Q11
function split(list){
    var parts = list.split(' ');
    for (let i=0;i<parts.length;i++){
        show(parts[i])
    }
}
//Q12
function splitTwice(){
    var inputString = 'firstName=Fred,lastName=Jones,state=Tasmania,statement="this is a test of split"';
    var arrayTokens = inputString.split(',',3);
    for (let i = 0; i<arrayTokens.length;i++){
        show(arrayTokens[i]);
        let newTokens = arrayTokens[i].split('=');
        show(newTokens[1]);
    }
}
//Q13
function student(students,num){
    var group = [];
    var totalAge = 0;
    for (let i=0;i<students.length;i++){
        var student = [];
        student_info = students[i].split(',');
        student_info.push(student_info[2]*0.4+student_info[3]*0.6)
        group.push(student_info)
        totalAge += parseInt(student_info[1]);
    }
    show(group[num][4]) 
    show(totalAge/students.length)
    
}
//Q14
function days(){
    var n = Date.now();
    var chrismas = Date.parse('December 25 2018');
    var days = (chrismas-n)/1000/60/60/24
    show(Math.floor(days))
}
//Q15
function vowel(str){
    var count = 0;
    var vowels = ['a','e','i','o','u']
    for (let i = 0; i<str.length;i++){
            if (vowels.includes(str[i])){
                count += 1
            }
    }
    show(count)
}
window.onload = function(){
    document.getElementById('btn').addEventListener('click',function(){
        // showResult(fruitCost(5))
        // showResult(count(8,12,100))
        // showResult(checkCredit(101))
        // showResult(isEven(123))
        // word();
        // addUp()
        //decrement();
        // name();
        // table();
        // split('Scott "scoMO" Morrison')
        // splitTwice()
        //student(['jane doe,22,80,90','john doe,21,70,65','jack smith,30,80,80','jen smith,30,90,70','fredBrown,25,90,90'],1)
        //days();
        //vowel('steve')
    })
}




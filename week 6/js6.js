function showPic(pic){
	if(!document.getElementById('placeholder')) return true;
	if (pic.getAttribute('title')){
	var text = pic.getAttribute('title');
	} else{
		text = 'this animal doesn\'t have name!'
	}
	var placeholder = document.getElementById('placeholder');
	if(placeholder.nodeName != 'IMG') return true;
	var description = document.getElementById('description');

	description.innerHTML = 'It is a ' + text
	placeholder.setAttribute('src','images/'+text+'.jpg');
}
function prepareGallery(){
	var gallary = document.getElementById('gallary');
	var links = gallary.getElementsByTagName('a');
	for (let i = 0; i < links.length; i++){
		links[i].onclick = function(){
			showPic(this);
			return false
		}
	}
}	
function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function'){
		window.onload = func;
	} else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement){
		parent.appendChild(newElement);
	} else{
		parent.insertBefore(newElement,targetElement.nexSibling)
	}
}	
function preparePlaceholder(){
	var placeholder = document.createElement('img');
	placeholder.style.width = '500px'
	placeholder.setAttribute('id','placeholder');
	placeholder.src = 'images/placeholder.gif';
	placeholder.alt = 'image gallary';
	var description = document.createElement('p');
	description.id = 'description';
	var desc = document.createTextNode('choose an animal');
	description.appendChild(desc);
	var target = document.getElementById('gallary');
	insertAfter(placeholder,gallary);
	insertAfter(description,placeholder);
	}
addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder)
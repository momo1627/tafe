function showTip(link){
	hideTip(link);
	var tip = document.createElement('span');
	tip.className = 'tooltip';
	var tipText = document.createTextNode(link.getAttribute('title'));
	tip.appendChild(tipText);
	link.appendChild(tip);
	link.tooltip = tip;
	link.title = ''
}
function hideTip(link){
	if (link.tooltip) {
		link.title = link.tooltip.childNodes[0].nodeValue;
		link.removeChild(link.tooltip);
		link.tooltip = null
	}
}
function showTooltips(){
	var links = document.getElementsByTagName('a');
	for (let i = 0; i < links.length; i++){
		var title = links[i].getAttribute('title');
		if (title && title.length>0){
			links[i].onmouseover = function(){showTip(this)};
			links[i].onmouseout = function(){hideTip(this)};
		}
	}
}
window.onload = showTooltips;
const COLORS = {
	"black": {
		"darkColor": "#333",
		"lightColor": "rgba(250, 250, 250, 0.5)"
	},
	"pink": {
		"darkColor": "#ff47d1",
		"lightColor": "rgba(100, 0, 100, 0.2)"
	},
	"lightblue": {
		"darkColor": "#66ccff",
		"lightColor": "rgba(0, 0, 0, 0.2)"
	},
	"lightgreen": {
		"darkColor": "lightgreen",
		"lightColor": "rgba(0, 0, 0, 0.2)"
	}
};

var element = function(names) {	
	var elements = [];
	var aux = [];

	names.split(',').forEach(function(name) {
		if(name.match(/\./g) !== null) {
			aux = document.getElementsByClassName(name.trim().slice(1, name.length));
		} else if (name.match(/#/g) !== null) {
			aux = document.getElementById(name.trim().slice(1, name.length));
		} else {
			aux = document.getElementsByTagName(name.trim());	
		}

		for (var i = 0; i < aux.length; i++) {
			elements.push(aux[i]);
		}
	});

	return elements;
};

function addCssClass(element, className) {
	element.classList.add(className);
}

function removeCssClass(element, className) {
	element.classList.remove(className);
}

function changeElementsStyle(element, property, value) {
	if(element.length !== undefined) {
		element.forEach(function(ele) {
			ele.style[property] = value;
		});	
	} else {
		element.style[property] = value;
	}
}

function changeBackgroundColors(colorName) {
	var darkElements = element('body');
	var lightElements = element('.top-box, .left-box, .box');

	changeElementsStyle(darkElements, 'backgroundColor', COLORS[colorName].darkColor);
	changeElementsStyle(lightElements, 'backgroundColor', COLORS[colorName].lightColor)
}

function onClickCircle(event) {
	var btns = element('.circle');

	btns.forEach(function(btn) {
		removeCssClass(btn, 'checked');
	}); 

	addCssClass(event.currentTarget, 'checked');

	changeBackgroundColors(event.currentTarget.id);
}

function hideFilter(filter) {
	changeElementsStyle(filter, 'display', 'none');
}

window.onload = function () {
	element('.circle').forEach(function(btn) {
		btn.onclick = onClickCircle;
	}); 
}
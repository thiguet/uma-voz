var PHP_URL = "./../backend/index.php",
	COLORS = {
		"black": {
			"id": "1",
			"darkColor": "#333",
			"lightColor": "rgba(250, 250, 250, 0.5)",
			"filterColor": "rgba(192, 192, 192, 1)"
		},
		"orange": {
			"id": "3",
			"darkColor": "#ff8c66",
			"lightColor": "rgba(250, 250, 250, 0.5)",
			"filterColor": "rgba(255, 179, 153, 1)"
		},
		"lightblue": {
			"id": "2",
			"darkColor": "#66ccff",
			"lightColor": "rgba(250, 250, 250, 0.5)",
			"filterColor": "rgba(153, 221, 255, 1)"
		},
		"lightgreen": {
			"id": "4",
			"darkColor": "lightgreen",
			"lightColor": "rgba(250, 250, 250, 0.5)",
			"filterColor": "rgba(51, 153, 102, 1)"
		}
	};

var glob;

window.onload = function () {
	httpPost(screenInit);
}

function screenInit (response) {
	glob = {};
	glob.corAtual = COLORS['black'].id; 
	glob.temas = response; 

	setPoems();

	element('.rectangle').forEach(function(btn) {
		btn.onclick = onClickCircle;
	}); 

	element('.box').forEach(function(box) {
		box.onclick = showFilter;
	});
}

function setPoems() {
	var title = element('.title-text');
	var boxes = element('.box-text');

	var tema = glob.temas.find(function(tema) {
		return tema.seq_tema === glob.corAtual;	
	});

	var poemas = tema.poemas;

	title[0].innerHTML = tema.nome_tema;

	if(!!poemas) {
		var poemaKeys = Object.keys(poemas);
		
		for (var i = 0 ; i < poemaKeys.length; i++) {
			boxes[i].innerHTML = poemas[poemaKeys[i]].titulo_poema;
			changeElementsStyle(boxes[i], 'overflow', 'hidden');
			// boxes[i].innerHTML = poema[poemaKeys[i]].;
		}
	}
}

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

		if(aux.length) {
			for (var i = 0; i < aux.length; i++) {
				elements.push(aux[i]);
			}
		} else {
			elements.push(aux);
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
	var lightElements = element('.box');
	var filter = element('.showMessage');

	changeElementsStyle(darkElements, 'backgroundColor', COLORS[colorName].darkColor);
	changeElementsStyle(lightElements, 'backgroundColor', COLORS[colorName].lightColor);
	changeElementsStyle(filter, 'backgroundColor', COLORS[colorName].filterColor);
}


function onClickCircle(event) {
	var btns = element('.rectangle');
	
	//Change Color in Global Var
	glob.corAtual = COLORS[event.currentTarget.id].id;

	setPoems(glob.corAtual);

	changeBackgroundColors(event.currentTarget.id);
}

function hideFilter() {
	var filter = element('#filter');
	changeElementsStyle(filter, 'display', 'none');
}

function showFilter(ele) {
	var filter = element('#filter');

	changeElementsStyle(filter, 'display', 'block');
	
	var titulo_poema =	ele.currentTarget;
	choosePoema(ele.currentTarget.innerText);
}

function choosePoema() {
	// var poemas = glob.temas[glob.corAtual - 1].poemas;

	// if(!!poemas) {
	// 	var poemaKeys = Object.keys(poemas);
		
	// 	for (var i = 0 ; i < poemaKeys.length; i++) {
	// 		if(titulo_poema === poemas[poemaKeys[i]].titulo_poema) {
	// 			filter.innerText = poemas[poemaKeys[i]];
	// 		}
	// 	}
	// }
}

function httpPost(callback, params) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open("POST", PHP_URL, true); // true for asynchronous 
    
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(JSON.parse(xmlHttp.responseText));
    }
    xmlHttp.send(params);
}


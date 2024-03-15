function initializeLinks(){
	var links = JSON.parse(sessionStorage.getItem("links"));

	if (links==null) {
		links = [ 
			{ 
				name: 'Pocetna',
				count: 0,
				href: ''
			},
			{ 
				name: 'Knjige',
				count: 0,
				href: ''
			},
			{ 
				name: 'Galerija',
				count: 0,
				href: ''
			},
			{ 
				name: 'Recenzije',
				count: 0,
				href: ''
			},
			{ 
				name: 'Kontakt',
				count: 0,
				href: ''
			}
		];
		sessionStorage.setItem("links", JSON.stringify(links));
	}
}

window.onload = function() {
	initializeLinks();
	refreshUL();
}

function LinkClicked(name){
	var links = JSON.parse(sessionStorage.getItem("links"));
	var ahref= document.getElementById(name).href;

	for (var i=0; i<links.length; i++) {
		if (links[i].name == name) {
			links[i].count++;
			links[i].href=ahref;
		}
	}
	
	links.sort(compareLinks);
	
	sessionStorage.setItem("links", JSON.stringify(links));
}

function refreshUL(){
	var links = JSON.parse(sessionStorage.getItem("links"));
	var ul = document.getElementById("link-container");
	var link1 = document.getElementById("link1");
	var link2 = document.getElementById("link2");
	var link3 = document.getElementById("link3");
	link1.innerHTML = '';
	link2.innerHTML = '';
	link3.innerHTML = '';

	var a1 = document.createElement('a'); 
	a1.setAttribute('href',links[0].href);
	a1.innerHTML= links[0].name;
	link1.appendChild(a1);
	
	var a2 = document.createElement('a'); 
	a2.setAttribute('href',links[1].href);
	a2.innerHTML= links[1].name;
	link2.appendChild(a2);
	
	var a3 = document.createElement('a'); 
	a3.setAttribute('href',links[2].href);
	a3.innerHTML= links[2].name;
	link3.appendChild(a3);
}

function compareLinks( a, b ) {
  if ( a.count < b.count ){
    return 1;
  }
  if ( a.count > b.count ){
    return -1;
  }
  return 0;
}
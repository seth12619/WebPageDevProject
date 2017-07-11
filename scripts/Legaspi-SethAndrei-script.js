var header = document.getElementById("header");
var headImg = document.getElementById("headImg");
var op = 0;

//clock stuff
var clockSwitch;
var time = new Date();
var hour = time.getUTCHours() + 8;
var minute = time.getUTCMinutes();
var second = time.getUTCSeconds();

var tick = document.createElement('h3');
tick.style.position = "absolute";
tick.style.textIndent = "5px";
tick.style.width = "280px";
tick.style.marginLeft = "30px";
tick.style.marginTop = "-40px";

function clock() {
	time = new Date();
	hour = time.getUTCHours() + 8;
	if (hour > 24) {
		var temp = time.getUTCHours();
		temp = 24 - temp;
		temp = 8 - temp;
		hour = temp;
	}
	minute = time.getUTCMinutes();
	second = time.getUTCSeconds();
	tick.innerHTML = "GMT+8 Time: " + hour + ":" + minute + " | " + second + "s";
	
	header.appendChild(tick);
}


//quote stuff
var quoteBlock = document.createElement('div');
var quote = document.createElement('p');
var nameQ = document.createElement('p');
var ranNum;

quote.style.fontFamily = "Calibri";
quote.style.fontStyle = "italic";
quote.style.textIndent = "25px";

nameQ.style.fontFamily = "Calibri";
nameQ.style.marginTop = "-10px";
nameQ.style.textIndent = "260px";

quoteBlock.style.position = "absolute";
quoteBlock.style.marginLeft = "330px";
quoteBlock.style.marginTop = "-70px";
quoteBlock.style.width = "650px";
quoteBlock.style.height = "100px";

function addQuote() {
		ranNum = Math.floor((Math.random()*4) + 1);
		if (ranNum == 1) {
			quote.innerHTML = ("'A king… The king must be greedier than any other. He must laugh louder and rage harder. He must exemplify the extreme of all things, good and evil. That is why his retainers envy and adore him. And why the flames of aspiration, to be as the king is, can burn within his people.'");
			nameQ.innerHTML = ("-King Iskander, Rider (Fate/Zero)");
		}
		if (ranNum == 2) {
			quote.innerHTML = ("'If you look away and just turn your back on those you don't understand, you'll regret it someday. Accept what's happening before your eyes as a fact. That's a shortcut to becoming an adult.'");
			nameQ.innerHTML = ("-Ginoza Nobuchika, Enforcer (Psycho-Pass, season 2)");
		}
		if (ranNum == 3) {
			quote.innerHTML = ("'It should always be my turn! But games don't really work that way, huh?'");
			nameQ.innerHTML = ("-Neptune, Purple Heart (Hyperdimension Neptunia Victory)");
		}
		if (ranNum == 4) {
			quote.innerHTML = ("'I'd rather trust and regret than doubt and regret'");
			nameQ.innerHTML = ("-Kirigaya Kazuto, Kirito (Sword Art Online)");
		}
		
		
		header.appendChild(quoteBlock);
		quoteBlock.appendChild(quote);
		quoteBlock.appendChild(nameQ);
}



//Btn stuff
var btn = document.createElement("button");
btn.type = 'button';
btn.innerHTML =  "Replay";
btn.style.position = "absolute";
btn.style.width = "80px";
btn.style.marginLeft = "900px";
btn.style.marginTop = "-90px";


function addEvents() {

btn.onclick = function() {
clearInterval(anime);
clearInterval(fadeSwitch);
	op = 0;
	fadeSwitch = setInterval(fade,25);
	
	
	imgHeight = -350;
	imgLeft = 800;

	bounceCheck = true;
	startMove = false;
	done = false;
	anime = setInterval(animate,1);
}
	header.appendChild(btn);
}

//fade stuff
var fadeSwitch = setInterval(fade,25);
headImg.style.opacity = op;
btn.style.opacity = op;

function fade() {
if (op >=  1) {
	clearInterval(fadeSwitch);
}
	op += 0.01;
	headImg.style.opacity = op;
	btn.style.opacity = op;
}

//Moving Image stuff
var newImg = document.createElement("img");
var imgHeight = -350;
var imgLeft = 800;

var bounceCheck = true;
var startMove = false;
var done = false;

newImg.style.position = "absolute";
newImg.style.marginLeft = imgLeft + "px";
newImg.style.marginTop = imgHeight + "px";
newImg.src = "images/ball.png";

header.appendChild(newImg);

var anime = setInterval(animate,1);

function animate() {
	
	if (bounceCheck == true) {
		imgHeight += 2;
		if (imgHeight > -150) {
			bounceCheck = false;
			startMove = true;
		}
	}
	if (bounceCheck == false) {
	imgHeight -= 1;
	}
	
	if (imgHeight < -200) {
		bounceCheck = true;
	}
	if (startMove == true) {
		if (imgLeft > 27) {
			imgLeft -= 2;
		}
		if (imgLeft < 27) {
			startMove = false;
			done = true;
		}
	}
	if (done == true) {
		clearInterval(anime);
	}
	
	newImg.style.marginLeft = imgLeft + "px";
	newImg.style.marginTop = imgHeight + "px";
	
}


window.onload = function() {
	clockSwitch = setInterval(clock, 210);
	clock();
	addQuote();
	addEvents();
};
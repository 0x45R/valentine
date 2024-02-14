const positiveButtonElement = document.querySelector(".js-positive-button");
const emojiFace = document.querySelector(".emoji-face");
const emojiHands = document.querySelector(".emoji-hands");
const statusLabel = document.querySelector(".js-status-label");
const buttonContainer = document.querySelector(".button-container"); 
const addressLabel = document.querySelector(".js-address-label");
const emoji = [
	"🥰",
	"😍",
	"😘",
	"😽",
	"😚",
	"😻",

]

const phrases = [
	"I love you", 
	"i floof u",
	"ilu",
	"i love you",
	"mimimimimi",
	"bzibizibzibzi",
	"i wanna hug",
	"i wannu cuddle",
	"❣️",

]

const getRandomFromArray = (array) => array[Math.floor(Math.random()*array.length)]
const fetchIP = async () => {
	addressLabel.innerText = "";
	const response = await fetch("https://ip-api.com/json/");
	const data = await response.json();
	addressLabel.innerText = `dis u ${data.query} ? uwu`;
}
const setLoved = () => {
	emojiFace.innerText = getRandomFromArray(emoji);
	emojiHands.innerText = "👐";
	emojiHands.style.fontSize = "96px";
	emojiHands.style.lineHeight = "32px";
	statusLabel.innerText = getRandomFromArray(phrases)
	fetchIP();
	buttonContainer.classList.add("invisible");
}

const buttonClicked = () => {
	setLoved()
	localStorage.setItem("loved", true);
}

positiveButtonElement.addEventListener("click", ()=>buttonClicked());

if(localStorage.getItem("loved"))
{
	setLoved()
}


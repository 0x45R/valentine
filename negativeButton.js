const negativeButtonElement = document.querySelector("button.js-negative-button");

const isInBounds = (element) => {
  const rect = element.getBoundingClientRect();
  const bodyRect = document.body.getBoundingClientRect();

  return (
    rect.top >= bodyRect.top &&
    rect.left >= bodyRect.left &&
    rect.bottom <= bodyRect.bottom &&
    rect.right <= bodyRect.right
  );
}

const avoidBeingTouched = () => {
	const angle = Math.random()*360;
	const offset = 100;
	const {x, y}  = negativeButtonElement.getBoundingClientRect();
	if(isInBounds(negativeButtonElement))
		addTranslate(negativeButtonElement, {x: Math.cos(angle)*offset, y:Math.sin(angle)*offset})


	
}
negativeButtonElement.addEventListener("mouseenter", ()=>avoidBeingTouched())



const addTranslate = (element, value) => {
	let split = element.style.translate.replace("px","").split(" ")
	const x = parseInt(split[0]) || 0;
	const y = parseInt(split[1]) || 0;
	const translate = `${x+value.x}px ${y+value.y}px`;
	element.style.translate = translate;
}






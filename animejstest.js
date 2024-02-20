for (let i = 0; i < 600; i++){
	let e = document.createElement('div');
	e.classList.add('square');

	squareCont.appendChild(e);
}

anime({
	targets: '.square',
	translateY: 500,
	easing: 'easeOutSine',
	duration: 1000,
	delay: anime.stagger(10, {grid: })
});
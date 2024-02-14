for (let i = 0; i < 600; i++){
	let e = document.createElement('div');
	e.classList.add('square');

	body.appendChild(e);
}

anime({
	targets: '.square',
	translateX: 250,
	easing: 'easeInOutSine',
	delay: anime.stagger(1)
});
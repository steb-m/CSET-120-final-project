const menuCards = document.querySelectorAll('.menu-item');

menuCards.forEach((card) => {
	card.addEventListener('mouseenter', () => {
		card.classList.add('active');
	});
	card.addEventListener('mouseleave', () => {
		card.classList.remove('active');
	})
});
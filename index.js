const scrollingWrapper = document.querySelector(".scrolling-wrapper");
const prevBtn = document.getElementById("prev_btn");
const nextBtn = document.getElementById("next_btn");

function canScrollLeft() {
	return scrollingWrapper.scrollLeft > 0; // Sprawdza, czy można przewijać w lewo
}

function canScrollRight() {
	return (
		scrollingWrapper.scrollLeft <
		scrollingWrapper.scrollWidth - scrollingWrapper.clientWidth // Sprawdza, czy można przewijać w prawo
	);
}

function updateButtonStates() {
	prevBtn.disabled = !canScrollLeft(); // Wyłącz przycisk, jeśli nie można przewijać w lewo
	nextBtn.disabled = !canScrollRight(); // Wyłącz przycisk, jeśli nie można przewijać w prawo
}

prevBtn.addEventListener("click", () => {
	scrollingWrapper.scrollBy({
		top: 0,
		left: -300, // Wartość do przewinięcia w lewo
		behavior: "smooth",
	});
	updateButtonStates(); // Uaktualnij stany przycisków po przewinięciu
});

nextBtn.addEventListener("click", () => {
	scrollingWrapper.scrollBy({
		top: 0,
		left: 300, // Wartość do przewinięcia w prawo
		behavior: "smooth",
	});
	updateButtonStates(); // Uaktualnij stany przycisków po przewinięciu
});

// Sprawdź stany przycisków przy pierwszym załadowaniu
updateButtonStates();

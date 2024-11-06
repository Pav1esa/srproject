$(document).ready(function() {
    // Пример простого слайдера
    $(".gallery img").on("click", function() {
        $(this).toggleClass("zoomed");
    });
});
$(document).ready(function() {
    // Перевірка для кнопки "Цікаве"
    $('.tsikave-link').click(function(event) {
        event.preventDefault();  // Зупиняємо стандартну поведінку переходу
        window.location.href = "tsikave.html";  // Перехід на сторінку "Цікаве"
    });
});

$(document).ready(function() {
    // Перевірка на всі елементи з класом .clickable
    $('.clickable').click(function() {
        // Дія, яка відбудеться після натискання
        // Наприклад, показати додаткову інформацію
        $(this).next('.additional-info').toggle();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel-button.next");
    const prevButton = document.querySelector(".carousel-button.prev");
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Вирівняти слайди
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + "px";
    });

    // Функція для переміщення слайдів
    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = "translateX(-" + targetSlide.style.left + ")";
        currentSlide.classList.remove("current-slide");
        targetSlide.classList.add("current-slide");
    };

    // Кнопка вперед
    nextButton.addEventListener("click", () => {
        const currentSlide = track.querySelector(".current-slide") || slides[0];
        const nextSlide = currentSlide.nextElementSibling || slides[0];
        moveToSlide(track, currentSlide, nextSlide);
    });

     // Кнопка назад
     prevButton.addEventListener("click", () => {
        const currentSlide = track.querySelector(".current-slide") || slides[0];
        const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
        moveToSlide(track, currentSlide, prevSlide);
    });

    // Встановити перший слайд як поточний
    slides[0].classList.add("current-slide");
});

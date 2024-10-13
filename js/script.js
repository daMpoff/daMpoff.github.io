// Анимация заголовка
gsap.from("#nameSite", {
    duration: 1.5,
    opacity: 0,
    ease: "power4.out",
    transform: "translateY(350%)",
    stagger: 0.1
});

// Обработчик события для плавной прокрутки к началу элемента с id 'entry-section'
document.querySelector('.float-button').addEventListener('click', function(e) {
    e.preventDefault(); // Предотвращаем переход по ссылке
    const target = document.querySelector('#entry-section'); // Находим элемент, к которому прокручиваем
    const targetPosition = target.getBoundingClientRect().top + window.scrollY; // Получаем позицию элемента
    window.scrollTo({
        top: targetPosition, // Прокручиваем к началу элемента
        behavior: 'smooth' // Плавная прокрутка
    });
});

// Скрытие и отображение кнопки при прокрутке
let lastScrollTop = 0;
const floatButton = document.querySelector('.float-button');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Если прокрутка вниз, скрываем кнопку
    if (currentScroll > lastScrollTop) {
        floatButton.style.visibility = 'hidden' // Скрываем кнопку
    } else {
        floatButton.style.visibility = 'visible' // Показываем кнопку
    }
    
    // Обновляем позицию последней прокрутки
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для мобильных устройств или при прокрутке вверх
});

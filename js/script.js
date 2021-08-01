
//===========================  Меню - бургер  =========================================

$('.header__burger').click(function (event) {
	$('.header__burger,.header__menu').toggleClass('active');
	$('body').toggleClass('lock');
});
//$('.header__link').click(function (event) {
//	//$('.header__burger,.header__menu').removeClass('active');
//	//$('body').removeClass('lock');
//	console.log("Hello");
//});
$('.header__menu').find('.header__link').click(function (event) {
	console.log("Hello");
});



//=========================== Слайдер  =========================================



// Инициализируем Swiper
const swiper = new Swiper('.swiper-container_1', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	// Количество слайдов для показа
	slidesPerView: 1,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});



// Инициализируем Swiper
const swiper2 = new Swiper('.swiper-container_2', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	// Количество слайдов для показа
	slidesPerView: 1,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});
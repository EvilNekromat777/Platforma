
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



	//===========================  Меню - бургер  =========================================
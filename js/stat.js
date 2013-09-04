(function () {

	$(window).scroll(function () {
		var top = $(document).scrollTop();
		if (top > 200) $('.sticky-block').addClass('fixed'); //200 - это значение высоты прокрутки страницы для добавления класса
		else $('.sticky-block').removeClass('fixed');
	});

	$('ul.tabs').each(function () {
		$(this).find('li').each(function (i) {
			$(this).click(function () {
				$(this).addClass('current').siblings().removeClass('current').parents('div.section').find('div.box').eq(i).show().siblings('div.box').hide();
			});
		});
	});

	$('div.sticky-block').each(function () {
		$(this).find('span').each(function (i) {
			$(this).click(function () {
				$(this).addClass('current').siblings().removeClass('current').parents('div.section').find('div.block').eq(i).show().siblings('div.block').hide();
			});
		});
	});

})();

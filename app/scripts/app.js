import 'svg4everybody';
import $ from 'jquery';

$(() => {
	let baseLeft = $('.slider__bar').offset().left;
	let baseWidth = $('.slider__bar').width();
	const slide = $('.slider__value');
	let isSlide = false;

	slide.mousedown(() => {
		isSlide = true;
	});

	$(window).resize(() => {
		baseLeft = $('.slider__bar').offset().left;
		baseWidth = $('.slider__bar').width();
	});

	$(window).mousemove(e => {
		if (!isSlide) {
			return;
		}
		let offset = e.pageX - baseLeft;
		if (offset > baseWidth) {
			offset = baseWidth - 2;
		}
		if (offset < 0) {
			offset = 0;
		}
		slide.css({left: offset});
	});

	$(window).mouseup(() => {
		isSlide = false;
	});

});

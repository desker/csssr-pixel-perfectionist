import 'svg4everybody';
import $ from 'jquery';

$(() => {
	const baseLeft = $('.slider__bar').offset().left;
	const baseWidth = $('.slider__bar').width();
	const slide = $('.slider__value');
	let isSlide = false;

	slide.mousedown(() => {
		isSlide = true;
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

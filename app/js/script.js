
/* ###### init skrol to point  ######*/
/* ###### bower i page-scroll-to-id  ######*/
/*(function($){
    $(window).load(function(){
        $("a[rel='m_PageScroll2id']").mPageScroll2id({
				    offset:200,
				    highlightClass:"left-nav-el-active"
				});
    });
 })(jQuery);*/ 

/* ###### init slide mobile menu  ######*/
/* ###### bower i jQuery.mmenu  ######*/
/* ###### more  https://gist.github.com/fantazer/a35dfd0f7b8dea3b1cf6  ######*/
/*
	$("#my-menu").mmenu({
		extensions: ["effect-menu-slide", "effect-listitems-slide"] - for animation
	});
*/

$(document).ready(function(){

	/* ###### init EasyDropDown style for selects  ######*/
	/* ###### bower i easydropdown  ######*/
	/*<select class="dropdown"> add class (dropdown)
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
	</select>
	*/
	

	/* ###### init nice select style for selects  ######*/
	/* ###### bower i jquery-nice-select  ######*/
	/* ###### https://gist.github.com/fantazer/8eac81e51c93ee8ecbf21f400bff470d  ######*/
	/* $('select').niceSelect();*/
	/*<select >
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
	</select>
	*/

		/* ###### init datepicker  ######*/
		/* ###### bower i bootstrap-datepicker  ######*/
		/* ###### https://gist.github.com/fantazer/de1d6079f71350c32afbb5eb442f38db  ######*/
		/*$('.input-date').datepicker({
			language: 'ru'
		});
		//for close on select date
		$('.input-date').on('changeDate', function(ev){
		    $(this).datepicker('hide');
		});

*/


	/* ###### init RangeSLider  ######*/
	/* ###### bower i --save-dev nouislider  ######*/
	/* ###### https://gist.github.com/fantazer/2bdc4e6a63708e143718ffa7c32eae17  ######*/

	/*var slider = document.getElementById('rangeSlider'); //Элемент

	noUiSlider.create(slider, {
		start: [0, 100],
		connect: true,
		step: 10,
		range: {
			'min': 0,
			'max': 100,
		},
		pips: { // Show a scale with the slider
			mode: 'steps',
			density: 4
		}
	});*/


	/* ###### init bpopup  ######*/
	/* ###### bower i bpopup  ######*/
	// Add class hide
	// $('.section-main-form button').click(function(){
	//	$('.section-modal').bPopup({
	// 			closeClass:'section-modal-but',
	//			position:['auto','auto'], // position center
	//			follow: [true,false],
	// 	}); 
	//})


	/* ###### init stickUp  ######*/
	/* ###### bower i sticky  ######*/
	/*$("#sticker").sticky({topSpacing:0});*/


	/* ###### init OwlCarousel2  ######*/
	/*!!! add class owlCarousel !!!*/
	/* ###### bower i OwlCarousel2 ######*/
	$(".slider").owlCarousel({
	 	items : 1,
	 }); 
	//		.owl-next,
	//		.owl-prev
	//			position absolute
	//			top 50%
	//			margin-top -20px
	//			
	//		.owl-carousel
	//			position relative
	//		.owl-prev
	//			left -5%
	//		.owl-next
	//			right -5%
	//

	/* ###### init validate form  ######*/
	/* ###### bower i jquery-validation ######*/
	/*$('#myform').validate({
			rules:{ //правила для полей 
				name:{
					required:true,
					minlength:5 //минимальное значение поля
				},
				phone:{
					required:true,
					number:true
				}
			},
			messages:{
				name:{
					required: 'Это поле обязатлеьно для заполнения', //какое сообщение будет выводиться
					minlength:'Имя должно быть не меньше 5 символов'
				},
				phone:{
					required: 'Это поле обязатлеьно для заполнения',
					number:'Введите правильный телефон'
				},
				
			}
			submitHandler:function(){ //выполнять если все валидно
					alert('Форма заполнена правильно');
				}
	})*/

	/* ###### init animatedModal  ######*/
	/* ###### bower i animatedModal  ######*/
	// $(".play").animatedModal({
	//  	 animatedIn:'lightSpeedIn',
	//     animatedOut:'bounceOutDown',
	//     color:'#0394c7'
	//  	});

	/* ###### init responsive-tabs  ######*/
	/* ###### bower i responsive-tabs  ######*/
/*    $('#horizontalTab').responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: true,
        active: 0
        
    });*/

	/* ###### init fancybox  ######*/
	/* ###### bower i fancybox  ######*/
	// $(".play").fancybox();
	// a(href="img/item-house-1.png" rel="group-element(для объединения в группу)") - image in a
	//	img(src="img/item-house-1.png", alt="")
	
	/* ###### init scrollup  ######*/
	/* ###### bower i scrollup  ######*/
	/*http://www.jqueryscript.net/animation/Customizable-Back-To-Top-Button-with-jQuery-backTop.html*/
	// $('.write-review-arrow').backTop();
	
})
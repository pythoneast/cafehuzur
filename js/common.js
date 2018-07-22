$(document).ready(function() {

/*	$('.carousel').carousel({
     interval: false
    })
*/

	//button for opening mobile menu

	  $(".main_menu_button").click(function() {
    	$(".main_menu ul").slideToggle();
    	return false;
    });


	//fixed menu 

	// Options
	var options = {
	  offset: 500
	}

	// Create a new instance of Headhesive.js and pass in some options
	var header = new Headhesive('.header_shapka', options);


	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	
    /*$('.carousel').carousel({
      interval: 2000
    })*/

	/*//Каруселька
	


	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});*/

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Кнопка "Наверх".
    $(window).scroll(function(){
    	if ($(this).scrollTop() > 800) {
    		$('.up_button img').fadeIn();
    	} else {
    		$('.up_button img').fadeOut();
    	}
    });
 
    $('.up_button img').click(function(){
    	$("html, body").animate({ scrollTop: 0 }, 600);
    	return false;
    });
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
});
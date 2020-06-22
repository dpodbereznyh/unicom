$(document).ready(function () {
//Переключатель фонового изображения
    $('.toggle').click(function () {
        if ($('#toggle__input').is(':checked')) {
            $('.bg__dark').css('opacity', '1');
            $('.bg__light').css('opacity', '0');
            $('.toggle__sun').css('opacity', '0.5');
            $('.toggle__moon').css('opacity', '1');
        } else {
            $('.bg__dark').css('opacity', '0');
            $('.bg__light').css('opacity', '1');
            $('.toggle__sun').css('opacity', '1');
            $('.toggle__moon').css('opacity', '0.5');
        }
    });
// SmartMenus init
    $(function() {
        $('#main-menu').smartmenus({
            mainMenuSubOffsetX: -1,
            mainMenuSubOffsetY: 4,
            subMenusSubOffsetX: 6,
            subMenusSubOffsetY: -6
        });
    });

// SmartMenus mobile menu toggle button
    $(function() {
        var $mainMenuState = $('#main-menu-state');
        if ($mainMenuState.length) {
            // animate mobile menu
            $mainMenuState.change(function(e) {
                var $menu = $('#main-menu');
                if (this.checked) {
                    $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
                } else {
                    $menu.show().slideUp(250, function() { $menu.css('display', ''); });
                }
            });
            // hide mobile menu beforeunload
            $(window).bind('beforeunload unload', function() {
                if ($mainMenuState[0].checked) {
                    $mainMenuState[0].click();
                }
            });
        }
    });
// Popup
    $('.flat__result_item_link').on("click", function () {
        $('#popup-result').show();
    });
    $('.popup-result__close').on("click", function () {
        $('#popup-result').hide();
    });

//News Swiper Slider
    var myNewsSlider = new Swiper ('.news__slider_container', {
        slideClass: 'news__slide',
        wrapperClass: 'news__slider_wrapper',
        slidesPerView: 1,
        spaceBetween: 10,
        lazy: {
            loadPrevNext: true,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            440: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            960: {
                slidesPerView: 4,
                spaceBetween: 32
            }
        }
    });
//General View Swiper Thumbs
    var GeneralViewThumbs = new Swiper ('.general-view__thumbs_container', {
        slideClass: 'general-view__thumbs_slide',
        wrapperClass: 'general-view__thumbs_wrapper',
        slidesPerView: 3,
        spaceBetween: 5,
        lazy: {
            loadPrevNext: true,
        },
    });
//General View Swiper Slider
    var GeneralViewSlider = new Swiper ('.general-view__slider_container', {
        slideClass: 'general-view__slider_slide',
        wrapperClass: 'general-view__slider_wrapper',
        slidesPerView: 1,
        autoHeight: true,
        thumbs: {
            swiper: GeneralViewThumbs,
        },
        lazy: {
            loadPrevNext: true,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.general-view__slider_button-next',
            prevEl: '.general-view__slider_button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
//General View Swiper Slider
    var unfinishedHouseSlider = new Swiper ('.unfinished-house__slider_container', {
        slideClass: 'unfinished-house__slider_slide',
        wrapperClass: 'unfinished-house__slider_wrapper',
        slidesPerView: 1,
        autoHeight: true,
        lazy: {
            loadPrevNext: true,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.unfinished-house__slider_button-next',
            prevEl: '.unfinished-house__slider_button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

//Progress Build Slider
    var progressBuildSlider = new Swiper ('.progress-build__slider_container', {
        slideClass: 'progress-build__slider_slide',
        wrapperClass: 'progress-build__slider_wrapper',
        slidesPerView: 1,
        spaceBetween: 10,
        lazy: {
            loadPrevNext: true,
        },
        navigation: {
            nextEl: '.progress-build__slider-button-next',
            prevEl: '.progress-build__slider-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            577: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            993: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            1201: {
                slidesPerView: 4,
                spaceBetween: 32
            }
        }
    });
//Standard Design Slider
    var standardDesignSlider = new Swiper ('.standard-design__slider_container', {
        slideClass: 'standard-design__slider_slide',
        wrapperClass: 'standard-design__slider_wrapper',
        slidesPerView: 1,
        autoHeight: true,
        lazy: {
            loadPrevNext: true,
        },
        navigation: {
            nextEl: '.standard-design__slider-button-next',
            prevEl: '.standard-design__slider-button-prev',
        }
    });

//Banks Slider
    var banksSlider = new Swiper ('.bank__slider_container', {
        slideClass: 'bank__slider_slide',
        wrapperClass: 'bank__slider_wrapper',
        slidesPerView: 1,
        spaceBetween: 10,
        lazy: {
            loadPrevNext: true,
        },
        navigation: {
            nextEl: '.bank__slider-button-next',
            prevEl: '.bank__slider-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            577: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            993: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            1300: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });

//Objects Toggle
    $('.objects__select_item').click(function () {
        if ($('#objects__ready').is(':checked')){
            $('.objects__ready_list').css('display', 'block');
            $('.objects__build_list').css('display', 'none');
        } else {
            $('.objects__ready_list').css('display', 'none');
            $('.objects__build_list').css('display', 'block');
        }
    });
// Advanced Search Parameters

    $('.advanced-search__btn').click(function () {
        $('.advanced-search').toggleClass('d-none');

    });

// FAQ
    $('.faq__item_head').click(function () {
        $(this).next().slideToggle(300);
        if($(this).find('.faq__item_body').css('display')== 'none') {
            $(this).find('.faq__item_body').css('display', 'block');
        }
    });
    $('.faq__item_head').click(function () {
        $(this).find('.faq__item_question').toggleClass('faq__item_question-active');
        $(this).parent('.faq__item').toggleClass('faq__item-active');
    });
    $('.faq__item_title_up').click(function () {
        $(this).parent().slideToggle(300);
        if($(this).find('.faq__item_body').css('display')== 'block') {
            $(this).find('.faq__item_body').css('display', 'none');
        }
    });
    $('.faq__item_title_up').click(function () {
        $('.faq__item_question').removeClass('faq__item_question-active');
        $('.faq__item').removeClass('faq__item-active');
    });

// Vacancy
    $('.vacancy__item_head').click(function () {
        $(this).next().slideToggle(300);
        if($(this).find('.vacancy__item_body').css('display')== 'none') {
            $(this).find('.vacancy__item_body').css('display', 'block');
        }
    });
    $('.vacancy__item_head').click(function () {
        $(this).parent('.vacancy__item').toggleClass('vacancy__item-active');
        $(this).toggleClass('vacancy__item_head-active');
        $(this).find('.vacancy__item_title').toggleClass('vacancy__item_title-active');
    });
    $('.vacancy__item_title_up').click(function () {
        $(this).parent().slideToggle(300);
        if($(this).find('.vacancy__item_body').css('display')== 'block') {
            $(this).find('.vacancy__item_body').css('display', 'none');
        }
    });
    $('.vacancy__item_title_up').click(function () {
        $('.vacancy__item').removeClass('vacancy__item-active');
        $('.vacancy__item_head').removeClass('vacancy__item_head-active');
        $('.vacancy__item_title').removeClass('vacancy__item_title-active');
    });

    $('[data-fancybox="gallery"]').fancybox({
        thumbs : {
            autoStart : true
        }
    });

});



// Объявления
var msg = document.querySelector(".msg");
var gsapMsg = gsap.to(".msg", 0.25, {autoAlpha: 1,y: -40,ease: Expo.inOut, paused: true});
var arrInput = document.querySelectorAll('.aInput');

function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (valid) output = 'Адрес эл. почты введен правильно!';
    else output = 'Адрес электронной почты введен неправильно!';
    document.getElementById('message').innerHTML = output;
    return valid;
}

function ValidPhone() {
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    if (valid) output = 'Номер телефона введен правильно!';
    else output = 'Номер телефона введен неправильно!';
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
    return valid;
}
// Функция отправки сообщения
function send(event, php){
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    ValidPhone();
    ValidMail();
    for (var i = 0,count=arrInput.length; i<count; i++)
    {arrInput[i].classList.remove("errorInput");}
    event.target.querySelector("button").disabled = true;
    showMsg("Подождите. Идёт отправка сообщения", "#b1b1b1");
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
        event.target.querySelector("button").disabled = false;
        if (req.status >= 200 && req.status < 400) {
            json = JSON.parse(this.response); //internet explorer 11
            console.log(json);

            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
                // если сообщение отправлено
                showMsg("Сообщение успешно отправлено", "#36AE46");
                console.log("Сообщение отправлено");
                event.target.reset();
            } else if(json.result == "email") {
                // Если указан неверный email
                showMsg("Ошибка. Неверно указан Email", "#DC352F");
                console.log("Ошибка. Неверно указан Email");
                document.querySelector("#email").classList.add("inputerror");
            } else {
                // Если произошла ошибка
                showMsg("Ошибка. Сообщение не отправлено", "#DC352F");
                console.log("Ошибка. Сообщение не отправлено");
            }

            // Если не удалось связаться с php файлом
        } else {showMsg("Ошибка сервера. Номер: "+req.status, "#DC352F");}};

// Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {showMsg("Ошибка отправки запроса", "#DC352F");};
    req.send(new FormData(event.target));
}

// Функция появления статуса отправки сообщения
function showMsg(message, color) {
    msg.innerText = message;
    msg.style.background = color;
    gsapMsg.restart();
}



var apiTools = {};
apiTools.Cookie = {
	getCookie: function(name) {
        var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    },
    setCookie: function(key, value, expires) {
        document.cookie = key + "=" + value + "; path=/; expires=" + expires.toUTCString();
    }
};

/*
	Usage:
	
	add 'js-getFlatPlan' class;
	add "data-flat-id" attribute with value of backend resource ID.
*/
$(function() {
	$( document ).on('click', '.js-getFlatPlan', function( event ) {

        if ( this.tagName == 'A' ) {
            event.preventDefault();
        }

		if ( apiMediaCfg !== undefined ) {

			var id = this.dataset.flatId;
			if ( !id ) { return; }

			var data = {
				action: 'get/flatPlan',
				id: id
			};

			$.post({
				url: apiMediaCfg.actionUrl,
				data: data,
				cache: false,
				dataType: 'json',
				headers: {
					'XSRF-TOKEN': apiTools.Cookie.getCookie('XSRF-TOKEN')
				},
				success: function ( response ) {
					console.log( response );

					if ( response.data !== undefined && response.success ) {

						var data = response.data;

						if ( data.html ) {

							$.fancybox.open({
								'type': 'html',
								'src': data.html,
								'hash': 'flatPlan'
							});
													
						}

					}
				},
				error: function ( jqXHR, textStatus, errorThrown ) {
					console.log( jqXHR );
				}
			})
		}

	})
});
$(function() {
    $(document).on('change', '.js-choiceFlatBlockControl', function() {
        var radios = $('.js-choiceFlatBlockControl');
        var index = 0;

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                var index = radios[i].value;
                break;
            }
        }

        $('.js-choiceFlatBlock').hide();
        $('.js-choiceFlatBlock[data-index=' + index + ']').show();
    });
});
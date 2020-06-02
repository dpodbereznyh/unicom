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

//General View Swiper Slider
    var GeneralViewSlider = new Swiper ('.general-view__slider_container', {
        slideClass: 'general-view__slider_slide',
        wrapperClass: 'general-view__slider_wrapper',
        slidesPerView: 1,
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

// Отправка данных на сервер
    function send(event, php){
        console.log("Отправка запроса");
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        var req = new XMLHttpRequest();
        req.open('POST', php, true);
        req.onload = function() {
            if (req.status >= 200 && req.status < 400) {
                json = JSON.parse(this.response); // internet explorer 11
                console.log(json);

                // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
                if (json.result == "success") {
                    // Если сообщение отправлено
                    alert("Сообщение отправлено");
                } else {
                    // Если произошла ошибка
                    alert("Ошибка. Сообщение не отправлено");
                }
                // Если не удалось связаться с php файлом
            } else {alert("Ошибка сервера. Номер: "+req.status);}};

// Если не удалось отправить запрос. Стоит блок на хостинге
        req.onerror = function() {alert("Ошибка отправки запроса");};
        req.send(new FormData(event.target));
    }
});


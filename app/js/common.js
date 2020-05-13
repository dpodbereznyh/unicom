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
    })
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
});


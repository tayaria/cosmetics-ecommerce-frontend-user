(function ($) {
    'use strict';

    /*---------------------------------
    Commons Variables
    -----------------------------------*/
    var windows = $(window);

    /*----------------------------------
        Header Top Info
    -----------------------------------*/
    $(".add_cart_open").on('click', function () {
        $(".header-cart-deatils").slideToggle("slow");
    });
    $("#onclick-toogle-btn").on('click', function () {
        $("#toogle-search").slideToggle("fast");
    });

    $('.child-dropdown').niceSelect();


    /*----------------------------------
        Menu Sticky
    -----------------------------------*/
    var sticky = $('.header-sticky-area');

    windows.on('scroll', function () {
        var scroll = windows.scrollTop();
        if (scroll < 300) {
            sticky.removeClass('is-sticky');
        } else {
            sticky.addClass('is-sticky');
        }
    });

    /*----------------------------------
        Mobile Menu Active
    -----------------------------------*/

    $('.mobile-menu').slicknav({
        label: '<i class="fas fa-list-ul"></i>',
        prependTo: '.header-mobile-menu',
        brand: '<strong>MENU</strong>',
        closedSymbol: '<i class="fas fa-plus-circle"></i>',
        openedSymbol: '<i class="fas fa-minus-circle"></i>'

    });


    /*----------------------------------
        Hero Slider Active
    -----------------------------------*/
    $('.hero-slider-slide').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        nav: true,
        navText: [
            '<i class="ion-ios-arrow-left"></i>',
            '<i class="ion-ios-arrow-right"></i>'
        ],
        animateIn: "animate__animated animate__fadeIn",
        animateOut: "animate__animated animate__fadeOut",
        paginationSpeed: 4000,
        
        responsive: {

            
            0: {
                nav: false
            },
             992: {
                nav: true
            },
            
        }
    });



    /*----------------------------------
        Podlist Slider Active
    -----------------------------------*/
    $('.podlist-slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 3,
        adaptiveHeight: true,
        easing: 'linear',
        speed: 2000,
        responsive: [


            {
                breakpoint: 1200,
                settings: {

                    slidesToShow: 5
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*----------------------------
        Product Filter active
     ------------------------------ */
    $('.product-filter-area li a').on('click', function () {
        $('.product-filter-area li a').removeClass('active-catagory');
        $(this).addClass('active-catagory');
    });

    /*----------------------------------
        Product Catagory Active
    -----------------------------------*/
    $('.product-catagory-items').slick({
        arrows: true,
        infinite: false,
        slidesToShow: 5,
        rows: 2,
        slidesToScroll: 1,
        easing: 'linear',
        speed: 2000,
        prevArrow: '<button type="button" class="prevArrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button"  class="nextArrow"><i class="fas fa-chevron-right"></i></button>',
        responsive: [

            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 785,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    /*----------------------------------
        Testimonial Active
    -----------------------------------*/
    $('.testimonial-items--home-1 ,.testimonial-items--home-2').slick({
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        easing: 'linear',
        speed: 2000,
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    dots: false
                }
            }
        ]
    });

    $('.testimonial-items--home-4').slick({
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 2,
        easing: 'linear',
        speed: 2000,
        responsive: [

            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    autoplay: true
                }
            }

        ]
    });

    /*----------------------------------
        Complany Slider Active
    -----------------------------------*/
    $('.company-logos').slick({
        arrows: false,
        infinite: false,
        slidesToShow: 8,
        responsive: [

            {
                breakpoint: 1620,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 910,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    /*----------------------------------
        Quick View Gallery Slider Active
    -----------------------------------*/
    /*----------------------------------
            Quick View Image - vertical
        -----------------------------------*/
    $('.sync-lg-image__vertical').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.sync-thumb-image__vertical'
    });
    $('.sync-thumb-image__vertical').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.sync-lg-image__vertical',
        focusOnSelect: true,
        vertical: true,
        prevArrow: '<button type="button" class="prevArrow"><i class="fas fa-chevron-up"></i></button>',
        nextArrow: '<button type="button"  class="nextArrow"><i class="fas fa-chevron-down"></i></button>'
    });

    /*----------------------------------
        Quick View Image - horizontal
    -----------------------------------*/
    $('.sync-lg-image__horizontal').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.sync-thumb-image__horizontal',
    });
    $('.sync-thumb-image__horizontal').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.sync-lg-image__horizontal',
        focusOnSelect: true,
        prevArrow: '<button type="button" class="prevArrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button"  class="nextArrow"><i class="fas fa-chevron-right"></i></button>',
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    /*----------------------------------
        Quick View Image - Slide
    -----------------------------------*/
    $('.sync-lg-image__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="prevArrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button"  class="nextArrow"><i class="fas fa-chevron-right"></i></button>',
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*----------------------------------
    Modal  Quick View Image
    -----------------------------------*/
    $('.modal-sync-lg-image__horizontal').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.modal-sync-thumb-image__horizontal'
    });
    $('.modal-sync-thumb-image__horizontal').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.modal-sync-lg-image__horizontal',
        focusOnSelect: true,
        prevArrow: '<button type="button" class="prevArrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button"  class="nextArrow"><i class="fas fa-chevron-right"></i></button>'
    });

    $('.modal').on('shown.bs.modal', function (e) {
        $('.modal-sync-lg-image__horizontal, .modal-sync-thumb-image__horizontal').slick('setPosition');
        $('.modal-product-quick-view-image').addClass('open');
    });



    /*----------------------------------
        Product Catagory Active
    -----------------------------------*/
    $('.select-product-catagory-items').slick({
        arrows: true,
        infinite: false,
        slidesToShow: 5,
        rows: 1,
        slidesToScroll: 1,
        easing: 'linear',
        speed: 2000,
        prevArrow: '<button type="button" class="prevArrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button"  class="nextArrow"><i class="fas fa-chevron-right"></i></button>',
        responsive: [

            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 785,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*--------------------------------------------
       Product Sort BestSeller Mini Slider Active
    ----------------------------------------------*/
    $('.sort-slide').slick({
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        rows: 3,
        slidesToScroll: 1,
        easing: 'linear',
        speed: 2000,
        prevArrow: '<button type="button" class="prevArrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button"  class="nextArrow"><i class="fas fa-chevron-right"></i></button>',
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*------------------------------------------------------
    Homepage-2  Product Sort BestSeller Mini-2 Slider Active
    --------------------------------------------------------*/
    $('.sort-slide-2').slick({
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        rows: 1,
        slidesToScroll: 1,
        easing: 'linear',
        speed: 2000,
        prevArrow: '<button type="button" class="prevArrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button"  class="nextArrow"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    autoplay: false,
                    arrows: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    autoplay: false,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*------------------------------------------------------
    Homepage-2  Features Product Slider Active
    --------------------------------------------------------*/
    $('.sort-slide-3').slick({
        arrows: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        easing: 'linear',
        speed: 2000,
        prevArrow: '<button type="button" class="prevArrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button"  class="nextArrow"><i class="fas fa-chevron-right"></i></button>',
        responsive: [

            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },

             {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    arrows: false
                }
            }

            
        ]
    });

    /*------------------------------------------------------
    Homepage-2  Special Product Slider Active
    --------------------------------------------------------*/
    $('.sort-slide-4').slick({
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        easing: 'linear',
        speed: 2000,
        prevArrow: '<button type="button" class="prevArrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button"  class="nextArrow"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    autoplay: true,
                    arrows: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    autoplay: true,
                    arrows: true
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    autoplay: false,
                    arrows: true
                }
            },

            {
                breakpoint: 480,
                settings: {
                    autoplay: true,
                    arrows: false
                }
            }
            
        ]
    });
    /*------------------------------------------------------
    Homepage-2  New Product Slider Active
    --------------------------------------------------------*/
    $('.sort-slide-5').slick({
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 2,
        easing: 'linear',
        speed: 2000,
        prevArrow: '<button type="button" class="prevArrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button"  class="nextArrow"><i class="fas fa-chevron-right"></i></button>',
        responsive: [

            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 1,
                    rows: 2
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    rows: 1,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    rows: 2,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },

            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 1
                }
            },
            
            {
                breakpoint: 480,
                settings: {
                    autoplay: true,
                    arrows: false
                }
            },

        ]
    });
    /*------------------------------------------------------
    Homepage-2  Recent Blog Slider Active
    --------------------------------------------------------*/
    $('.sort-slide-6').slick({
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        easing: 'linear',
        speed: 2000,
        prevArrow: '<button type="button" class="prevArrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button"  class="nextArrow"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    autoplay: true,
                    arrows: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    autoplay: false,
                    arrows: true
                }
            }
        ]
        

    });
    /*------------------------------------------------------
    Homepage-3  Recent Blog Slider Active
    --------------------------------------------------------*/
    $('.dataTab-style2').slick({
        arrows: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        rows: 1,
        easing: 'linear',
        speed: 2000,
        prevArrow: '<button type="button" class="prevArrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button"  class="nextArrow"><i class="fas fa-chevron-right"></i></button>',
        responsive: [

            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    autoplay: true
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true
                }
            }
        ]
    });

    $('.sort-slide-8').slick({
        arrows: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        easing: 'linear',
        speed: 2000,
        prevArrow: '<button type="button" class="prevArrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button"  class="nextArrow"><i class="fas fa-chevron-right"></i></button>',
        responsive: [

            
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    autoplay: true
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true
                }
            }

            
        ]
    });
    /*------------------------------------------------------
    Homepage-3  Recent Blog Slider Active
    --------------------------------------------------------*/
    $('.sort-slide-7').slick({
        arrows: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 1,
        easing: 'linear',
        speed: 2000,
        prevArrow: '<button type="button" class="prevArrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button"  class="nextArrow"><i class="fas fa-chevron-right"></i></button>',
        responsive: [

            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    autoplay: true,
                    arrows: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    autoplay: false,
                    arrows: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    autoplay: false,
                    slidesToShow: 2
                }
            },


            {
                breakpoint: 480,
                settings: {
                    autoplay: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    /*------------------------------------------------------
    Homepage-4  Recent Blog Slider Active
    --------------------------------------------------------*/
    $('.half-select-product-catagory-items').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 3,
        rows: 1,
        slidesToScroll: 1,
        easing: 'linear',
        speed: 2000,
        prevArrow: '<button type="button" class="prevArrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button"  class="nextArrow"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }

        ]
    });

    /*----------------------------------
        Blog Slider Active
    -----------------------------------*/
    $('.blog-item__slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        rows: 0,
        easing: 'linear',
        speed: 2000,
        prevArrow: '<button type="button" class="prevArrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button"  class="nextArrow"><i class="fas fa-chevron-right"></i></button>'
    });


    /*------------------------------------------------------
    Checkout Page -  Shipping Form Toggle
    --------------------------------------------------------*/
    $('[data-shipping]').on('click', function () {
        if ($('[data-shipping]:checked').length > 0) {
            $('#shipping-address').slideDown();
        } else {
            $('#shipping-address').slideUp();
        }
    });

    $('[data-signup]').on('click', function () {
        if ($('[data-signup]:checked').length > 0) {
            $('#signup-form').slideDown();
        } else {
            $('#signup-form').slideUp();
        }
    });

    var checked = $('.payment_radio input:checked');
    if (checked) {
        $(checked).siblings('.payment-option-form').slideDown(500);
    }
    $('.payment_radio input').on('change', function () {
        $('.payment-option-form').slideUp(500);
        $(this).siblings('.payment-option-form').slideToggle(500);
    });


    /*----------------------------------
        Scroll To Top Active
    -----------------------------------*/
    $('body').materialScrollTop();




}(jQuery));

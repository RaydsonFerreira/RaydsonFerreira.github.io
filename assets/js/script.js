
$('.navigation div, .arrowDown, .menu-iconNav, .menu-arrowUp').on('click', function () {
    var destiny = '.' + $(this).data('destiny');
    var destinyPosition = $(destiny).position().top;
    $('html, body').stop().animate({
        scrollTop: destinyPosition
    }, 2000);
});

var offset = $('.spaced').offset().top;
var $menuNavigation = $('.menuNavigation');
$(document).on('scroll', function () {
    console.log(offset + " <= " + $(window).scrollTop());
    if (offset <= $(window).scrollTop()) {
        $menuNavigation.addClass('fixar');
    } else {
        $menuNavigation.removeClass('fixar');
    }
});

$(".iconNav1").hover(
    function(){
        $(".whoAm").addClass("onHoverNav"),
        $(".text1").addClass("textWho")
    },
    function(){
        $(".whoAm").removeClass("onHoverNav"),
        $(".text1").removeClass("textWho")
    }
);

$(".iconNav2").hover(
    function(){
        $(".hobbies").addClass("onHoverNav"),
        $(".text2").addClass("textHobbies")
    },
    function(){
        $(".hobbies").removeClass("onHoverNav"),
        $(".text2").removeClass("textHobbies")
    }
);

$(".iconNav3").hover(
    function(){
        $(".qualifications").addClass("onHoverNav"),
        $(".text3").addClass("textQualifications")
    },
    function(){
        $(".qualifications").removeClass("onHoverNav"),
        $(".text3").removeClass("textQualifications")
    }
);

$(".iconNav4").hover(
    function(){
        $(".experiences").addClass("onHoverNav"),
        $(".text4").addClass("textExperiences")
    },
    function(){
        $(".experiences").removeClass("onHoverNav"),
        $(".text4").removeClass("textExperiences")
    }
);

$("#basketball").hover(
    function(){
        $(".tooltip1").addClass("tooltipVisible")
    },
    function(){
        $(".tooltip1").removeClass("tooltipVisible")
    }
);

$("#theater").hover(
    function(){
        $(".tooltip2").addClass("tooltipVisible")
    },
    function(){
        $(".tooltip2").removeClass("tooltipVisible")
    }
);

$("#movie").hover(
    function(){
        $(".tooltip3").addClass("tooltipVisible")
    },
    function(){
        $(".tooltip3").removeClass("tooltipVisible")
    }
);

$("#netflix").hover(
    function(){
        $(".tooltip4").addClass("tooltipVisible")
    },
    function(){
        $(".tooltip4").removeClass("tooltipVisible")
    }
);

$("#churc").hover(
    function(){
        $(".tooltip5").addClass("tooltipVisible")
    },
    function(){
        $(".tooltip5").removeClass("tooltipVisible")
    }
);

$("#programming").hover(
    function(){
        $(".tooltip6").addClass("tooltipVisible")
    },
    function(){
        $(".tooltip6").removeClass("tooltipVisible")
    }
);

$(".menu-who").hover(
    function(){
        $(".who").addClass("menuNavigation"),
        $(".menu-text1").addClass("menu-t1")
    },
    function(){
        $(".who").removeClass("menuNavigation"),
        $(".menu-text1").removeClass("menu-t1")
    }
);

$(".menu-hob").hover(
    function(){
        $(".hob").addClass("menuNavigation"),
        $(".menu-text2").addClass("menu-t2")
    },
    function(){
        $(".hob").removeClass("menuNavigation"),
        $(".menu-text2").removeClass("menu-t2")
    }
);

$(".menu-xp").hover(
    function(){
        $(".xp").addClass("menuNavigation"),
        $(".menu-text4").addClass("menu-t4")
    },
    function(){
        $(".xp").removeClass("menuNavigation"),
        $(".menu-text4").removeClass("menu-t4")
    }
);

$(".menu-qua").hover(
    function(){
        $(".qua").addClass("menuNavigation"),
        $(".menu-text3").addClass("menu-t3")
    },
    function(){
        $(".qua").removeClass("menuNavigation"),
        $(".menu-text3").removeClass("menu-t3")
    }
);
var _windowWidth = $(window).width();

var carTimer;
carTimer = setInterval("carMove($('.car'))", 6);

function carMove(target) {
    var nowPosition = parseInt(target.css("left").replace("px", ""));
    (nowPosition >= _windowWidth) ? target.css("left", "-" + target.width() + "px"): target.css("left", (nowPosition + 1) + "px");
}

$(window).load(function() {
    $('.target').delay(300).scrollClass();
});

(function($) {
    $.fn.scrollClass = function(config) {
        var defaults = {};
        var config = $.extend(defaults, config);
        var target = this;

        function addAction() {
            var length = target.length;
            for (var i = 0; i < length; i++) {
                if (target.eq(i).hasClass('action')) continue;

                var in_position = target.eq(i).offset().top + 50;
                var window_bottom_position = $(window).scrollTop() + $(window).height();
                if (in_position < window_bottom_position) {
                    target.eq(i).addClass('action');
                }
            }
        }
        addAction();

        $(window).on('scroll', $.throttle(250, function() {
            addAction();
        }));
        return target;
    };

    var iframe = $('.widget iframe');
    var loader = $('.loader');
    iframe.on('load', function() {
        loader.hide(500).remove();
    });

    $('a.go-top').click(function(e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 0
        });
    });
})(jQuery);






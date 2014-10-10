function fadedEls(el, shift) {
    el.css('opacity', 0);

    switch (shift) {
        case undefined:
            shift = 0;
            break;
        case 'h':
            shift = el.eq(0).outerHeight();
            break;
        case 'h/2':
            shift = el.eq(0).outerHeight() / 2;
            break;
    }

    $(window).resize(function() {
        if (!el.hasClass('ani-processed')) {
            el.eq(0).data('scrollPos', el.eq(0).offset().top - $(window).height() + shift);
        }
    }).scroll(function() {
        if (!el.hasClass('ani-processed')) {
            if ($(window).scrollTop() >= el.eq(0).data('scrollPos')) {
                el.addClass('ani-processed');
                el.each(function(idx) {
                    $(this).delay(idx * 200).animate({
                        opacity : 1
                    }, 600);
                });
            }
        }
    });
}


        
(function($) {
    $(function() {
        // set size of header block to full screen height
        var height = window.innerHeight;
        if (height < 500)
          height = 500;
        $('.content-23 .holder').height(height);

   
        // Focus state for append/prepend inputs
        $('.input-prepend, .input-append').on('focus', 'input', function() {
            $(this).closest('.control-group, form').addClass('focus');
        }).on('blur', 'input', function() {
            $(this).closest('.control-group, form').removeClass('focus');
        });
        

        // Parallax
        $('.header-13-sub, .content-23.first').each(function() {
            if(! isMobile.any())
                $(this).parallax('50%', 0.3, true);
            else
                $(this).css('background-attachment', 'initial');
        });

        // Faded elements
        $('.features [class*="box-"], .content-9 .col-sm-5 img').each(function() {
            fadedEls($(this), 'h');
        });
      
        $(window).resize().scroll();

    });
})(jQuery);


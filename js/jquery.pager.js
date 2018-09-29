﻿/*
* jQuery pager_s plugin
* Version 1.0 (11/20/2010)
*/
(function($) {

    $.fn.pager_s = function(options) {

        var opts = $.extend({}, $.fn.pager_s.defaults, options);

        return this.each(function() {

        // empty out the destination element and then render out the pager_s with the supplied options
            $(this).empty().append(renderpager_s(parseInt(options.pagenumber), parseInt(options.pagecount), options.buttonClickCallback));
            
            // specify correct cursor activity
            $('.pages li').mouseover(function() { document.body.style.cursor = "pointer"; }).mouseout(function() { document.body.style.cursor = "auto"; });
        });
    };

    // render and return the pager_s with the supplied options
    function renderpager_s(pagenumber, pagecount, buttonClickCallback) {

        // setup $pager_s to hold render
        var $pager_s = $('<ul class="pages"></ul>');

        // add in the previous and next buttons
        $pager_s.append(renderButton('首页', pagenumber, pagecount, buttonClickCallback)).append(renderButton('.', pagenumber, pagecount, buttonClickCallback));

        // pager_s currently only handles 10 viewable pages ( could be easily parameterized, maybe in next version ) so handle edge cases
        var startPoint = 1;
        var endPoint = 5;

        if (pagenumber >= 5) {
            startPoint = pagenumber - 2;
            endPoint = pagenumber + 2;
        }

        if (endPoint > pagecount) {
            startPoint = pagecount - 4;
            endPoint = pagecount;
        }

        if (startPoint < 1) {
            startPoint = 1;
        }

        // loop thru visible pages and render buttons
        for (var page = startPoint; page <= endPoint; page++) {

            var currentButton = $('<li class="page-number">' + (page) + '</li>');

            page == pagenumber ? currentButton.addClass('pgCurrent') : currentButton.click(function() { buttonClickCallback(this.firstChild.data); });
            currentButton.appendTo($pager_s);
        }

        // render in the next and 末页 buttons before returning the whole rendered control back.
        $pager_s.append(renderButton('', pagenumber, pagecount, buttonClickCallback)).append(renderButton('末页', pagenumber, pagecount, buttonClickCallback));

        return $pager_s;
    }

    // renders and returns a 'specialized' button, ie 'next', 'previous' etc. rather than a page number button
    function renderButton(buttonLabel, pagenumber, pagecount, buttonClickCallback) {

        var $Button = $('<li class="pgNext">' + buttonLabel + '</li>');

        var destPage = 1;

        // work out destination page for required button type
        switch (buttonLabel) {
            case "首页":
                destPage = 1;
                break;
            case ".":
                destPage = pagenumber - 1;
                break;
            case "":
                destPage = pagenumber + 1;
                break;
            case "末页":
                destPage = pagecount;
                break;
        }

        // disable and 'grey' out buttons if not needed.
        if (buttonLabel == "首页" || buttonLabel == ".") {
            pagenumber <= 1 ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage); });
        }
        else {
            pagenumber >= pagecount ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage); });
        }

        return $Button;
    }

    // pager_s defaults. hardly worth bothering with in this case but used as placeholder for expansion in the next version
    $.fn.pager_s.defaults = {
        pagenumber: 1,
        pagecount: 1
    };

})(jQuery);






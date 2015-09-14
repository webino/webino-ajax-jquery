(function ($) {

    var WebinoAjax = {
        updateFragments: (function () {
            var func = function (fragments) {
                $.each(fragments, function(selector, code) {
                    var el = $(selector);
                    el.webinoAjaxUpdate(code);

                    // TODO fire an event

                    $(selector).trigger('replace');

                    // TODO fire an event
                });
            };

            func.default = function (code) {
                this.diffHTML(code);
            };

            func.append = function (code) {
                this.append($.parseHTML(code)[0].innerHTML);
            };

            return func;
        })()
    };

    $.fn.webinoAjaxUpdate = function (code) {
        var method = this.attr('data-webino-ajax-fragment');
        WebinoAjax.updateFragments[method ? method : 'default'].bind(this)(code);
    };

    $.fn.ajaxify = function(options) {
        if ($.fn.ajaxify.lock) {
            return false;
        }
        $.fn.ajaxify.lock = true;


        var elm = this;
        var defaults = {
            url: elm.attr('href'),
            before: null,
            after: null,
            always: null
        };

        var _options = $.extend(defaults, options);
        _options.before && _options.before.bind(elm)();

        $.getJSON(
            _options.url,
            function(json) {
                $.fn.ajaxify.lock = false;
                json.fragments && WebinoAjax.updateFragments(json.fragments);
                _options.after && _options.after.bind(elm)(json);
            }
        ).always(function() {
            $.fn.ajaxify.lock = false;
            _options.always && _options.always.bind(elm)();
        });

        return false;
    };

    $(function () {
        $(document).on('click', 'a.ajax[href],.ajax a', function (event) {
            event.preventDefault();

            $(this).ajaxify({
                //url: '',
                before: function () {
                    this.blur();
                },
                after: function () {

                }
            });
        });
    });

})(jQuery);

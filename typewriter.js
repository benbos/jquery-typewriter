(function ( $ ) {
        
    $.fn.typewriter = function ( options ) {

        var settings = {
            callback: null,
            speed: 40
        };

        if (options) $.extend(settings, options);

        // var isTag,
        //  text;

        $.each(this,function () {
            
            typeElm($(this));
            
        });
        
        function typeElm(elm) {

            var str = elm.html(),
                i = 0,
                isTag,
                text;

           (function type() {

                text = str.slice(0, ++i);

                elm.html(text);

                if (text === str) return;

                var char = text.slice(-1);

                if( char === '<' ) isTag = true;
                if( char === '>' ) isTag = false;

                if (isTag) return type();

                //Math.random()

                setTimeout(type, settings.speed);

            }());
        }

        
    }

})(jQuery);
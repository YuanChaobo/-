(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                // if(clientWidth>1000){
                //     docEl.style.fontSize = '100px';
                // }else{
                    docEl.style.fontSize = 154.5893719806763 * (clientWidth / 640) + 'px';
                // }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
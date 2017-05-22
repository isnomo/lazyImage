function lazyImage(options) {
    var lazyImages = [],
        delayTime = options.delayTime || 300,
        selector = options.selector || 'lazyimg',
        dataAtt = options.dataAtt || 'data-lazysrc',
        offsetScroll = options.offsetScroll || 100;
    loadImage();
    window.addEventListener('scroll', delayScroll, false);
    function delayScroll() {
        clearTimeout(delay);
        var delay = setTimeout(function () {
            loadImage();
        }, delayTime);
    }
    function loadImage() {
        var images = document.getElementsByClassName(selector);
        for(var i =0;i<images.length;i++){
            lazyImages.push(images[i]);
        }
        for (var i = lazyImages.length - 1; i >= 0; i--) {
            var el = lazyImages[i];
            if (isShow(el)) {
                el.src = el.getAttribute(dataAtt);
                lazyImages.splice(i, 1);
            }
        }
    }
    function isShow(el) {
        return el.getBoundingClientRect().top <  (document.body.scrollTop + ( window.innerHeight || document.documentElement.clientHeight ) + offsetScroll );
    }
}
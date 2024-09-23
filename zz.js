//Muat skrip Clicky secara asinkron
(function() {
    var clickyScript = document.createElement('script');
    clickyScript.async = true;
    clickyScript.setAttribute('data-id', '101465411');
    clickyScript.src = '//static.getclicky.com/js';
    document.head.appendChild(clickyScript);
})();
window.addEventListener('load', function() {
    var timeout = setTimeout(function() {
        window.location.href = "https://id.infoall.ai";
    }, 1000);
    function checkClickyLoaded() {
        if (typeof clicky !== 'undefined') {
            clearTimeout(timeout);
            window.location.href = "https://id.infoall.ai";
        } else {
            setTimeout(checkClickyLoaded, 100);
        }
    }
    checkClickyLoaded();
});

(function() {
    var script = document.createElement('script');
    script.async = true;
    script.src = '//static.getclicky.com/js';
    script.setAttribute('data-id', '101465411');
    document.head.appendChild(script);

    var timeout = setTimeout(redirect, 1000);

    function redirect() {
        clearTimeout(timeout);
        script.onload = null;
        window.location.href = "https://id.infoall.ai";
    }

    script.onload = redirect;
})();
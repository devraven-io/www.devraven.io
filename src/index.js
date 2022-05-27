require('./sass/styles.scss');
const CookiesEuBanner = require('cookies-eu-banner');

window.onload = function() {
    document.getElementById('navbar-burger').onclick = function() {
        document.getElementById('navbar-end').classList.toggle('is-hidden-touch');
    }

    console.log(CookiesEuBanner);
    
    new CookiesEuBanner(function () {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.googletagmanager.com/gtag/js?id=G-CLPNFR3HQF','gtag');

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-CLPNFR3HQF', {
            'cookie_domain': 'www.devraven.io'
        });        
    }, true);
};


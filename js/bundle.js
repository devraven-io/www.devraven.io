/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e={473:(e,t)=>{var o,n,i;!function(a,s,r){"use strict";n=[],void 0===(i="function"==typeof(o=function(){var e,t=window.document;return(e=function(t,o,n,i){if(!(this instanceof e))return new e(t);this.cookieTimeout=33696e6,this.bots=/bot|crawler|spider|crawling/i,this.cookieName="hasConsent",this.trackingCookiesNames=["__utma","__utmb","__utmc","__utmt","__utmv","__utmz","_ga","_gat","_gid"],this.launchFunction=t,this.waitAccept=o||!1,this.useLocalStorage=n||!1,this.init()}).prototype={init:function(){var e=this.bots.test(navigator.userAgent),t=navigator.doNotTrack||navigator.msDoNotTrack||window.doNotTrack;return e||!(null==t||t&&"yes"!==t&&1!==t&&"1"!==t)||!1===this.hasConsent()?(this.removeBanner(0),!1):!0===this.hasConsent()?(this.launchFunction(),!0):(this.showBanner(),void(this.waitAccept||this.setConsent(!0)))},showBanner:function(){var e=this,o=t.getElementById.bind(t),n=o("cookies-eu-banner"),i=o("cookies-eu-reject"),a=o("cookies-eu-accept"),s=o("cookies-eu-more"),r=void 0===n.dataset.waitRemove?0:parseInt(n.dataset.waitRemove),c=this.addClickListener,u=e.removeBanner.bind(e,r);n.style.display="block",s&&c(s,(function(){e.deleteCookie(e.cookieName)})),a&&c(a,(function(){u(),e.setConsent(!0),e.launchFunction()})),i&&c(i,(function(){u(),e.setConsent(!1),e.trackingCookiesNames.map(e.deleteCookie)}))},setConsent:function(e){if(this.useLocalStorage)return localStorage.setItem(this.cookieName,e);this.setCookie(this.cookieName,e)},hasConsent:function(){var e=this.cookieName,o=function(o){return t.cookie.indexOf(e+"="+o)>-1||localStorage.getItem(e)===o};return!!o("true")||!o("false")&&null},setCookie:function(e,o){var n=new Date;n.setTime(n.getTime()+this.cookieTimeout),t.cookie=e+"="+o+";expires="+n.toGMTString()+";path=/"},deleteCookie:function(e){var o=t.location.hostname.replace(/^www\./,""),n="; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/";t.cookie=e+"=; domain=."+o+n,t.cookie=e+"="+n},addClickListener:function(e,t){if(e.attachEvent)return e.attachEvent("onclick",t);e.addEventListener("click",t)},removeBanner:function(e){setTimeout((function(){var e=t.getElementById("cookies-eu-banner");e&&e.parentNode&&e.parentNode.removeChild(e)}),e)}},e})?o.apply(t,n):o)||(e.exports=i)}(window)},794:(e,t,o)=>{"use strict";o.r(t)}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{o(794);const e=o(473);window.onload=function(){document.getElementById("navbar-burger").onclick=function(){document.getElementById("navbar-end").classList.toggle("is-hidden-touch")},new e((function(){var e,t,o,n,i,a;function s(){dataLayer.push(arguments)}e=window,t=document,o="script",n="gtag",e.GoogleAnalyticsObject=n,e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)},e[n].l=1*new Date,i=t.createElement(o),a=t.getElementsByTagName(o)[0],i.async=1,i.src="//www.googletagmanager.com/gtag/js?id=G-CLPNFR3HQF",a.parentNode.insertBefore(i,a),window.dataLayer=window.dataLayer||[],s("js",new Date),s("config","G-CLPNFR3HQF",{cookie_domain:"www.devraven.io"})}),!0)}})()})();
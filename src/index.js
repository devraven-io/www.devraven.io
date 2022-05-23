require('./sass/styles.scss');


window.onload = function() {
    document.getElementById('navbar-burger').onclick = function() {
        document.getElementById('navbar-end').classList.toggle('is-hidden-touch');
    }
};


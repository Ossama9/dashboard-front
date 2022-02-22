$(document).ready(function () {
    const body = $('body');
    const sidebar = $('nav');
    const toggle = $('.toggle');
    const searchBtn = $('.search-box');
    const modeSwitch = $('.toggle-switch');
    const modeText = $('.mode-text');


    toggle.click(function () {
        sidebar.toggleClass("close");
    });

    searchBtn.click(function () {
        sidebar.removeClass("close");
    })

    modeSwitch.click(function () {
        body.toggleClass("dark");

        if (body.hasClass("dark")) {
            modeText.html("Light mode");
        } else {
            modeText.html("Dark mode");
        }
    });
})
window.addClickAwayListener = function (dotNetHelper, methodName) {
    window.clickAwayHandler = function (event) {
        const dropdown = document.querySelector('.uk-custom-select');
        if (dropdown && !dropdown.contains(event.target)) {
            dotNetHelper.invokeMethodAsync(methodName);
        }
    };
    
    document.addEventListener('click', window.clickAwayHandler);
};

window.removeClickAwayListener = function () {
    if (window.clickAwayHandler) {
        document.removeEventListener('click', window.clickAwayHandler);
    }
};
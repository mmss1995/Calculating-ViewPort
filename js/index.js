$(document).ready(() => {
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const sizes = "W : " + vw + "px - H : " + vh + "px";
    //$(".js-viewport").append("W : " + vw +"px - H : " + vh + "px");
    var infoViewPort = $("<div class='js-viewport'> Viewport for this device is: " + sizes + "</div>");
    $("body").append(infoViewPort);
});
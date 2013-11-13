function resize(tamanho) {
    var h = $(window).height();
    if ($(document).height() > $(window).height()) {
        $('#footer').css('bottom', 0);
    }
    else {
        $('#footer').css('bottom', tamanho);
    }
}
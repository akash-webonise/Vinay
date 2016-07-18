
var _dropdown = function(){
    $('.accordianData').hide();

    $('.accordianHeader .accordianBtn').click(function(){
    $(this).toggleClass('active')
    $(this).parents('.accordianHeader').next('.accordianData').stop().slideToggle();
    return false;
    });
}


$(document).ready(function(){
    _dropdown();
});

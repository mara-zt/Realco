$(function ()
{
    
    $('.preheader__close').on('click', function () {
       $('.preheader').toggleClass('preheader--haden')
    })
    $('.header__mobile__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--activ')
     })

}); 
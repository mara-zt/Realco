$(function ()
{
    
    $('.preheader__close').on('click', function () {
       $('.preheader').toggleClass('preheader--haden')
    })
    $('.header__mobile__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--activ')
    })
    $('.Pages').on('click', function () {
      $('.Pages--ul').toggleClass('Pages--ul--activ')
    })
    $('.CMS_Pages').on('click', function () {
      $('.CMS_Pages--ul').toggleClass('CMS_Pages--ul--activ')
    })
    $('.Utility_Pages').on('click', function () {
      $('.Utility_Pages--ul').toggleClass('Utility_Pages--ul--activ')
   })

   
}); 
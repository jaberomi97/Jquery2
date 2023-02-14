$(function () {
    //window scroll event
   $(window).on('scroll' , function () {
    var scrollsize = $(window).scrollTop( )
    //show/hide bar

    if (scrollsize > 500) {
        $('#backtotop').slideDown()
    } else {
        $('#backtotop').slideUp()
    }
//menu fixed
     if (scrollsize > 50) {
        $('#menu').addClass('active')
     } else {
        $('#menu').removeClass('active')
     }
   })

   $('#backtotop').on('click' , function () {
    $('html , body').animate( {
       scrollTop: 0,
    } ,1500)
   })


    $('.slider').slick({
      autoplaySpeed: 5000,
      slidesToshow: 2,
      
    })
 });

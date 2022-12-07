(function( $ ) {
    $(document).on('click','.menu-toggle',function(){
        $ (this).next('.main-navigation').slideToggle('slow');
        $(".main-navigation").css("display",'grid');
    });
  })( jQuery );
(function( $ ) {
  $('.menu-toggle').click( function () {
      $ (this).next('.main-navigation').slideToggle('slow');
  });  
})( jQuery );
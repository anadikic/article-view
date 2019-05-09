$( document ).ready(function() {
    $( ".title-body .container h1.first" ).animate({
        opacity: 1
      }, 1500 );
      $( ".title-body .container h1.second" ).animate({
        opacity: 1
    }, 1500 );
    $( "#hiring" ).animate({
        opacity: 1
    }, 1500 );

      $( ".title-body .container h1.first" ).css('transform','translateY(0)');
      $( ".title-body .container h1.second" ).css('transform','translateY(0)');
      $( "#hiring" ).css('transform','translateY(0)');
  });


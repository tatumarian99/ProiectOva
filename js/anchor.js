
   $(function() {
    $('a[href="#statiuni"]').click(function(e) {
      e.preventDefault();
      var targetOffset = $('a[name="statiuni"]').offset().top;
      $('body').animate(
        {scrollTop: targetOffset},
        1000

        );

    });

   });

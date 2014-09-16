$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $("#line").on("click", function(event){
    var allDancers = $('.dancer, .danceDynamite, .danceTroll, .squareDancer');
    allDancers.toggleClass('lineUp');
  });

  $(document.body).on('mouseover', '.danceTroll', function() {
    var x = $("body").width() * Math.random();
    var y = $("body").height() * Math.random();
    $(this).css({'left': x, 'top': y})
    distanceChecker();
  });

  var distanceChecker = function(){
    var $allTrolls = $('.danceTroll');
    var $allNap = $('.danceDynamite');
    $.each($allTrolls, function(trollIndex, trollValue){
      var trollHeight = parseInt($(trollValue).css('top'));
      var trollWidth = parseInt($(trollValue).css('left'));

      $.each($allNap, function(napIndex, napValue){
        var napHeight = parseInt($(napValue).css('top'));
        var napWidth = parseInt($(napValue).css('left'));

        var squareHeight =  Math.pow((trollHeight - napHeight), 2);
        var squareWidth =  Math.pow((trollHeight - napHeight), 2);
        var distance = Math.sqrt(squareHeight+squareWidth);

        if(distance < 50){
          $(napValue).removeClass('danceDynamite').addClass('danceTroll');
        }
      })
    })
  }

});


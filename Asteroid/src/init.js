$(document).ready(function(){
  var x = Math.random()*$('body').width();
  var y = Math.random()*$('body').height();
  // debugger;
  var rock = new Asteroid(x, y, 'asteroidLarge');
  var ship = new SpaceShip('100px', '200px', 'spaceShip');
  $(document.body).append(rock.$node);
  $(document.body).append(ship.$node);
  $(document.body).keydown(function(e){
    switch(e.which){
      case 37: //click left
        ship.direction -= 15;
        console.log(ship.direction)
        $(ship.$node).css('transform', 'rotate('+ship.direction+'deg)');
        break;

        break;
      case 38: //click up
// change top and left positions
console.log("up")
      var initialX = parseInt($(ship.$node).css('left'));
      var initialY = parseInt($(ship.$node).css('top'));

      console.log("initial x "+initialX);
      console.log("initial y "+initialY)
      console.log(ship.direction)
      var newX = (initialX + (30 * Math.cos(Math.PI * ship.direction / 180)))+'px';
      var newY = (initialY + (30 * Math.sin(Math.PI * ship.direction / 180)))+'px';
      console.log(Math.cos(Math.PI * ship.direction / 180))
      console.log("NewX, NewY "+newX, newY)
        $(ship.$node).css({'top': newY, 'left': newX});


        break;
      case 39: //click right
      console.log('right');
        ship.direction += 15;
        $(ship.$node).css('transform', 'rotate('+ship.direction+'deg)');
        console.log(ship.direction)
        break;

      case 32: //spacebar
        console.log('space');
        var x = $(ship.$node).css('left');
        var y = $(ship.$node).css('top');

        var laser = new Laser(y, x, 'laser');

        $(laser.$node).appendTo(ship.$node).animate({'top': '0px', 'left': '2000px'}, 500, 'linear');

        console.log($(laser.$node))
        break;
    }
  });


});


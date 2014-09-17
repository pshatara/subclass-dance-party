var Laser = function(top, left, className){
  // debugger;
  this.setPosition = function(){return true};
  Physics.call(this, top, left, className);
  $(this.$node).addClass(className)
  // this.direction = direction;
  $(this.$node).css('transform', 'rotate('+this.direction+'deg)');

}
Laser.prototype = Object.create(Physics.prototype);
Laser.prototype.constructor = Laser;

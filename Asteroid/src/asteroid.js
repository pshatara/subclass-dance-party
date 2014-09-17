var Asteroid = function(top, left, className){
  Physics.call(this, top, left, className);
  this.size = 4;
  $(this.$node).addClass(className)
}
Asteroid.prototype = Object.create(Physics.prototype);
Asteroid.prototype.constructor = Asteroid;
Asteroid.prototype.break = function(size){

}

var SpaceShip = function(top, left, className){
  // debugger;
  Physics.call(this, top, left, className);
  $(this.$node).addClass(className)

}
SpaceShip.prototype = Object.create(Physics.prototype);
SpaceShip.prototype.constructor = SpaceShip;

// SpaceShip.prototype.turnLeft = function(){
//   this.$node.rotateZ(-30deg)
// }
// SpaceShip.prototype.turnRight = function(){
//   $(this.$node).rotateZ(30deg);
// }

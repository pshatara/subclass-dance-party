var DanceDynamite = function(top, left, timeBetweenSteps){
  MakeDancer4.call(this, top, left, timeBetweenSteps);
};

DanceDynamite.prototype = Object.create(MakeDancer4.prototype);
DanceDynamite.prototype.constructor = DanceDynamite;

DanceDynamite.prototype.step = function(){
  MakeDancer4.prototype.step.call(this);
  this.$node.toggle();
};

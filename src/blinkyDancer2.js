var MakeSquareDancer = function(top, left, timeBetweenSteps){
  MakeDancer2.call(this, top, left, timeBetweenSteps);
};

MakeSquareDancer.prototype = Object.create(MakeDancer2.prototype);
MakeSquareDancer.prototype.constructor = MakeSquareDancer;

MakeSquareDancer.prototype.step = function(){
  MakeDancer2.prototype.step.call(this);
  this.$node.toggle();
};

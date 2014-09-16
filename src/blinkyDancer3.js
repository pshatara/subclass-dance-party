var DanceTroll = function(top, left, timeBetweenSteps){
  MakeDancer3.call(this, top, left, timeBetweenSteps);
};

DanceTroll.prototype = Object.create(MakeDancer3.prototype);
DanceTroll.prototype.constructor = DanceTroll;

DanceTroll.prototype.step = function(){
  MakeDancer3.prototype.step.call(this);
  this.$node.toggle();
};

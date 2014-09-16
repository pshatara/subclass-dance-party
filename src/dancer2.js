var MakeDancer2 = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="squareDancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  // this.step();
  this.setPosition(top, left);
};

MakeDancer2.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}

MakeDancer2.prototype.setPosition = function(top, left){
  this.$node.css({top: top, left: left});
};

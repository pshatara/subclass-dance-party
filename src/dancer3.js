var MakeDancer3 = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="danceTroll"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
};

MakeDancer3.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}

MakeDancer3.prototype.setPosition = function(top, left){
  this.$node.css({top: top, left: left});
};

var MakeDancer4 = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="danceDynamite"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
};

MakeDancer4.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}

MakeDancer4.prototype.setPosition = function(top, left){
  this.$node.css({top: top, left: left});
};

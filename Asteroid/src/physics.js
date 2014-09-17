var Physics = function(top, left, className){
  this.$node = $('<span class="physics"></span>');
  this.setPosition(top, left);
};

Physics.prototype.speed = function(){

}
Physics.prototype.direction = 0;

Physics.prototype.setPosition = function(top, left){
  // debugger;
  this.$node.css({'top': top, 'left': left});
};

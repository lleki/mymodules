
var list = [];

var sorted = function(){
    list.sort(function(a, b) {
      return a - b;
    });
    return list;
  }

module.exports = {

  takeNumber: function(num) {
    list.push(num);
  },
  sorted
};

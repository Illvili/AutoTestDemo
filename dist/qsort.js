(function() {
  var qsort;

  qsort = function(arr) {
    var great, i, less, pivot, _i, _ref;
    if ("object" !== typeof arr || !(arr instanceof Array)) {
      throw new TypeError("arr should be an array");
    }
    if (arr.length <= 1) {
      return arr;
    }
    pivot = arr[0];
    less = [];
    great = [];
    for (i = _i = 1, _ref = arr.length; 1 <= _ref ? _i < _ref : _i > _ref; i = 1 <= _ref ? ++_i : --_i) {
      (arr[i] <= pivot ? less : great).push(arr[i]);
    }
    less = arguments.callee(less);
    great = arguments.callee(great);
    less.push(pivot);
    Array.prototype.push.apply(less, great);
    return less;
  };

  window.qsort = qsort;

}).call(this);

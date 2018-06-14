"use strict";

var _require = require('lodash'),
    isFunction = _require.isFunction;

var compile = require('./compile');

var Transformer =
/*#__PURE__*/
function () {
  function Transformer(cmd, name, fnOrDef) {
    this.cmd = cmd;
    this.name = name;
    var fn = isFunction(fnOrDef) ? fnOrDef : compile(fnOrDef);
    this.fn = fn;
  }

  var _proto = Transformer.prototype;

  _proto.transform = function transform(input) {
    return this.fn(input);
  };

  return Transformer;
}();

module.exports = Transformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm1lcnMvVHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImlzRnVuY3Rpb24iLCJjb21waWxlIiwiVHJhbnNmb3JtZXIiLCJjbWQiLCJuYW1lIiwiZm5PckRlZiIsImZuIiwidHJhbnNmb3JtIiwiaW5wdXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztlQUF1QkEsUUFBUSxRQUFSLEM7SUFBZkMsVSxZQUFBQSxVOztBQUNSLElBQU1DLFVBQVVGLFFBQVEsV0FBUixDQUFoQjs7SUFFTUcsVzs7O0FBQ0YsdUJBQVlDLEdBQVosRUFBaUJDLElBQWpCLEVBQXVCQyxPQUF2QixFQUFnQztBQUM1QixTQUFLRixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxRQUFNRSxLQUFLTixXQUFXSyxPQUFYLElBQXNCQSxPQUF0QixHQUFnQ0osUUFBUUksT0FBUixDQUEzQztBQUNBLFNBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUNIOzs7O1NBRURDLFMsc0JBQVVDLEssRUFBTztBQUNiLFdBQU8sS0FBS0YsRUFBTCxDQUFRRSxLQUFSLENBQVA7QUFDSCxHOzs7OztBQUdMQyxPQUFPQyxPQUFQLEdBQWlCUixXQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgaXNGdW5jdGlvbiB9ID0gcmVxdWlyZSgnbG9kYXNoJyk7XHJcbmNvbnN0IGNvbXBpbGUgPSByZXF1aXJlKCcuL2NvbXBpbGUnKTtcclxuXHJcbmNsYXNzIFRyYW5zZm9ybWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNtZCwgbmFtZSwgZm5PckRlZikge1xyXG4gICAgICAgIHRoaXMuY21kID0gY21kO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgY29uc3QgZm4gPSBpc0Z1bmN0aW9uKGZuT3JEZWYpID8gZm5PckRlZiA6IGNvbXBpbGUoZm5PckRlZik7XHJcbiAgICAgICAgdGhpcy5mbiA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybShpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZuKGlucHV0KTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc2Zvcm1lcjtcclxuIl19
var aggregation = (baseClass, ...mixins) => {
    let base = class _Combined extends baseClass {
        constructor (...args) {
            super(...args)
            mixins.forEach((mixin) => {
                mixin.prototype.initializer.call(this)
            })
        }
    }
    let copyProps = (target, source) => {
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
                if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                    return
                Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
            })
    }
    mixins.forEach((mixin) => {
        copyProps(base.prototype, mixin.prototype)
        copyProps(base, mixin)
    })
    return base
}

class Colored {
    initializer ()     { this._color = "white" }
    get color ()       { return this._color }
    set color (v)      { this._color = v }
}

class ZCoord {
    initializer ()     { this._z = 0 }
    get z ()           { return this._z }
    set z (v)          { this._z = v }
}

class Shape {
    constructor (x, y) { this._x = x; this._y = y }
    get x ()           { return this._x }
    set x (v)          { this._x = v }
    get y ()           { return this._y }
    set y (v)          { this._y = v }
}

class Rectangle extends aggregation(Shape, Colored, ZCoord) {}

var rect = new Rectangle(7, 42)
rect.z     = 1000
rect.color = "red"
console.log(rect.x, rect.y, rect.z, rect.color)


/**
 * Es5
 * @param baseClass
 * @param mixins
 * @returns {base}
 */
var aggregation = function (baseClass, mixins) {
    var base = function () {
        baseClass.apply(this, arguments);
        mixins.forEach(function (mixin) {
            mixin.prototype.initializer.call(this);
        }.bind(this));
    };
    base.prototype = Object.create(baseClass.prototype);
    base.prototype.constructor = base;
    var copyProps = function (target, source) {
        Object.getOwnPropertyNames(source).forEach(function (prop) {
            if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                return
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
        })
    }
    mixins.forEach(function (mixin) {
        copyProps(base.prototype, mixin.prototype);
        copyProps(base, mixin);
    });
    return base;
};

var Colored = function () {};
Colored.prototype = {
    initializer: function ()  { this._color = "white"; },
    getColor:    function ()  { return this._color; },
    setColor:    function (v) { this._color = v; }
};

var ZCoord = function () {};
ZCoord.prototype = {
    initializer: function ()  { this._z = 0; },
    getZ:        function ()  { return this._z; },
    setZ:        function (v) { this._z = v; }
};

var Shape = function (x, y) {
    this._x = x; this._y = y;
};
Shape.prototype = {
    getX: function ()  { return this._x; },
    setX: function (v) { this._x = v; },
    getY: function ()  { return this._y; },
    setY: function (v) { this._y = v; }
}

var _Combined = aggregation(Shape, [ Colored, ZCoord ]);
var Rectangle = function (x, y) {
    _Combined.call(this, x, y);
};
Rectangle.prototype = Object.create(_Combined.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle(7, 42);
rect.setZ(1000);
rect.setColor("red");
console.log(rect.getX(), rect.getY(), rect.getZ(), rect.getColor());

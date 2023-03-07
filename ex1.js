function sum(a, b) {
    return a + b;
}
console.log(sum(1, 3));
function Name(name1, name2) {
    return name1 + " " + name2;
}
console.log(Name("Leyla", "Ali"));
function leylaUsers(user) {
    return "".concat(user.name, ", ").concat(user.age, " , ").concat(user.email, ", ").concat(user.isAdmin, " ");
}
console.log(leylaUsers({
    name: "Leyla",
    age: 25,
    email: "user@gmail",
    isAdmin: true
}));
function mihaiProducts(products) {
    return "".concat(product.name, ", ").concat(product.price, ", ").concat(product.description, ", ").concat(product.inStock);
}
var product = {
    name: "Some Product",
    price: 500,
    description: "some description",
    inStock: true
};
//let/const variableName: variableType = value
console.log(mihaiProducts(product));
function ArrayFunc(array) {
    return array.reverse();
}
var array1 = ["ali", "imre", "mihai"];
console.log(ArrayFunc(array1));
function showFirst(array2) {
    if (arr.length > 0) {
        return arr[0];
    }
}
var arr = [1, 4, 5, 12, 123];
console.log(showFirst(arr));
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width,
            this.height = height;
    }
    Rectangle.prototype.getArea = function (width, height) {
        return width * height;
    };
    Rectangle.prototype.getPerimeter = function (width, height) {
        return 2 * (width + height);
    };
    Rectangle.prototype.toString = function () {
        return "Width: ".concat(this.width, " Height: ").concat(this.height);
    };
    return Rectangle;
}());
var rectangle = new Rectangle(25, 15);
console.log(rectangle.toString());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.getCircumference = function () {
        return 2 * Math.PI * this.radius;
    };
    Circle.prototype.toString = function () {
        return "string representation of the circle is ".concat(this.radius);
    };
    return Circle;
}());
var cerc = new Circle(8);
console.log(cerc.getArea());

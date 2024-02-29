var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.displayInfo = function () {
        console.log(this.make, this.model, this.year);
    };
    return car;
}());
var c1 = new car();
c1.make = 'volkswagon';
c1.model = 'virtus';
c1.year = 2024;
c1.displayInfo();

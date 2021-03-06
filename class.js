"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.name = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.whoAreYou = function () {
        return "Hi, I'm " + this.name();
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, course) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.course = '';
        _this.course = course;
        return _this;
    }
    Student.prototype.whoAreYou = function () {
        return _super.prototype.whoAreYou.call(this) + " and I'm studying " + this.course;
    };
    Student.prototype.test = function () {
        console.log(this.firstName);
    };
    return Student;
}(Person));
var alex = new Student('Alex', 'Kibler', 'Angular 5');
console.log(alex.whoAreYou());

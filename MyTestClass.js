"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// MyTestClass.ts
const decoratorsSimpleLogger_1 = require("./decoratorsSimpleLogger");
let MyTestClass = class MyTestClass {
    constructor(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
        this._prop3 = 'ReadOnlyProperty';
    }
    method1() {
        console.log(`method1 called with prop1: ${this.prop1}`);
    }
    method2() {
        console.log(`method2 called with prop2: ${this.prop2}`);
    }
    get prop3() {
        return this._prop3;
    }
};
__decorate([
    decoratorsSimpleLogger_1.LogMethod
], MyTestClass.prototype, "method1", null);
__decorate([
    decoratorsSimpleLogger_1.LogMethod
], MyTestClass.prototype, "method2", null);
__decorate([
    decoratorsSimpleLogger_1.MyReadOnly
], MyTestClass.prototype, "prop3", null);
MyTestClass = __decorate([
    decoratorsSimpleLogger_1.SimpleLogger
], MyTestClass);
exports.default = MyTestClass;

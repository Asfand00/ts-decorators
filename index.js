"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const MyTestClass_1 = __importDefault(require("./MyTestClass"));
const myTestInstance = new MyTestClass_1.default('Hello', 123);
myTestInstance.method1();
myTestInstance.method2();
console.log(myTestInstance.prop3);
// Attempting to set prop3 will trigger the read-only decorator
myTestInstance.prop3 = 'NewValue';
console.log(myTestInstance.prop3);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyReadOnly = exports.LogMethod = exports.SimpleLogger = void 0;
// decoratorsSimpleLogger.ts
function SimpleLogger(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            console.log(`SimpleLogger: ${constructor.name} instantiated with arguments:`, args);
        }
    };
}
exports.SimpleLogger = SimpleLogger;
function LogMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`LogMethod: ${propertyKey} called with arguments:`, args);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
exports.LogMethod = LogMethod;
function MyReadOnly(target, propertyKey, descriptor) {
    descriptor.set = function () {
        console.log(`MyReadOnly: Cannot modify ${propertyKey}`);
    };
}
exports.MyReadOnly = MyReadOnly;

// decoratorsSimpleLogger.ts
function SimpleLogger<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);
            console.log(`SimpleLogger: ${constructor.name} instantiated with arguments:`, args);
        }
    };
}

function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`LogMethod: ${propertyKey} called with arguments:`, args);
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

function MyReadOnly(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.set = function () {
        console.log(`MyReadOnly: Cannot modify ${propertyKey}`);
    };
}

export { SimpleLogger, LogMethod, MyReadOnly };

// index.ts
import MyTestClass from './MyTestClass';

// Create new test Instance of MyTestClass
const myTestInstance = new MyTestClass('Hello', 123);

// Call method 1 with LogMethod 
myTestInstance.method1();

// Call method 2 with LogMethod
myTestInstance.method2();

// print prop3 variable of test instance
console.log(myTestInstance.prop3);

// Attempting to set prop3 will trigger the read-only decorator
(myTestInstance as any).prop3 = 'NewValue';

// Print prop3 again to show the value unchanged 
console.log(myTestInstance.prop3);

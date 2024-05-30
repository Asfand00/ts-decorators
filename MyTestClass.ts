// MyTestClass.ts
import { SimpleLogger, LogMethod, MyReadOnly } from './decoratorsSimpleLogger';

@SimpleLogger
class MyTestClass {
    constructor(public prop1: string, public prop2: number) {}

    @LogMethod
    method1() {
        console.log(`method1 called with prop1: ${this.prop1}`);
    }

    @LogMethod
    method2() {
        console.log(`method2 called with prop2: ${this.prop2}`);
    }

    private _prop3: string = 'ReadOnlyProperty';

    @MyReadOnly
    get prop3(): string {
        return this._prop3;
    }
}

export default MyTestClass;

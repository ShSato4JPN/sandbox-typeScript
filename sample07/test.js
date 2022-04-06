"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormattedValue = void 0;
function getFormattedValue(value) {
    if (value === null)
        return '-- pt';
    return `${value.toFixed(1)} pt`;
}
exports.getFormattedValue = getFormattedValue;
console.log(getFormattedValue(0.1));
console.log(getFormattedValue(0));
console.log(getFormattedValue(null));
function greet(name) {
    if (name) {
        return name.toUpperCase();
    }
    return '';
}
console.log(greet());
console.log(greet('test'));
function test(foo = 'd') {
    return foo;
}
function test2(foo) {
    return foo;
}

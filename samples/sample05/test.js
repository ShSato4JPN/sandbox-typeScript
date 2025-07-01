"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test4 = exports.test3 = exports.test2 = exports.test1 = exports.test = void 0;
function test() {
    return 1000;
}
exports.test = test;
function test1(name) {
    return 'hello. ${name}';
}
exports.test1 = test1;
function test2(name, age) {
    return 'name: ${name}, age: ${age}';
}
exports.test2 = test2;
function test3(name, age) {
    return 'name: ${name}, age: ${age}';
}
exports.test3 = test3;
function test4() {
    return { value: 'foo' };
}
exports.test4 = test4;

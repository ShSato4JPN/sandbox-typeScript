"use strict";
const AVAILABLE_FIELDS = ["TEXT", "NUMBER", "CHECK_BOX"];
const fields = [
    {
        type: "TEXT",
        value: "hello",
    },
    {
        type: "NUMBER",
        value: 100,
    },
    {
        type: "RADIO_BUTTON",
        value: ["AAA", "BBB"],
    },
    {
        type: "CHECK_BOX",
        value: true,
    },
];
const isAvailable = (field) => AVAILABLE_FIELDS.includes(field.type);
const availableFields = fields.filter(isAvailable);
console.log(availableFields);

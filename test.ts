type Normalize<T extends { type: string }> = T;

type TEXT = Normalize<{
  type: "TEXT";
  value: string;
}>;

type NUMBER = Normalize<{
  type: "NUMBER";
  value: number;
}>;

type RADIO_BUTTON = Normalize<{
  type: "RADIO_BUTTON";
  value: string[];
}>;

type CHECK_BOX = Normalize<{
  type: "CHECK_BOX";
  value: boolean;
}>;

type Field = TEXT | NUMBER | RADIO_BUTTON | CHECK_BOX;

const AVAILABLE_FIELDS = ["TEXT", "NUMBER", "CHECK_BOX"];
type AvailableField = TEXT | NUMBER | CHECK_BOX;

const fields: Field[] = [
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

const isAvailable = (field: Field): field is AvailableField =>
  AVAILABLE_FIELDS.includes(field.type);

const availableFields = fields.filter(isAvailable);

console.log(availableFields);

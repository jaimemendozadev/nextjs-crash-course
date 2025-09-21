import { v4 as uuidv4 } from 'uuid';

export function generateFakeData() {
    const todos = [
    "Study DSA",
    "Study React",
    "Buy Groceries",
    "Clean House",
    "Hangout with Parents"
];

const payload = [];

for (let index = 0; index < todos.length; index += 1) {

    payload.push({
        "id": uuidv4(),
        "todo": todos[index],
        "date": new Date(),
    });
  
}

return payload;
}
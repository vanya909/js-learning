let user = {
    name: "John",
    age: 30,
    "knows JS": false,
};

delete user.name;
user.name = "Jack";
user.lastName = "Peter";
user["knows JS"] = true

let carName = "Ford";

// Ford: 100
let car = {
    [carName]: 100,
}

manName = "John";
let man = {
    manName: manName,  // `manName: "John"`
}
// Or
let man2 = {
    manName,  // Same as `menName: menName`
    age: undefined,
}

"manName" in man2;  // true

man2.key == undefined;  // true
"key" in man2;  // false

man2.age == undefined;  // true
"age" in man2;  // true

for (key in man2) {
    alert(key);
}

function isEmpty(someObject) {
    let keysCount = 0;
    for (key in someObject) {
        keysCount++;
    }
    return keysCount == 0;
}
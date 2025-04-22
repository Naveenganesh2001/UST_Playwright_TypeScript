var person = {
    name: "Aaryan",
    age: 30,
    gender: "male"
};
var bmw = {
    name: "m5",
    price: 300000
};
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty(person, "gender"));
console.log(getProperty(bmw, "name"));

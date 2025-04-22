/*interface meow {
    speak: {
        (s: string): string;
        (n: number): string;
    }
}*/
var Meow = /** @class */ (function () {
    function Meow() {
    }
    Meow.prototype.speak = function (arg) {
        if (typeof (arg) === 'number') {
            return "meow number";
        }
        if (typeof (arg) === 'string') {
            return "meow string";
        }
        if (typeof (arg) === 'boolean') {
            return "meow boolean";
        }
    };
    return Meow;
}());
var m2 = new Meow();
console.log(m2.speak(10));
console.log(m2.speak("Aaryan"));
console.log(m2.speak('vishal'));
console.log(m2.speak(true));

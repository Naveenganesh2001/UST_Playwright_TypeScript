/*interface meow {
    speak: {
        (s: string): string;
        (n: number): string;
    }
}*/

class Meow {
    speak(s: string): string;
    speak(n: number): string;
   speak(m: boolean): string;
    speak(arg: any): any {
        if(typeof(arg) === 'number') {
            return "meow number"
        } if(typeof(arg) === 'string') {
            return "meow string";
        }
        if(typeof(arg) === 'boolean') {
            return "meow boolean";
        }
    }
}

let m2 = new Meow();

console.log(m2.speak(10));
console.log(m2.speak("Aaryan"));
console.log(m2.speak('vishal'));
console.log(m2.speak(true));
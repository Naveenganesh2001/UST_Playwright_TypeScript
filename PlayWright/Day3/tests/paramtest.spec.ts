// paramterized 
import test from "@playwright/test";

test.describe.configure({ mode: 'parallel' });

[
    {name: 'Naveen', msg: 'Hello'},
    {name: 'Deepak', msg: 'Hey'},
    {name: 'Vishal', msg: 'Hola'},
    {name: 'Ranjit', msg: 'Hello'},
    {name: 'Arjun', msg: 'Hey'},
    {name: 'Yash', msg: 'Hola'}
].forEach(({name, msg}) => {
    test(`testing with ${name}`, async ({page}) => {
        // await page.goto('');

    });
})
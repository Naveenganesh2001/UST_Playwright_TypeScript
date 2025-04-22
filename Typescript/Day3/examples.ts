/*const fruits = ['apple', 'banana'];
const moreFruits = ['mango', 'orange'];
const allFruits = [...fruits, ...moreFruits];
console.log(allFruits);

const original = [1, 2, 3];
const copy = [...original];
console.log(copy);*/

type Userr = {
    name: string;
    ageNum: number;
  };
  
  const user1: Userr = {
    name: 'Naveen',
    ageNum: 23,
  };
  
  type Status = 'success' | 'error' | 'loading';
  let currentStatus: Status;
  currentStatus = 'success';
  
  type Address = {
    city: string;
    zipCode: string;
  };
  
  type Person = Userr & Address;
  
  const person: Person = {
    name: 'deepak',
    ageNum: 30,
    city: 'India',
    zipCode: '641001',
  };
  

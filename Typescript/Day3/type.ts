type roles = "Trainer" | "Developer" | "Tester";
interface User1 {
name: string; //String name;
id: number; // int id;
role: roles;
}
class UserAcc {
name: string; // String name
id: number; // int id
role: roles;
constructor(name: string, id: number, role: roles) { // UserAccount(String name, int id) {}
this.name = name; // similar java
this.id = id;
this.role = role;
 }
}
function main1() {
const user1: User1 = new UserAcc("Aaryan", 1, "Trainer"); // User user = new UserAccount("Aaryan", 1);
const user3: User1 = new UserAcc("Kirti", 2, "Tester");
console.log(user1.role, user3.role);
}
main1();
var UserAcc = /** @class */ (function () {
    function UserAcc(name, id, role) {
        this.name = name; // similar java
        this.id = id;
        this.role = role;
    }
    return UserAcc;
}());
function main1() {
    var user1 = new UserAcc("Aaryan", 1, "Trainer"); // User user = new UserAccount("Aaryan", 1);
    var user3 = new UserAcc("Kirti", 2, "Tester");
    console.log(user1.role, user3.role);
}
main1();

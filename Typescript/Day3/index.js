var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name; // similar java
        this.id = id;
    }
    return UserAccount;
}());
function main() {
    var user = new UserAccount("Aaryan", 1); // User user = new UserAccount("Aaryan", 1);
    var user2 = new UserAccount("Kirti", 2);
    console.log(user.name, user2.name);
}
main();
function sum(num) {
    if (Array.isArray(num)) { // checks if num is array
        var sum_1 = 0;
        num.forEach(function (e) { return sum_1 += e; });
        return sum_1;
    }
    return num;
}
console.log(sum(5));

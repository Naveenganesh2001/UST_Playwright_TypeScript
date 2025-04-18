function getName() {
    return document.getElementById("name").value;
}

function getAge() {
    return document.getElementById("age").value;
}

function getRole() {
    return document.getElementById("role").value;
}

function getSalary() {
    return document.getElementById("salary").value;
}

function getEmail() {
    return document.getElementById("email").value;
}

function getPhoneNumber() {
    return document.getElementById("phone").value;
}

function validateName(name) {
    const nameError = document.getElementById("nameErr");
    if (name.length >= 3) {
        nameError.style.display = "none";
        return true;
    } else {
        nameError.style.display = "block";
        return false;
    }
}

function validateAge(age) {
    const ageError = document.getElementById("ageErr");
    if (age >= 18) {
        ageError.style.display = "none";
        return true;
    } else {
        ageError.style.display = "block";
        return false;
    }
}

function validateEmail(email) {
    const emailError = document.getElementById("emailErr");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(email)) {
        emailError.style.display = "none";
        return true;
    } else {
        emailError.style.display = "block";
        return false;
    }
}

function validatePhone(phone) {
    const phonePattern = /^\+91\s\d{10}$/;
    const phoneError = document.getElementById("phoneErr");

    if (phonePattern.test(phone)) {
        phoneError.style.display = "none";
        return true;
    } else {
        phoneError.style.display = "block";
        return false;
    }
}

function displayErrorMsg(msg) {
    document.getElementById("vmsg").innerHTML = msg;
}

function submit() {
    const name = getName();
    const age = getAge();
    const role = getRole();
    const salary = getSalary();
    const email = getEmail();
    const phone = getPhoneNumber();

    const isNameValid = validateName(name);
    const isAgeValid = validateAge(age);
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);

    if (!(isNameValid && isAgeValid && isEmailValid && isPhoneValid)) {
        // displayErrorMsg("Please fix the errors above.");
        return; // Stop the form submission if validation fails
    }

    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("role", role);
    localStorage.setItem("salary", salary);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("owner", role === 'Trainer' ? 'Admin' : 'User');

    window.open('displayPage.html', '_blank');
}

function submit(){
    const name = document.getElementById('name').value.toString();
    const age = document.getElementById('age').value.toString();
    const roll = document.getElementById('roll').value.toString();
    const email = document.getElementById('email').value.toString();
    const mobileNumber = document.getElementById('mobileNumber').value.toString();

    const userDetails = {
        name: name,
        age: age,
        roll: roll,
        email: email,
        mobileNumber: mobileNumber
    };

    const userDetailsString = JSON.stringify(userDetails);
    console.log(userDetailsString);
    localStorage.setItem('userDetails', userDetailsString);


    window.open('newPage.html', '_blank')
}
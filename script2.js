// form 

const form = document.getElementById('form');
console.log(form)



form.addEventListener("submit", function (event) {
    const name = form.elements['name'];
    const phone = form.elements['phonenumber'];
    const email = form.elements['email'];

    let fullName = name.value;
    let phoneNumber = phone.value;
    let emailAddress = email.value;
	// stop form submission
	event.preventDefault();
    event.stopPropagation();
    console.log(fullName)
    console.log(phoneNumber)
    console.log('hi')
// sendint it to your email
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "silviawilliams631@gmail.com",
        Password : "CE6A4B0DCDBE7E836968DEC4556D895C1800",
        To : 'silviawilliams631@gmail.com',
        From : 'silviawilliams631@gmail.com',
        Subject : "Incoming MOD 1 Email",
        Body : "Girl, you doing a good job! Insert Survey"
    }).then(
      message => alert(message)
    );
});

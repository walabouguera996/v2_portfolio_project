let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let secions = document.querySelectorAll ('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () =>{
    secions.forEach (sec => {
        let top = window.scrollY;
        let offset =sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute ('id');

        if(top >= offset && top < offset + height ){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add ('active')
            })
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail(){
const bodyMessage = ' Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}<br> ';

    email.send({
    Host : "smtp.elasticemail.com",
    Username : "admevariious@gmail.com",
    Password : "9E0F71C08A67B47A9CA9799787F1B7FDA677",
    To : 'admevariious@gmail.com',
    form : "this subject",
    Subject : subject.value,
    Body : bodyMessage
}).then(
message => {
    if (message =="OK") {
        Swal.fire({
            title: "Success",
            text: "Message send successfully!",
            icon: "success"
        });
}
}
);
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
})
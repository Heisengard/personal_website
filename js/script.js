
// toogle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll sections

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');




window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height) {
            // active navbar liks
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');

        }
        // if want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');
        }



    });


    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY >100);

    // remove toggle icon and nav bar when click navbar links (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}

//code to send email from js

const form = document.querySelector("form");
const fullName = document.getElementById("nombre");
const email = document.getElementById("correo");
const phone = document.getElementById("telefono");
const subject = document.getElementById("motivo");
const mess = document.getElementById("mensaje");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value} <br> Phone Number: ${phone.value} <br> Message: ${mess.value}`;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "richardramirez91@gmail.com",
        Password : "6A38F4BCE9B972E8911BDAECE3F6566BA416",
        To : 'richardramirez91@gmail.com',
        From : "richardramirez91@gmail.com",
        Subject : subject.value,
        Body : bodyMessage,
    }).then(
        message => {
            if (message == "OK"){
                Swal.fire({
                    title: "Muy bien!",
                    text: "Mensaje enviado, pronto tendrás una respuesta de mi parte",
                    icon: "success"
                });

            }
        }
    );

    for (var i=0; i < form.elements.length; i++){
        if (form.elements[i].type !== "button"){
            form.elements[i].value = "";
        }

    }
}

// function checkInputs() {
//     const items = document.querySelectorAll(".item");

//     for (const item of items) {
//         if (item.value == "") {
//             item.classList.add("error");
//             item.parentElement.classList.add("error");
//         }

//         if (items[1].value != "") {
//             checkEmail();
//         }

//         items[1].addEventListener("keyup", ()=> {
//             checkEmail();
//         });

//         item.addEventListener("keyup", ()=> {
//             if (item.value != "") {
//                 item.classList.remove("error");
//                 item.parentElement.classList.remove("error");
//             }
//             else {
//                 item.classList.add("error");
//                 item.parentElement.classList.add("error");
//             }
//         });
//     }
// }

// function checkEmail() {
//     const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
//     const errorTxtEmail = document.querySelector(".error-txt.email");

//     if (!email.value.match(emailRegex)) {
//         email.classList.add("error");
//         email.parentElement.classList.add("error");

//         if (email.value != ""){
//             errorTxtEmail.innerText = "Por favor ingresa una dirección de correo válida"
//         }
//         else
//         errorTxtEmail.innerText = "La dirección de correo no debe estar vacía"
//     }
//     else {
//         email.classList.remove("error");
//         email.parentElement.classList.remove("error");
//     }
// }

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // checkInputs();

    sendEmail();


})


let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let message = document.getElementById('message')
let consent = document.getElementById('consent')

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formani topshirishni to'xtatadi

    // Modalni ko'rsatish
    var modal = document.getElementById("successModal");
    modal.classList.add('show');
});

var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    var modal = document.getElementById("successModal");
    modal.classList.remove('show');

    firstName.value = ''
    lastName.value = ''
    email.value = ''
    message.value = ''
}

window.onclick = function(event) {
    var modal = document.getElementById("successModal");
    if (event.target == modal) {
        modal.classList.remove('show');
    }
}

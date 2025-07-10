
function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_7rwbbrp", "service_7rwbbrp", parms).then(alert("Email Sent!!"))
}
function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    // Disable the send button while the request is being processed
    let sendButton = document.getElementById("sendMessageButton");
    sendButton.disabled = true;

    emailjs.send("service_fe82jar","template_fdvhzim", parms)
        .then(function (response) {
            // Success message
            let successMessage = "<div class='alert alert-success'>";
            successMessage += "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>";
            successMessage += "<strong>Your message has been sent. </strong>";
            successMessage += "</div>";

            document.getElementById('success').innerHTML = successMessage;

            // Reset form
            document.getElementById("contactForm").reset();
        })
        .catch(function (error) {
            // Error message
            let errorMessage = "<div class='alert alert-danger'>";
            errorMessage += "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>";
            errorMessage += "<strong>Sorry, there was an error sending your message. Please try again later.</strong>";
            errorMessage += "</div>";

            document.getElementById('success').innerHTML = errorMessage;

            // Reset form
            document.getElementById("contactForm").reset();
        })
        .finally(function () {
            // Re-enable the send button after 1 second
            setTimeout(function () {
                sendButton.disabled = false;
            }, 1000);
        });
}

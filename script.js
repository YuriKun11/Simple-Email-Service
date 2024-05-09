(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "0gE8ynVDJTB3CzNYp",
    });
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        var userName = document.getElementById('user_name').value;
        var userEmail = document.getElementsByName('user_email')[0].value;
        var message = document.getElementById('message').value;

        //! IMPORANT ! //
        //I changed the to_name as user_email so that I can send the gmail of the user in the message
        emailjs.send("service_8yzo5kq","template_589oxah",{
            from_name: userName,
            to_name: userEmail,
            message: message,
        })
        .then(() => {
            console.log('SUCCESS!');
            showToast('Message sent successfully!');
            document.getElementById('contact-form').reset(); // Clear form fields
        }, (error) => {
            console.log('FAILED...', error);
        });
    });
}

function showToast(message) {
    var toast = document.getElementById("toast");
    toast.innerHTML = message;
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}

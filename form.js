function onClick(event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var emali = document.getElementById("emali").value.trim();
    var PhoneNumber = document.getElementById("PhoneNumber").value.trim();
    var Service = document.getElementById("Service").value.trim(); 
    var message = document.getElementById("message").value.trim();

    if (name === "") {
        alert(" Please enter your Name!");
        return;
    }
    if (emali === "") {
        alert(" Please enter your Email Address!");
        return;
    }
    if (PhoneNumber === "") {
        alert(" Please enter your Phone Number!");
        return;
    }
    if (Service === "") {
        alert(" Please select or enter a Service!");
        return;
    }
    if (message === "") {
        alert(" Please enter your Message!");
        return;
    }

    var number = "923353947560";
    var text = `New Appointment Request
Name : ${name}
PhoneNumber : ${PhoneNumber}
Email : ${emali}
Message : ${message}
Service : ${Service}`;

    var url = "https://whatsapp.com" + number + "&text=" + encodeURIComponent(text);

    window.location.href = url;
}














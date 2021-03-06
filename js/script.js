'use strict';

var mensajeValidarMail = "No se admiten correos con dominio hotmail.com, gmail.com, outlook.com o yahoo.com.";

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    let listNav = document.getElementById('navbar-collapse-1');
    listNav.classList.remove('pull-right');
}

function handleSubmitMail (event) {
    event.preventDefault();
    let email = document.getElementById('email');
    console.log("email",email);
    if (/@hotmail.com\s*$/.test(email.value.toLowerCase()) || /@gmail.com\s*$/.test(email.value.toLowerCase()) || /@outlook.com\s*$/.test(email.value.toLowerCase()) || /@yahoo.com\s*$/.test(email.value.toLowerCase())) {
        let alertError = document.getElementById('mail_fail_email');
        alertError.style.display = "block";
        alertError.innerHTML = mensajeValidarMail;
        setTimeout(function () { alertError.style.display = "none"; }, 5000);
    } else {
        let data = [
            {
                "name": "email",
                "value": email.value
            },
        ];

        let json_value = {
            "fields": data,
            "skipValidation": false
        };

        $.ajax({
            url: 'https://api.hsforms.com/submissions/v3/integration/submit/6719688/b60a7d63-ceeb-42e3-ae87-c81eefde43af',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(json_value),
            success: function (response) {
                document.getElementById('formEmail').reset();
                let alertSucces = document.getElementById('mail_success_email');
                alertSucces.style.display = "block";
                setTimeout(function () { alertSucces.style.display = "none"; }, 5000);
            },
            error: function (response) {
                let alertError = document.getElementById('mail_fail_email');
                alertError.style.display = "block";
                setTimeout(function () { alertError.style.display = "none"; }, 5000);
            }
        });
    }

}

function handleSubmitContact (event) {
    event.preventDefault();
    let name = document.getElementById('name');
    let correo = document.getElementById('correo');
    let phone = document.getElementById('phone');
    let company = document.getElementById('company');
    let message = document.getElementById('message');

    if (/@hotmail.com\s*$/.test(correo.value.toLowerCase()) || /@gmail.com\s*$/.test(correo.value.toLowerCase()) || /@outlook.com\s*$/.test(correo.value.toLowerCase()) || /@yahoo.com\s*$/.test(correo.value.toLowerCase())) {
        let alertError = document.getElementById('mail_fail_contact');
        alertError.style.display = "block";
        alertError.innerHTML = mensajeValidarMail;
        setTimeout(function () { alertError.style.display = "none"; }, 5000);
    } else {
        let data = [
            {
                "name": "firstname",
                "value": name.value
            },
            {
                "name": "email",
                "value": correo.value
            },
            {
                "name": "phone",
                "value": phone.value
            },
            {
                "name": "company",
                "value": company.value
            },
            {
                "name": "mensaje",
                "value": message.value
            },
        ];

        let json_value = {
            "fields": data,
            "skipValidation": false
        };

        $.ajax({
            url: 'https://api.hsforms.com/submissions/v3/integration/submit/6719688/c1411d6c-5c9f-4c20-a89f-a3d7531f06ba',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(json_value),
            success: function (response) {
                document.getElementById('contact_form').reset();
                let alertSucces = document.getElementById('mail_success_contact');
                alertSucces.style.display = "block";
                setTimeout(function () { alertSucces.style.display = "none"; }, 5000);
            },
            error: function (response) {
                let alertError = document.getElementById('mail_fail_contact');
                alertError.style.display = "block";
                setTimeout(function () { alertError.style.display = "none"; }, 5000);
            }
        });
    }
}

let videoDiv = document.getElementById('video-div');

let videoTag = `<video id="video" autoplay="" loop="" muted="" poster="images/video-poster.jpg" class="VIDEO_HOLDER" playsinline>
<source src="videos/video-1_2.mp4" type="video/mp4"/>
</video>`;

videoDiv.innerHTML = videoTag;


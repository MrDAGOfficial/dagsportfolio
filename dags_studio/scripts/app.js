function returnToDefault() {
    var alertBox = document.getElementById("alert-container");
    var alertTypePri = document.getElementById("alert");
    var alertTypeSec = document.getElementById("alert2");
    if (alertBox.style.display === "flex") {
        alertBox.style.display = "none";
        alertTypePri.style.display = "none";
        alertTypeSec.style.display = "none";
    } else {
        alertBox.style.display = "flex";
        alertTypePri.style.display = "flex";
        alertTypeSec.style.display = "flex";
    }
}

function unavailableDisplay() {
    var alertBox = document.getElementById("alert-container");
    var alertType = document.getElementById("alert");
    if (alertBox.style.display === "none") {
        alertBox.style.display = "flex";
        alertType.style.display = "flex";
    } else {
        alertBox.style.display = "none";
        alertType.style.display = "none";
    }
}

function nopriceDisplay() {
    var alertBox = document.getElementById("alert-container");
    var alertType = document.getElementById("alert2");
    if (alertBox.style.display === "none") {
        alertBox.style.display = "flex";
        alertType.style.display = "flex";
    } else {
        alertBox.style.display = "none";
        alertType.style.display = "none";
    }
}

function selectService() {
    var sel = document.getElementById("selector");
    var opt = sel.options[sel.selectedIndex];
    var basic = document.getElementById("basic");
    var standard = document.getElementById("standard");
    var premium = document.getElementById("premium");

    let webDevArrB = ['1 Page', 'Responsive Desgin', 'Content Upload', 'Design Customization', 'Source Code', '1 Revision', '7 Days (Delivery Time)'];
    let webDevArrS = ['3 Pages', 'Responsive Desgin', 'Content Upload', 'Design Customization', 'Source Code', '3 Revisions', '14 Days (Delivery Time)'];
    let webDevArrP = ['5 Pages', 'Responsive Desgin', 'Content Upload', 'Design Customization', 'Source Code', 'Unlimited Revisions', '21 Days (Delivery Time)'];

    if (sel.selectedIndex == 1) {
        //BASIC
        for (i = 0; i <= webDevArrB.length - 1; i++) {
            var li = document.createElement('li');
            console.log(li);
            li.innerHTML = webDevArrB[i];
            basic.appendChild(li);
        }
        //STANDARD
        for (i = 0; i <= webDevArrS.length - 1; i++) {
            var li = document.createElement('li');
            console.log(li);
            li.innerHTML = webDevArrS[i];
            standard.appendChild(li);
        }
        //PREMIUM
        for (i = 0; i <= webDevArrP.length - 1; i++) {
            var li = document.createElement('li');
            console.log(li);
            li.innerHTML = webDevArrP[i];
            premium.appendChild(li);
        }
    } else {
        basic.innerHTML = "Selected Service is Unavailable";
        standard.innerHTML = "Selected Service is Unavailable";
        premium.innerHTML = "Selected Service is Unavailable";
    }

}
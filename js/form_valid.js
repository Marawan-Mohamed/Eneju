let password = document.getElementById("password");
document.getElementById("message").style.display = "block";

console.log(document.forms[document.forms.length - 1]);

document.forms[document.forms.length - 1].onsubmit = function (event) {
    let pass = password.value;
    function message (mess) {
        document.getElementById("message").style.display = "block";
        document.getElementById("message").innerText = mess;
        event.preventDefault();
    }
    if(pass.length != 8) {
        message("Password must include 8 characters no more no less.");
    }else {
        if(!(pass[0] >= 'A' && pass[0] <= 'Z')) {
            message("Password must start with uppercase character");
        }else {
            let special = 0, digit = 0;
            for (var i = 0; i < pass.length; i++) {
                if (!isNaN(pass[i])) digit++;
                else if ((pass[i] >= '!' && pass[i] <= '@') || (pass[i] >= '[' && pass[i] <= '`')) special++; 
            }
            if(pass.includes(' ')) message("No white spaces allowed in the password");
            else if(digit === 0) message("Password must include one digit at least");
            else if (special != 1) message("Password must include one special character like -,_,#, &, and *");
            else {
                event.preventDefault();
                document.querySelector(".success").classList.add("active");
                setTimeout(() => {
                    window.location.href = "./index.html";
                }, 3000);
            }
        }
    }
}

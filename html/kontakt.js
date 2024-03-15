document.addEventListener('invalid', (function(){
    return function(e) {
        e.preventDefault();
    };
})(), true);

function validacija() {
    var pass = document.getElementById("lozinka");
    var passGreska = document.getElementById("lozEr");
    var email = document.getElementById("email");
    var emailError = document.getElementById("emEr");

    if (!pass.value.match(/(?=.*[0-9])(?=.*[A-Z]).{6,6}/)) {
        alert ("Lozinka nije ispravno uneta!");
        pass.style.backgroundColor = 'red';
        return false;
    }
    else if (!email.value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
        alert ("E-mail adresa nije ispravna!");
        email.style.backgroundColor = 'red';
        return false;
    } else {
        pass.style.backgroundColor = 'aquawhite';
        email.style.backgroundColor = 'aquawhite';
        alert("Uspešna verifikacija!");
        return true;
    }
}